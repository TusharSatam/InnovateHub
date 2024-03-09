import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
