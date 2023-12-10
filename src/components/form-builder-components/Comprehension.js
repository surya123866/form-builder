import React, { useState } from "react";
import { RiApps2Line } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import setComprehension from "../../actions/comprehensiveActions";

const Comprehension = () => {
  const [passage, setPassage] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(3);
  const [subQuestionNumber, setSubQuestionNumber] = useState(
    questionNumber + 0.1
  );

  const handleAddQuestion = () => {
    if (currentQuestion.trim() !== "" && options.length > 0) {
      const newQuestion = {
        questionNumber: questionNumber,
        question: currentQuestion,
        options: options,
        selectedOption: selectedOption,
        isOptionCorrect: options.includes(selectedOption),
      };

      setQuestions([...questions, newQuestion]);
      setCurrentQuestion("");
      setOptions([]);
      setSelectedOption(null);
      setSubQuestionNumber(subQuestionNumber + 0.1);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // const formatDataToJSON = () => {
  //   const jsonData = {
  //     passage: passage,
  //     questions: questions,
  //   };
  //   return JSON.stringify(jsonData, null, 2);
  // };

  return (
    <div className=" p-4 border mb-4">
      <div>
        <h1 className="text-2xl font-medium mb-4 items-center flex space-x-3 ">
          <RiApps2Line /> Question {questionNumber}
        </h1>
        <input
          className="w-full mb-2 border outline-none p-2"
          type="text"
          placeholder="Enter passage title"
        />
        <textarea
          value={passage}
          onChange={(e) => setPassage(e.target.value)}
          className="border p-2 w-full outline-none"
          placeholder="Enter the passage"
        />
      </div>

      <div className="mt-4 border p-2">
        <h1 className="text-1xl font-medium mb-4 items-center flex space-x-3 ">
          <RiApps2Line /> Question {subQuestionNumber}
        </h1>
        <div className="flex text-center">
          <input
            type="text"
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            className="border p-2 w-full outline-none"
          />
          <button
            onClick={handleAddQuestion}
            className=" ml-2 text-2xl px-4 py-2"
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
        <div className="mt-4 ">
          <p className="text-lg mb-2">Options:</p>
          <div className="flex flex-col">
            {options.map((option, index) => (
              <div key={index} className="mb-2">
                <input
                  type="radio"
                  id={`option_${index}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                <label htmlFor={`option_${index}`} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-2 flex text-center">
            <input
              type="text"
              value={options[options.length - 1] || ""}
              placeholder="Add an option"
              onChange={(e) =>
                setOptions((prevOptions) =>
                  prevOptions.map((opt, index) =>
                    index === options.length - 1 ? e.target.value : opt
                  )
                )
              }
              className="border p-2 outline-none"
            />
            <button
              onClick={() => setOptions([...options, ""])}
              className="ml-2 text-2xl px-4 py-2"
            >
              <IoMdAddCircleOutline />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4"></div>
    </div>
  );
};

export default Comprehension;
