import React from 'react'
import { useNavigate } from 'react-router-dom'



const Cards = (props) => {
    const navigate = useNavigate();
        return (
            <div className='flex flex-col border border-black rounded-lg justify-around  p-2 w-[300px] hover:shadow-xl hover:scale-105 transition-all duration-100 ease-in mb-2 cursor-pointer '>
            <img src={props.course.imageLink} alt="course" className="w-full h-[200px] object-cover"/>

            <div className="flex flex-col p-4">
                <h1 className="text-2xl font-semibold mb-4">{props.course.title}</h1>
                <p className="text-sm  text-slate-600 font-medium">{props.course.description}</p>

                <p>{props.course.courseId}</p>

                <div className="flex flex-row justify-between mt-4">
                    <h1 className="text-lg font-semibold">Rs. {props.course.price}</h1>

                    {
                        !props.button ? <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={()=>{navigate(`/courses/${props.course.courseId}`)}}>View</button> : null
                    }

                </div>
            </div>
        </div>



    )
}

export default Cards