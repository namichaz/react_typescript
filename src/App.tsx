import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "features/home/Home";
import { InputForm } from "features/inputform/InputForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inputform" element={<InputForm />} />
    </Routes>
  );
}

export default App;
