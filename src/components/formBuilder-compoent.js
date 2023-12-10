import React, { useState } from "react";
import CategoryBuilder from "./form-builder-components/CategoryQuestion";
import ClozeActivity from "./form-builder-components/ClozeQuestion";
import Comprehension from "./form-builder-components/Comprehension";
import { Link } from "react-router-dom";

const FormBuilder = () => {
  const [documentTitle, setDocumentTitle] = useState("untitled document");

  const handleTitleChange = (e) => {
    setDocumentTitle(e.target.innerText);
  };

  return (
    <div className="p-4">
      <h1
        className="ml-7 text-3xl text-left text-blue-400 outline-none"
        contentEditable
        onBlur={handleTitleChange}
      >
        {documentTitle}
      </h1>
      <CategoryBuilder />
      <ClozeActivity />
      <Comprehension />{" "}
      <Link to="/form-builder" className="no-underline">
        <button className="m-7 bg-blue-500 p-2 outline-none border-none text-white font-bold rounded-md">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default FormBuilder;
