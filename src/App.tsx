import { useState } from "react";
import "./styles/global.css";
import ContextProvider from "./context/ContextApp";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <ContextProvider>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </ContextProvider>
  );
}

export default App;
