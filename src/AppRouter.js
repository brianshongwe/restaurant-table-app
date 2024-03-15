import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Order from "./components/Order";

function AppRouter() {
  return;
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={App} />
        <Route path="/add-order" element={Order} />
      </Routes>
    </App>
  </BrowserRouter>;
}

export default AppRouter;
