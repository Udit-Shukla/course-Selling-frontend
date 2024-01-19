import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between w-10/12 mx-auto mt-4">
      {/* LOGO */}
      <div className="flex flex-row">
        <Link to="/">
          {" "}
          <Typography variant="h6" className="flex-grow">
            Courses Website
          </Typography>
        </Link>
      </div>
      {/* NAVBAR */}

      {/* Buttons */}
      <div className="flex flex-row gap-2">
        <Link to="/signUp">
          <Button variant="outlined" color="primary">
            Sign up
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="outlined" color="primary">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
