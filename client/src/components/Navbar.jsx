import React from 'react';
import { NavLink } from 'react-router-dom'; // Import Link component
import UserContext  from '../contexts/UserContext';
import { useContext } from 'react';



const Navbar = () => {
  const {isLogged} = useContext(UserContext);
  const NavItems = [
    {
      path: "/",
      title: "Home",
    },

    {
      path: "/Projects",
      title: "Projects",
    },
    
    {
      path: "/Upcoming-events",
      title: "Upcoming Events",
    },
  
    {
      path: "/store",
      title: "Store",
    },

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

  ];
 
  return (
    <nav className=" main-nav flex place-content-between bg-black text-white items-center h-14 text-[1.2rem]" >
    <h1 className="px-10 font-bold text-xl">BioPreserve</h1>
    <div className="flex h-full items-stretch">
        {
            NavItems.map((item,index) => (
            
              <NavLink key={index} to={item.path} className={({ isActive, isPending }) =>
                isPending ? "hover:bg-green-900 " : isActive ? "bg-green-800/80 px-6 flex h-full items-center justify-center  " : "px-6 hover:bg-green-800/[0.3] flex h-full items-center justify-center "
              }><p>{item.title}</p></NavLink>
            ))
        }
        {
          isLogged ? <NavLink to="/logout" className="px-6 hover:bg-green-800/[0.3] flex h-full items-center justify-center "><p>Logout</p></NavLink> : <NavLink to="/signin" className={({ isActive, isPending }) =>
            isPending ? "hover:bg-green-900 " : isActive ? "bg-green-800/80 px-6 flex h-full items-center justify-center  " : "px-6 hover:bg-green-800/[0.3] flex h-full items-center justify-center " }><p>Sign In/Sign Up</p></NavLink>
        }



    </div>
</nav>

  );
};

export default Navbar;
