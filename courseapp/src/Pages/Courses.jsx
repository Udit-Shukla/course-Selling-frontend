// Import statements
import React, { useEffect, useState } from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import Cards from "./Cards";

const Courses = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    imageLink: "",
  });

  const [courses, setCourses] = useState([]);
  const [visible, setVisible] = useState(false);

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
      const response = await axios.post(
        "http://localhost:4000/api/admin/courses",
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      toast.success("Course Added Successfully");
      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getCourses = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/admin/courses", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      setCourses(response.data.courses);
      
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const visibilityHandler = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={visibilityHandler}>
        Add Courses
      </Button>
      {visible && (
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
                Add Course
              </Button>
              <Button variant="contained" color="error" className="w-fit" onClick={visibilityHandler}>
                Cancel
              </Button>
            </div>
          </Stack>
        </Container>
      )}
     <div className="w-10/12 flex flex-row flex-wrap gap-4 mt-6 mx-auto "> {courses.map((course, index) => (
        <Cards key={index} course={course} />
      ))}</div>
    </div>
  );
};

export default Courses;
