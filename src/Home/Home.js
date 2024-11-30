import NavBar from "../NavBar/NavBar";
import Contact from "./Contact";
import Copyrigth from "./Copyrigth";
import DashBord from "./DashBord";
 
import Portfolio from "./Protoflio";
import Resume from "./Resume";

export default function Home() {
    return (
        <div>
             <div> 
              <NavBar/>
             </div>
             <div className="Home">
                <DashBord/>
             </div>
             <div className="Experties">
                <Portfolio/>
             </div>
             <div>
                <Resume/>
             </div>
             <div>
                <Contact/>
             </div>
             <div>
                <Copyrigth/>
             </div>
        </div>
    );
}