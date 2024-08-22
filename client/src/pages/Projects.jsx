import React from 'react'
import LeftHome from "../components/LeftHome";
import RightHome from "../components/RightHome";


const Projects = () => {
  return (
    <div className="w-screen overflow-x-hidden  bg-[#f2eae0d6]">
          <div className="w-screen h-[50rem]  relative z-0 pb-24">
  <div className="relative">
    <div className="video-container">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{
          filter: "blur(0px) brightness(0.4) contrast(1.5)",
        }}
      >
        <source
          src="https://res.cloudinary.com/debw7vpqa/video/upload/v1715214059/syxfq8tvpf5ucx90yqjm.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>

  <div className=" absolute z-10 font-bold text-9xl text-white opacity-65 top-44 text-center " >

  <div  className="text-center">
  Explore Sustainable Projects Near You    </div>

  <div className="h-8 ">

  </div>
  
  <div className=" flex justify-center w-full mt-96">
   
   {/* <div className="font-bold  px-6 py-4  text-white  text-2xl rounded-lg bg-green-700  cursor-pointer absolute z-20  hover:bg-green-500">
   Invest Now
    </div>  */}

  </div>
  </div>
</div>

<div className='pt-24'>
    <RightHome
        title="Spotlight on Veganism "
        content="Supporting projects focused on plant-based solutions for a more sustainable and compassionate world.
        "
        imageUrl1="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg"
        imageUrl2="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg"
        linkUrl="/E-Banking"
      />
      <LeftHome
        title="Innovations in Renewable Energy   "
        content="Investing in initiatives harnessing renewable sources like solar, wind, and hydroelectric power for a cleaner, greener future.
        ."
        imageUrl1="https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg"
        imageUrl2="https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg"
        linkUrl="/Green_Investment"
      />
      <RightHome
        title="Agricultural Innovations for Sustainability "
        content="Backing innovative farming practices and technologies aimed at promoting sustainable agriculture and food security.
        "
        imageUrl1="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
        imageUrl2="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        linkUrl="/CreditHub"
      />
      <LeftHome
        title="Green Tech Innovations"
        content="Supporting cutting-edge technologies and startups driving advancements in sustainability and environmental conservation.
        "
        imageUrl1="https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageUrl2="https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        linkUrl="/Impact"
      />
      <RightHome
        title="Waste Reduction Initiatives"
        content="Funding projects aimed at reducing waste generation, promoting recycling, and implementing sustainable waste management solutions.
        "
        imageUrl1="https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageUrl2="https://images.pexels.com/photos/3634730/pexels-photo-3634730.jpeg"
        linkUrl="/CarbonCoin"
      />
        <LeftHome
        title="Clean Water Initiatives"
        content="Supporting efforts to provide access to clean and safe drinking water, as well as initiatives focused on water conservation and purification.
        "
        imageUrl1="https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageUrl2="https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        linkUrl="/Impact"
      />
      <RightHome
        title="Biodiversity Conservation Efforts"
        content="Investing in projects aimed at preserving and restoring biodiversity, protecting endangered species, and conserving natural habitats.
        "
        imageUrl1="https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageUrl2="https://images.pexels.com/photos/3634730/pexels-photo-3634730.jpeg"
        linkUrl="/CarbonCoin"
      />
        <LeftHome
        title="Ocean Conservation Initiatives"
        content="Supporting initiatives focused on protecting marine ecosystems, combating ocean pollution, and promoting sustainable fishing practices.
        "
        imageUrl1="https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageUrl2="https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        linkUrl="/Impact"
      />
      <RightHome
        title="Equality and Inclusion Initiatives"
        content="Backing projects that promote equality, diversity, and inclusion, fostering a more just and equitable society for all.
        "
        imageUrl1="https://images.pexels.com/photos/2646237/pexels-photo-2646237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageUrl2="https://images.pexels.com/photos/3634730/pexels-photo-3634730.jpeg"
        linkUrl="/CarbonCoin"
      />

<LeftHome
        title="Ocean Conservation Initiatives"
        content="Supporting initiatives that provide access to quality education for marginalized communities, empowering individuals to create positive change.
        "
        imageUrl1="https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageUrl2="https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        linkUrl="/Impact"
      />


    </div>

    </div>
  )
}

export default Projects
