import React from "react";
import Sidebar from "../Components/Sidebar.jsx";
import Matches from "../Components/Matches.jsx";
import Avatar from "../Components/Avatar.jsx";

const MatchesPage = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <div className="flex items-center justify-between px-4 md:px-10">
        <Sidebar />
        <Avatar />
      </div>

      <div className="px-4 md:px-10">
        <Matches />
      </div>
    </div>
  );
};

export default MatchesPage;
