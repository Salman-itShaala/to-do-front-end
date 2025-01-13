import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CreateTask from "./Components/CreateTask/CreateTask";
import Login from "./Pages/login/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/createTask" element={<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
