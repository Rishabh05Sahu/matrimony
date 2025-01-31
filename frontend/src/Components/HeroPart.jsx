import React from "react";
import Navbar from "../Components/Navbar";
import background from "../assets/background.jpeg";
import Button from "@mui/material/Button";
import Testmonial from "../Components/Testmonial";
import { useNavigate } from "react-router-dom";

const HeroPart = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex-col">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.7) blur(1px)",
          zIndex: -1,
          
        }}
      />

      <Navbar />
      <div className="text-white w-full  flex-col text-center mt-[10vh]  lg:mt-[20vh] mx-auto px-4 md:px-0 max-sm:mt-[30vh]">
        <h1 className="font-extrabold text-3xl font-charm sm:text-4xl md:text-5xl lg:text-6xl mb-4">
          looking for LOVE
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange mb-6 font-sans">
          Join a community of people looking for love, friendship, or something
          in between
        </p>
        <Button
          onClick={() => navigate("/signup")}
          sx={{
            backgroundColor: "#D12E25",
            borderRadius: "10%",
            height: { xs: "40px", sm: "45px", md: "50px" },
            width: { xs: "140px", sm: "160px", md: "180px" },
            fontWeight: "900",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            marginTop: "3vh",
            ":hover": {
              backgroundColor: "#780C28",
            },
          }}
          variant="contained"
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default HeroPart;