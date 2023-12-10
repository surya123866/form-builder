import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormBuilder from "./components/formBuilder-compoent";
import FormRenderer from "./components/formRenderer-component";
import SuccessPage from "./components/success-page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormBuilder />} />
        <Route path="/form-builder" element={<FormRenderer />} />
        <Route path="/sucess" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
