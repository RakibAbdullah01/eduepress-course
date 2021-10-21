import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="row row-cols-md-2 row-cols-lg-2  p-4 g-1 justify-content-around">
            {
                courses.map(crs=><Course crs={crs}></Course>)
            }
        </div>
    );
};

export default Courses;