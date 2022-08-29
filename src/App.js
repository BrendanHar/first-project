import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navbar />
      <Routes>
        <Route path='/' component={<Home />} />
        <Route path='' component={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
