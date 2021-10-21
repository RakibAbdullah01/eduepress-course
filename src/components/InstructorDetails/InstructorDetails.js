import React from 'react';
import { useHistory, useParams } from 'react-router';

const InstructorDetails = () => {
    const {id} = useParams();
    let history = useHistory();

  function handleClick() {
    history.push("/home");
  }
    return (
        <div>
            <h2>Hello This is Single Instructor Deatils:{id}</h2>
            <button onClick={handleClick}>Back to Home</button>
        </div>
    );
};

export default InstructorDetails;