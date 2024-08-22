
import Sidebar from '../components/Sidebar';
import { Outlet,Navigate} from 'react-router-dom';


function Profile() {
  const profileItems=[
    {
        path:'personal_details',
        title:'Personal Details'
    }
]

  return (
   
      <div className="w-screen">
        <div className="flex w-full h-screen justify-stretch">
        <Sidebar data={profileItems}/>
       
       
        
        <div className="grow flex justify-center overflow-x-hidden overflow-y-scroll ">
          <Outlet/>     
        </div>
      </div>
      </div>



  );
}

export default Profile;