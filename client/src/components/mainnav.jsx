import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const MainNav = ({isLogged, setIsLogged}) => {
  const NavItems = [
    {
      path: "/",
      title: "Home",
    },
    // {
    //   path: "/E-Banking",
    //   title: "E-Banking",
    // },
    {
      path: "/green_investment/green_projects",
      title: "Donate Now",
    },
    {
      path: "/Upcoming-events",
      title: "Upcoming Events",
    },
    {
      path: "/store",
      title: "Store",
    },
    // {
    //   path: "/CreditHub",
    //   title: "CreditHub",
    // },
    // {
    //   path: "/Projects",
    //   title: "Projects",
    // },

    {
      path: "/Publish",
      title: "Publish your campaign",
    },
    

    // {
    //   path: "/CarbonCoin",
    //   title: "Carbon Offset Tracker",
    // },
    // {
    //   path: "/CarbonTrading",
    //   title: "Carbon Trading"
    // },
    {
      path: "/Profile",
      title: "Profile",
    },
    {
      path: "/",
      title: "Logout",
    }
  ];
  const navigate= useNavigate();

  const handleClick = async () => {
    setIsLogged(false);
    localStorage.clear();
    navigate("/");

  };

  return (
    <nav className="main-nav flex place-content-between bg-black text-white items-center h-14 text-xl">
      <h1 className="px-10 font-bold">EcoPreserve Horizon</h1>
      <div className="flex h-full items-stretch">
        {NavItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({
              isActive,
              isPending
            }) =>
              isPending
                ? "hover:bg-green-900 "
                : isActive
                ? "bg-green-800/80 px-6 flex h-full items-center justify-center "
                : "px-6 hover:bg-green-800/[0.3] flex h-full items-center justify-center "
            }
            onClick={() => {
              if (item.title === "Logout") {
                handleClick();
              }
            }}
          >
            <p>{item.title}</p>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;
