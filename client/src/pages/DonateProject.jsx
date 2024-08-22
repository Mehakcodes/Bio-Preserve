import ProjectCard from "../components/ProjectCard";
import React, { useEffect, useState } from 'react';



const DonateProject = ({refresh}) => {

    const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const loadProjects = async () => {
  //     const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
  //     await window.ethereum.enable();
  //     setWeb3(web3);
  //     const accounts = await web3.eth.getAccounts();
  //     setAccounts(accounts);
  //     const networkId = await web3.eth.net.getId();
  //     const fundRaisingNetwork = FundRaisingContract.networks;
  //     const projectNetwork = ProjectContract.networks;
  //     const contractAddress = fundRaisingNetwork[networkId].address;
  //     const contractABI = FundRaisingContract.abi;

  //     const contract = new web3.eth.Contract(contractABI, contractAddress);

  //     const projectAddresses = await contract.methods.returnAllProjects().call();
  //     console.log(projectAddresses);

  //     const projectDetails = await Promise.all(
  //       projectAddresses.map(async (address) => {
  //         const project = new web3.eth.Contract(ProjectContract.abi, address);
  //         const details = await project.methods.getDetails().call();
  //         return { address, ...details };
  //       })
  //     );

  //     setProjects(projectDetails);
  //     console.log(projects);
  //   };

  //   loadProjects();
  // }, [refresh]);

    const reccommended_projects=[{
      project_name:'Save the Elephants',
      company_name:'Forrest Preserve',
      project_image:'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xMF9waG90b19vZl9hbl9lbGVwaGFudF9pbl90aGVfd2lsZF9zYXZhbm5hX3NpZF9iYWNmNjBmNC1lYzVmLTQxMzgtYmQ3OC0zMzM3YzRkOGQ1ODcuanBn.jpg',
      project_description:'The Save Elephants Project is a comprehensive conservation initiative dedicated to protecting elephant populations and their habitats. This project focuses on anti-poaching efforts through patrols, advanced technologies, and community involvement, while also working to preserve and restore habitats by creating protected areas and wildlife corridors. To mitigate human-elephant conflicts, the project installs barriers, sets up early warning systems, and implements compensation schemes for affected farmers. It emphasizes scientific research, public education, and capacity building to enhance conservation strategies. Additionally, the project advocates for stronger legislation and international cooperation to combat the illegal ivory trade and ensure effective protection policies for elephants globally.',
      project_goal:'200000',
      project_min:'1000',
      project_daysleft:'30',
      project_percent:'50',
  },
  {
      project_name:'Tree Planatation Mysore',
      company_name:'Terra Greens',
      project_image:'https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg',
      project_description:'Tree Plantation Project is a crucial environmental initiative aimed at combating deforestation, restoring ecosystems, and mitigating climate change by planting trees in degraded and deforested areas. This project involves selecting suitable native tree species, preparing the land, and engaging local communities in the planting and maintenance processes. It emphasizes the ecological benefits of trees, such as enhancing biodiversity, improving air and soil quality, and providing habitats for wildlife. Additionally, the project promotes awareness and education on the importance of reforestation and sustainable land use practices. Through collaborative efforts with governments, NGOs, and community groups, the Tree Plantation Project seeks to create green spaces that support both environmental health and community well-being.',
      project_goal:'780000',
      project_min:'80',
      project_daysleft:'34',
      project_percent:'70',
  },
  {
      project_name:'Juhu Beach Cleanup',
      company_name:'Green Earth Foundation',
      project_image:'https://happybreath.com/wp-content/uploads/2021/01/Save-Our-Beaches-Happy-Breath.jpg',
      project_description:'The Juhu Beach Cleanup is a dedicated environmental initiative focused on removing litter and pollution from Juhu Beach in Mumbai, enhancing its natural beauty and preserving the local ecosystem. This project mobilizes volunteers, including local residents, environmental groups, and corporate teams, to regularly participate in beach clean-up drives. It aims to raise public awareness about the impacts of plastic pollution and the importance of maintaining clean coastal areas. Through these collective efforts, the Juhu Beach Cleanup not only restores the beach aesthetic appeal but also promotes environmental stewardship and sustainable waste management practices in the community',
      project_goal:'78000',
      project_min:'230',
      project_daysleft:'12',
      project_percent:'98',
  },];
    
    return ( 
        <div className="bg-black w-full ">
            <h1 className=" text-white text-8xl text-center pt-8 pb-6 ">Projects</h1>
            <h1 className=" text-white font-bold text-2xl text-center pt-4 pb-10 ">
                Explore the projects and donate to preserve biodiversity and cultural heritage
            </h1>
            <div className=" display-grid ">
            {
                projects.map((project)=>(
                    <ProjectCard key={project.title} data={project} />
                ))
            }

            </div>
        </div>
     );
}
 
export default DonateProject;