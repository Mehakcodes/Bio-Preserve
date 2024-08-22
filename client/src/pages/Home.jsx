import React from "react";
import Testimonial from "../components/Testimonial";
import About from "../components/About";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen overflow-x-hidden ">
      <div className="w-screen h-[500px] bg-red-400 relative z-0">
        <div className="relative">
          <div className="video-container">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              style={{
                filter: "blur(0px) brightness(0.7) contrast(1.2)",
              }}
            >
              <source
                src="https://cri.nccf.in/wp-content/uploads/2021/08/forest_Road_slow_st.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="absolute z-10 font-bold text-7xl text-white opacity-65 top-[12rem] w-full ">
          {/* <div className="text-center">Connecting Communities</div> */}

          {/* <div className="h-8 ">

  </div> */}

          <div className="text-center">Preserving Nature & Mother Earth</div>

          <div className=" flex justify-center w-[100dvw] mt-12 ">
            {/* <div className="font-bold  px-6 py-4  text-white  text-2xl rounded-lg bg-green-700  cursor-pointer absolute z-20  hover:bg-green-500">
              Donate Now
            </div> */}
        <Link to="/projects">
        <div className="font-bold px-6 py-4 text-white text-2xl rounded-lg bg-green-700 cursor-pointer z-20 hover:bg-green-500">
          Donate Now
        </div>
        </Link>

          </div>
        </div>
      </div>

      <div className="mt-[5rem] text-[#BAB3A9] bg-black">
        <div className=" pt-36 flex px-36 gap-20 pb-24">
          <div className="flex flex-col gap-6 pt-12">
            <div className="text-2xl font-semibold pb-8 ">
              Join our mission to support biodiversity and cultural heritage
              preservation, making a tangible impact. Your investment counts.
            </div>
            <div className="text-justify text-lg pb-8">
              Invest in a sustainable future where your contributions directly
              affect biodiversity conservation and cultural heritage protection.{" "}
            </div>

            <div className="flex gap-24 mt-6">
              <div className="flex flex-col gap-3 text-xl">
                <div>300+ </div>
                <div>Projects Funded</div>
              </div>
              <div className="flex flex-col gap-3 text-xl">
                <div>4.8/5 </div>
                <div>Ratings</div>
              </div>
            </div>
          </div>
          <div
            className=" bg-red-700h-96 w-full bg-cover bg-center "
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg)",
            }}
          />
        </div>
      </div>

      {/* <Testimonial /> */}

      <About />

      <div className="flex px-48 justify-between bg-[#f2eae0d6] pt-12 pb-12">
        <div className="text-7xl "> Key Features</div>
        <div className="flex flex-col gap-6 w-[40rem]">
          <div className="flex flex-col gap-4">
            <div className="text-bold text-4xl font-bold ">
              Invest. Impact. Innovate.{" "}
            </div>
            <div>Eco Impact </div>
            <div className="text-xl">
              Accelerate positive biodiversity and heritage impact by investing
              in projects with the highest conservation outcomes.{" "}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-bold text-4xl font-bold ">
              Project Rankings{" "}
            </div>
            <div>Transparency First </div>
            <div className="text-xl">
            Every project is ranked based on actual conservation impact, ensuring transparency and allowing investors to make informed decisions.
{" "}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-bold text-4xl font-bold ">
              Rewarding Investments{" "}
            </div>
            <div>Eco Rewards </div>
            <div className="text-xl">
            Investing with EcoPreserve not only supports biodiversity and heritage projects but rewards you with tokens redeemable for benefits, making every investment beneficial.{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2eae0d6] pt-12 ">
        <div
          className="h-24 w-full bg-cover bg-center relative top-[3rem]"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dbyioi2qq/q_auto/v1699942414/static/shapes-1png_1699942188_51595.png)",
          }}
        />
      </div>

      <div className="bg-black text-[#BAB3A9] px-24 ">
        <div className="text-center pt-12 pb-12 text-7xl ">Our Services</div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="font-bold text-2xl"> Crowdfunding </div>
            <div className="text-xl">
              Leverage our platform to raise funds for your eco project. We
              offer visibility, support, and a network of eco-conscious
              investors.{" "}
            </div>
            <div>
              <br />

              <hr />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="font-bold text-2xl"> Eco Rewards </div>
            <div className="text-xl">
              Earn EcoPreserve coins for your investments. Use them for
              discounts on eco-friendly products and services, enhancing your
              green lifestyle.{" "}
            </div>
            <div>
              <br />

              <hr />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="font-bold text-2xl"> Investor Support </div>
            <div className="text-xl">
              Our dedicated team provides comprehensive support to investors,
              from selecting the right projects to understanding your impact and
              rewards.{" "}
            </div>
            <div>
              <br />

              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 relative bg-black">
        <div
          className="h-24 w-full bg-cover bg-center absolute top-[3rem]"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dbyioi2qq/q_auto/v1699942414/static/shapes-1png_1699942188_51595.png)",
            // filter: "blur(0px) brightness(0.9) contrast(1)",
          }}
        />
      </div>

      <div className=""></div>
    </div>
  );
};

export default Home;
