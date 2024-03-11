import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import NotAvailable from "./Pages/NotAvailable/NotAvailable";

function App() {
  const navInfo = useSelector((state) => state.ToggleNavbarSlice);

  return (
    <div
      className={`${
        navInfo?.toggleMoboNav ? "overflow-hidden h-screen  " : ""
      } flex p-1 md:p-3 lg:h-screen gap-1 lg:gap-2 lg:w-screen`}
    >
      <Sidebar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/not-available/:page" element={<NotAvailable />} />
        <Route path="/not-available/*" element={<NotAvailable />} />

        {/* Wildcard route for any other route */}
        <Route path="*" element={<Navigate to="/not-available/" />} />
      </Routes>
    </div>
  );
}

export default App;
