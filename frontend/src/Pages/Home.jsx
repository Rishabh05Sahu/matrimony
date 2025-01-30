import React from "react";
import HeroPart from "../Components/HeroPart";
import Testimonial from "../Components/Testmonial.jsx";
import successStories from "../DummyData/testimonial.js";
import Footer from "../Components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <HeroPart />

      <div className="flex flex-col md:flex-row gap-6 p-4 sm:p-6 lg:p-10 bg-[#D63B32] items-center">
        {successStories.map((story) => (
          <Testimonial
            key={story.id}
            title={story.title}
            description={story.description}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;