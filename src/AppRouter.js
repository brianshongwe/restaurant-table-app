import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Order from "./components/Order";

function AppRouter() {
  return;
  <BrowserRouter>
    <Routes>
      <Route path="/" element={App} />
      <Route path="/add-order" element={Order} />
    </Routes>
  </BrowserRouter>;
}

export default AppRouter;
