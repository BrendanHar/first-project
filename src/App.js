import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navbar />
      <Switch>
        <Route path='/' exact />
        
      </Switch>
    </div>
  );
}

export default App;
