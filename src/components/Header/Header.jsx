import React from "react";
import "./Header.css";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const Header = () => {
  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/",
      display: "Dishes",
    },
    {
      path: "/",
      display: "Services",
    },
    {
      path: "/",
      display: "About us",
    },
  ];
  const NavBarLinksBox = makeStyles(Box)((theme) => ({
    gridAlign: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.secondary,
    },
  }));
  return (
    <Box>
      <Box>
        <NavBarLinksBox disableEnforceFocus>
          {nav_titles.map((item, index) => (
            <Typography key={index}>{item.display}</Typography>
          ))}
        </NavBarLinksBox>
      </Box>
    </Box>
  );
};

export default Header;
