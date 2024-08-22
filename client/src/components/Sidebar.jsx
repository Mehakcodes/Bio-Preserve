import { NavLink } from "react-router-dom";
const Sidebar = (props) => {
    const Items = props.data;
    
    return ( 
        <div className="h-full">
            <nav className="h-full flex flex-col shadow-xl border-r w-40 min-w-max">
            {  Items.map((item,index) => (
                    <NavLink key={index} to={item.path} className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "p-4 bg-green-950/20 " : "p-4 hover:bg-green-950/5 "
                  }>{item.title}</NavLink>
                ))
            }
            </nav>
        </div>
    );
}
 
export default Sidebar;