import React from 'react';
import './App.css';
import { Link , Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header1">
       <Link to={"home"}>Home || </Link>
       <Link to={"about"}>About</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
