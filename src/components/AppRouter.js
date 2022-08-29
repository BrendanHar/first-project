import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import WeeklyLog from '../pages/WeeklyLog';

function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                {/* <Route path='/weeklylogs' element{<WeeklyLog/>} /> */}
            </Routes>
        </Router>
    );
}

export default AppRouter;