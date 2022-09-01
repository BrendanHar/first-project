import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import WeekLog01 from './WeekLogs/Weeklog01';


function WeeklyLogRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/weeklylog01" element={<WeekLog01 />}/>
            </Routes>
        </Router>
        );
}

export default WeeklyLogRouter;