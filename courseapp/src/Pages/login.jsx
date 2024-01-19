import { Button, Container, Stack, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async() => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin/login",{},
        {
          headers:{
            username: userName,
            password: password,
          }
        }
      );
      localStorage.setItem("username", userName);
      localStorage.setItem("token", response.data.token);
      toast.success("Logged In Successfully");
      // console.log("token from login ",response.data.token);
      navigate("/courses")

    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <Container maxWidth="sm" className='mt-20 border-black border rounded p-4'>
        <Stack spacing={2}>
          <TextField  label="Username" variant="outlined" onChange={(e)=>{setUserName(e.target.value)}}/>
          <TextField  label="Password" variant="outlined" onChange={(e)=>{setPassword(e.target.value)}}/>
          <Button variant="contained" className=' w-fit' onClick={submitHandler}>Login</Button>
        </Stack>
      </Container>
  )
}

export default Login