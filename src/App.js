import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import People from './People'
import Planets from './Planets'
import Films from './Films'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Titulo">
          <h1>All the Star Wars you'll ever need</h1>
        </div>
        <div className="Nav">
          <p>Filter by:</p>
          <ul>
            <li>
              <NavLink to="/characters">Characters</NavLink>
            </li>
            <li>
              <NavLink to="/Planets">Planets</NavLink>
            </li>
            <li>
              <NavLink to="/Films">Films</NavLink>
            </li>
          </ul>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/characters" component={People} />
        <Route path="/planets" component={Planets} />
        <Route path="/films" component={Films} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Default">
      <h1>Click one of the options above to filter</h1>
    </div>
  );
}

export default App;
