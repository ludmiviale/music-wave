import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
