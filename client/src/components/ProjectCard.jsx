import {useNavigate} from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";

const ProjectCard = (props) => {
  
  const navigate = useNavigate();
    const details=props.data;

    return (  
        <div className="w-[25rem] h-[33rem] mx-1">
        <div className="card rounded-xl p-4 w-[25rem] h-[33rem] flex flex-col hover:scale-105 transition-all ease-in-out bg-white ">

        <img src={details.projectImgUrl} alt="placeholder" className="w-full h-[14.5rem] mb-2 rounded-xl"/>

        <h1 className="text-xl font-bold " >{details.projectTitle}</h1>
        <p className="text-gray-500 text-sm details">{details.company_name}</p> 
        <div className="flex justify-start items-center mt-2 gap-1 pb-3 text-gray-800 ">
            <p className=" flex items-center gap-1"><IoTimeOutline/>{details.projectDeadline} days left</p>
            <p >|</p>
            <p > {details.project_percent}% funded </p>
        </div>
        
        <p className="text-sm description">{details.projectDescription.split(" ").slice(0,40).join(" ")+" . . ."}</p>
        <div className="flex flex-wrap mt-4">
        <p className="me-2 border-solid border px-2 rounded-xl text-sm hover:bg-green-400/10">{details.project_category}</p>
        <p className="border-solid border px-2 rounded-xl text-sm  hover:bg-green-400/10">{details.project_location}</p>
        </div>
        <div className=" grow flex justify-center items-end mt-3">
            <button className="bg-green-500/50 py-1 px-3 rounded-md hover:bg-green-500/80" onClick={
                ()=>{
                  
                  navigate("/Invest", {state: {project: details}, replace: true});
                }
            } >Donate</button>
        </div>
        </div>
        </div>
    );
}
 
export default ProjectCard;