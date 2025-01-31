import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleBottomNavChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box>
      {/* Desktop Sidebar */}
      <Box className="hidden md:block">
        <IconButton
          onClick={handleToggleSidebar}
          className="text-black"
        >
          <MenuIcon className="text-7xl mt-7 ml-6" />
        </IconButton>

        <Drawer anchor="left" open={open} onClose={handleToggleSidebar}>
          <img
            className="h-14 w-14 mx-auto mt-5 bg-orange-100"
            src={logo}
            alt="Logo"
          />
          <List className="w-64 mt-4 ml-4">
            <ListItem onClick={() => navigate("/dashboard")} button>
              <ListItemText primary="Profile" />
            </ListItem>
            <Divider />
            <ListItem onClick={() => navigate("/matches")} button>
              <ListItemText primary="My Matches" />
            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </Box>

      {/* Mobile Bottom Navigation */}
      <Paper 
        elevation={3} 
        className="fixed bottom-0 left-0 right-0 md:hidden"
        sx={{ zIndex: 1000 }}
      >
        <BottomNavigation
          value={value}
          onChange={handleBottomNavChange}
          className="h-16"
        >
          <BottomNavigationAction
            label="Profile"
            value="/dashboard"
            icon={<PersonIcon />}
          />
          <BottomNavigationAction
            label="Matches"
            value="/matches"
            icon={<FavoriteIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Sidebar;