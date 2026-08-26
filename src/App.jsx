import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App