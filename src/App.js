import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Menu from "./Components/NavBar/Menu/Menu";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";
import 'animate.css';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])

  return (
    <div className="App">
      <Menu />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="content" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
