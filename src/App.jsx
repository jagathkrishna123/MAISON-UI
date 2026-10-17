// // import Home from "./compoentsss/Home"
// // import Navbar from "./compoentsss/Navbar"

// // import UseRef from "./REACT-CONCEPTS/UseRef/UseRef"

// // import Parent from "./REACT-CONCEPTS/React.memo/Parent"

// // import UseCallback from "./REACT-CONCEPTS/UseCallback"

// const App = () => {
//   return(
//     <div>
//         {/* <Navbar/>
//         <Home/> */}
//         {/* <UseCallback/> */}
//         {/* <Parent/> */}
//         <UseRef/>
//     </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Collections from "./components/Collections";
import OurStory from "./components/OurStory";
import SmoothScroll from "./util/SmoothScroll";

const App = () => {
  return (
    <BrowserRouter>
    <SmoothScroll/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
