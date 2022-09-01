import Navbar from "../../components/Navbar";
import WeeklyLogNav from "./WeeklyLogNav";

function WeeklyLog(){
    return(
        <div className="App">
            <header className="App-header">
                <WeeklyLogNav />
                <h1>Weekly Logs Page</h1>
            </header>
        </div>
    )
}

export default WeeklyLog;