import React from 'react';
import { NavLink } from "react-router-dom";

const ResumeCard = (props) => {
  return (
    <div>
        <NavLink to={props.resume} className="btn">Resume</NavLink>
    </div>
  )
}

export default ResumeCard;