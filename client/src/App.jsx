import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import DonateProject from "./pages/DonateProject";
import PublishCampaign from "./pages/PublishCampaign";
import PersonalDetails from "./components/PersonalDetails";
import Profile from "./pages/Profile";
import MainNav from "./components/mainnav";
import Navbar from "./components/Navbar";
import Calenderc from "./pages/Calenderc";
import Store from "./pages/Store";
import { useState , useEffect} from "react";


function App() {
const [isLogged, setIsLogged] = useState(false);
const [refresh, setRefresh] = useState(false);

  const handleProjectAdded = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("customer");
    if (userLoggedIn) {
      setIsLogged(true);
    }
  }, []);
  return (
    
    <div className="overflow-x-hidden">
      <header>
    
        {isLogged ? <MainNav isLogged={isLogged} setIsLogged={setIsLogged}/> : <Navbar/>}
      </header>

      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<DonateProject refresh={refresh}/>} />
          <Route path="/Publish" element={<PublishCampaign onProjectAdded={handleProjectAdded}/>} />
          <Route path="/Upcoming-events" element={<Calenderc />} />
          <Route path="/store" element={<Store />} />


         
          <Route path="/Signin" element={<Signin isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path="/Signup" element={<Signup  isLogged={isLogged} />} />

          <Route exact path="profile" element={<Profile />}>
            <Route
              exact
              path="personal_details"

              element={<PersonalDetails />}
            />
            <Route exact path="" element={<Navigate to="personal_details" />} />
          </Route>
         
          {/* <Route path="Transactions" element={<Transactions />} /> */}
          <Route path="Invest" element={<Invest/>} />

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

