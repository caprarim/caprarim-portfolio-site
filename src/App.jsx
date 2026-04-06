import Home from "./home.jsx";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import WebInfo from "./webInfo.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/webInfo/:id" element={<WebInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
