import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
 
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
 
 
  useEffect(() => {
    console.log("token received after login", token);
  }, [token]);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
 
 
  const username = localStorage.getItem("username");
 
 
  return (
    <div className="flex flex-row justify-between w-10/12 mx-auto mt-4">
     
      {/* LOGO */}
     
      <div className="flex flex-row">
        <Link to="/">
          <Typography variant="h6" className="flex-grow">
            Courses Website
          </Typography>
        </Link>
      </div>
      {/* NAVBAR */}

      {token ? (
        <div className="flex flex-row gap-2 items-center">
          <Typography variant="p">{username}</Typography>
          <Button variant="outlined" color="primary" onClick={logoutHandler}>
            Logout
          </Button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Navbar;
