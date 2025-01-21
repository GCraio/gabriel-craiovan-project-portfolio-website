import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./assets/screens/HomeScreen";
import Header from "./assets/components/Header";
import WorkExperienceScreen from "./assets/screens/WorkExperienceScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<HomeScreen />} />
        <Route path="/work-experiences" element={<WorkExperienceScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
