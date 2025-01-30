import React from "react";

const Testimonial = (props) => {
  return (
    <div className="bg-[#FFDDF6]  text-black w-full max-sm:w-[80%] max-sm:h-[50%]  min-h-[100vh] h-[55vh]  rounded-2xl flex flex-col items-center  sm:py-6 px-4 sm:px-10 gap-y-8">
      <img className="h-[60%] rounded-2xl w-[100%]" src={props.image} alt="" />
      <h1 className="text-2xl sm:text-3xl  text-pink-500 md:text-4xl font-bold ">
        {props.title}
      </h1>
      {/* <hr className='w-full' /> */}
      <p className="text-base sm:text-lg md:text-xl text-pink-900 ">
        {props.description}
      </p>
    </div>
  );
};

export default Testimonial;
