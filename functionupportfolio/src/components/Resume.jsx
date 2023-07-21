import React from "react";
import ResumeCard from "./ResumeCard";
import ResumeData from "./ResumeData";

const Resume = () => {
  return (
    <div>
      {ResumeData.map((val) => {
        return <ResumeCard key={val} resume={val.resume} />;
      })}
    </div>
  );
};

export default Resume;
