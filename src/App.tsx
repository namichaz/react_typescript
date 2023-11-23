import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "features/Home/Home";
import { InputForm } from "features/InputForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inputform" element={<InputForm />} />
    </Routes>
  );
}

export default App;
