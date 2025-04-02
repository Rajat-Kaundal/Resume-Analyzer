import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Upload from "./components/Upload";

function App() {
  /*const [count, setCount] = useState(0) */

  return (
    <Router>
      <header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upload" element={<Upload />}></Route>
      </Routes>
    </Router>
  );
};
    
export default App;
