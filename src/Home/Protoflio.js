import Project2 from "../IMG/Screenshot 2024-11-13 142149.png";
import Project3 from "../IMG/Screenshot 2024-11-10 175654.png";
import Project1 from "../IMG/Screenshot 2024-10-31 210056.png";
export default function Portfolio() {
    return (
        <div className="Portfolio">
            <div className="textPort">
            <span>Welcome to my Portfolio</span>
            <h1>Portfolio</h1>
          </div>
          <div className="ProjectsPortfolio">
            <div className="Project1" onClick={() => window.open("https://github.com/Hamzeh-Alzoubi-02/E-commerce-Adv", "_blank")}>
                <img src={Project1} alt=""/>
                <p>Development</p>
                <span>E-Commerce</span>
            </div>
            <div className="Project1" onClick={() => window.open("https://github.com/Hamzeh-Alzoubi-02/Quiz_Project", "_blank")}>
                <img src={Project2} alt=""/>
                 <p>Development</p>
                 <span>Quiz</span>
            </div>
            <div className="Project1" onClick={() => window.open("https://github.com/Hamzeh-Alzoubi-02/Elearning", "_blank")}>
                <img src={Project3}  alt=""/>
                <p>Development</p>
                <span>Elearning</span>
            </div>
          </div>
        </div>
    );
}