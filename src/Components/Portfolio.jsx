import React, { useState } from "react";
import project from "../assets/project.jpeg";

const Portfolio = () => {
  const [data, setData] = useState(0);

  const handleClick = async () => {
    try {
      const data = await (
        await fetch("httpps://jsonplaceholder.typicode.com/albums/${id}")
      ).json();
      setData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const portfolios = [
    {
      id: 1,
      src: project,
    },
    {
      id: 2,
      src: project,
    },
    {
      id: 3,
      src: project,
    },
    {
      id: 4,
      src: project,
    },
    {
      id: 5,
      src: project,
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full h-full bg-gradient-to-b from-black to to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-900">
            Portfolio
          </p>
          <p className="py-6">Check out some work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="project"
                className="rounded-md duration-200 hover: scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover: scale-105"
                  onClick={handleClick}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover: scale-105"
                  onClick={handleClick}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
