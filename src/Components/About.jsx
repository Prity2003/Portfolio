import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-800">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
          delectus impedit harum expedita obcaecati alias quia sint. Veritatis,
          incidunt? Praesentium nobis sit ab error quod,ipsa sequi, voluptatum
          totam velit, consectetur deleniti temporibus quia blanditiis quaerat
          tempore veniam exercitationem? Accusamus distinctio commodi asperiores
          quas laboriosam voluptates.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
          delectus impedit harum expedita obcaecati alias quia sint. Veritatis,
          incidunt? Praesentium nobis sit ab error quod,ipsa sequi, voluptatum
          totam velit, consectetur deleniti temporibus quia blanditiis quaerat
          tempore veniam exercitationem? Accusamus distinctio commodi asperiores
          quas laboriosam voluptates.
        </p>
      </div>
    </div>
  );
};

export default About;
