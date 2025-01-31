import React from "react";
import Sidebar from "../Components/Sidebar.jsx";
import ProfilePage from "../Components/ProfilePage.jsx";
import Avatar from "../Components/Avatar.jsx";

const Dashboard = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <div className="flex items-center justify-between px-4 md:px-10">
        <Sidebar />
        <Avatar />
      </div>

      <div className="px-4 md:px-10">
        <ProfilePage />
      </div>
    </div>
  );
};

export default Dashboard;
