import React, { useState } from "react";
import CategoriesForm from "./form-rederer-components/CategoryQuestion-rendering";
import ClozeForm from "./form-rederer-components/clozQuestion-renderer";
import ComprehensionForm from "./form-rederer-components/comprehensionQuestion-render";
import { Link } from "react-router-dom";

const FormBuilder = () => {
  const [documentTitle, setDocumentTitle] = useState("untitled document");

  const handleTitleChange = (e) => {
    setDocumentTitle(e.target.innerText);
  };

  return (
    <div className="p-4">
      <h1
        className="text-3xl text-left text-blue-400 outline-none"
        contentEditable
        onBlur={handleTitleChange}
      >
        {documentTitle}
      </h1>
      <CategoriesForm />
      <ClozeForm />
      <ComprehensionForm />{" "}
      <Link to="/sucess" className="no-underline">
        <button className="m-7 bg-blue-500 p-2 outline-none border-none text-white font-bold rounded-md">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default FormBuilder;
