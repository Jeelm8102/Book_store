// import logo from './logo.svg';
import './App.css';
import { Routes, Route,Link, BrowserRouter } from "react-router-dom";

import { HomePage } from "./HomePage";
import { Apple } from './Apple';
import { NotFound } from './NotFound';

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/" style={{marginLeft:5,}}>Home</Link>
      <Link to="/apple" style={{marginLeft:10,}}>Apple</Link>
      <Link to="/applet" style={{marginLeft:15,}}>Applet</Link>
    </div>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/apple" element={<Apple />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
// Link tag is used instead of anchor tag a to link and route the pages

// function App() {
  
// cannot return two values at same time so wrapping it using div tag and changing it to constant

  // return <HomePage />;
  // return <Apple />;

// }

export default App;
