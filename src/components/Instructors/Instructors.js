import React, { useEffect, useState } from 'react';
import Instructor from '../Instructor/Instructor';
import "./Instructors.css"

const Instructors = () => {
    const[instructors,setInstructors] = useState([])
    useEffect(()=>{
        fetch('./instructors.json')
        .then(res=>res.json())
        .then(data=>setInstructors(data));
    },[]);
    return (
        <div>
            <h2 className="instructors">Instructors List</h2>
            <div className="row row-cols-md-3 row-cols-lg-4 g-1 d-flex justify-content-around">
                {
                    instructors.map(ins=><Instructor ins={ins} key = {ins.id}></Instructor>)
                }
            </div>
        </div>
        
    );
};

export default Instructors;