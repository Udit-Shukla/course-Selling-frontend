import React, { useState } from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin/signup",
        {
          username: userName,
          password: password,
        }
      );
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      toast.success("Signed Up Successfully");
      navigate("/login")
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <Container maxWidth="sm" className="mt-20 border-black border rounded p-4">
      <Stack spacing={2}>
        <TextField
          label="Username"
          variant="outlined"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button variant="contained" className=" w-fit" onClick={handleSubmit}>
          Sign Up
        </Button>
      </Stack>
    </Container>
  );
};

export default SignUp;
