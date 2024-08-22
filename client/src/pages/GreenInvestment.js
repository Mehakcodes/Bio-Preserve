import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


const GreenInvestment = () => {
    const sidebar_data = [
        {
            title: "Biodiversity Conservation Projects",
            path: "/Green_Investment/Green_Projects"
        },
        {
            title: "Heritage Sites Conservation Projects",
            path: "/Green_Investment/Renewable_Energy_Funds"
        }
       
    ]
    return (
        <div className="w-full overflow-x-hidden">
        <div className="flex w-screen  justify-stretch">
        <Sidebar data={sidebar_data}/>
        
        <div className="grow flex justify-center overflow-x-hidden ">
          <Outlet/>     
        </div>
      </div>
      </div>

      );
}
 
export default GreenInvestment;