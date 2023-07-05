import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Scheduler from './Scheduler';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Scheduler/>
    </div>
  );
}

export default App;