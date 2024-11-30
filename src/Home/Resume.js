import { useState } from "react";

export default function Resume() {
  
    const [show, setShow] = useState("Education");

    const Education = {
        Education: "I am studying Computer Information Systems at the University of Jordan."
    };

    const Experience = {
        Experience: "I have 1+ year of experience in Front-end development.",
        LastExperience: "I have experience in HTML, CSS, API(json server) , OOP,Java, c++ ,Bootstrap,JavaScript, React"
    };

    const renderContent = () => {
        if (show === "Education") {
          return <div className="Education1">{Education.Education}</div>;
        } else if (show === "Experience") {
          return <div className="Experience1">{Experience.Experience}
          <span>{Experience.LastExperience}</span>
          </div>;
        }
    };

    return (
        <div className="Resume">
           <div className="textResume">
            <span>1+ Years of Experience</span>
            <h1>Resume</h1>
           </div>
           <div className="ResumeButton">
            <button onClick={() => setShow("Education")}>Education</button>
            <button onClick={() => setShow("Experience")}>Experience</button>
           </div>
           <div className="Content">
            {renderContent()}
           </div>
        </div>
    );
}
