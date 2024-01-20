import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Cards from './Cards';
import Update from './Update';

const Course = () => {

    let {courseId} = useParams();
    const [course, setCourse] = useState({})
  
    const getCourse = async () => {
        const response = await axios.get(
            `http://localhost:4000/api/admin/courses/${courseId}`,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        );
        setCourse(response.data.course);
    }
    
    useEffect(() => {
        getCourse();
    }, [])

    return (
        <div className='flex flex-row gap-4'>
            <Cards course={course} button={true} />
            <Update course={course}/>
        </div>
    )
}
export default Course