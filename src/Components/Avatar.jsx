import React, { useState, useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const ProfileAvatar = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const avatarRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionClick = (option) => {
    console.log(option);
    setDropdownVisible(false);
    
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        avatarRef.current && !avatarRef.current.contains(event.target) &&
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Profile Picture */}
      <div className="flex items-center justify-center" ref={avatarRef}>
        <Avatar
          alt="User Avatar"
          src="/static/images/avatar/2.jpg"
          className="w-20 h-20 cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
          ref={dropdownRef}
        >
          <ul className="list-none p-2 ">
            <li
              className="cursor-pointer hover:bg-gray-100 py-2 px-4 text-sm"
              onClick={() => handleOptionClick('Help')}
            >
              Help
            </li>
            <li
              className="cursor-pointer hover:bg-gray-100 py-2 px-4 text-sm"
              onClick={() => handleOptionClick('Settings')}
            >
              Settings
            </li>
            <li
              className="cursor-pointer hover:bg-gray-100 py-2 px-4 text-sm "
              onClick={() => navigate("/")}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
