import { Button, Container, Stack, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Update = (props) => {
    console.log("props from update window", props)
    const [data, setData] = useState({
        title: "",
        description: "",
        price: "",
        imageLink: "",
      });
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData((prevData) => {
          return {
            ...prevData,
            [name]: value,
          };
        });
      };

      const submitHandler = async () => {
        try {
          const response = await axios.put(
            `http://localhost:4000/api/admin/courses/${props.course.courseId}`,
            data,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          console.log(response.data);
          toast.success("Course Updated Successfully");
          window.location.reload();
        } catch (error) {
          toast.error(error.response.data.message);
        }
      };
    
  return (
    <Container maxWidth="sm" className="mt-20 border-black border rounded p-4 z-40 absolute bg-white left-[50%] -translate-x-[50%]">
    <Stack spacing={2}>
      <TextField
        label="Title"
        variant="outlined"
        name="title"
        onChange={changeHandler}
      />
      <TextField
        label="Description"
        variant="outlined"
        name="description"
        onChange={changeHandler}
      />
      <TextField
        label="Price"
        variant="outlined"
        name="price"
        onChange={changeHandler}
      />
      <TextField
        label="Image Link"
        variant="outlined"
        name="imageLink"
        onChange={changeHandler}
      />
      <div className="flex flex-row gap-4">
        <Button variant="contained" className="w-fit" onClick={submitHandler}>
          Update Course
        </Button>
      </div>
    </Stack>
  </Container>
  )
}

export default Update