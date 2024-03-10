import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="flex p-1 md:p-3 lg:h-screen gap-1 lg:gap-2 lg:w-screen">
      <Sidebar />
      <div className="flex-1"></div>
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
