import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import image from "../assets/image.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 items-center justify-center flex flex-col h-full md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">
            Hello, I am a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sit
            odio non tenetur fugit dolores aliquid, laboriosam eos expedita aut
            placeat inventore dolorum libero dignissimos eveniet soluta ipsa
            quod blanditiis?
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-3 text text-white flex items-center rounded-md bg-gradient-to-r from-indigo-500 to via-violet-500"
            >
              PortFolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={28} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt="My Image"
            className="rounded-2xl mx-auto w-2/3  md: w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
