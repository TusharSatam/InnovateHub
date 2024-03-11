import "./App.css";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
function App() {
  const navInfo = useSelector((state) => state.ToggleNavbarSlice);
  return (
    <div
      className={`${
        navInfo?.toggleMoboNav
          ? "overflow-hidden h-screen  "
          : ""
      } flex p-1 md:p-3 lg:h-screen gap-1 lg:gap-2 lg:w-screen`}
    >
      <Sidebar />
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
    </div>
  );
}

export default App;
