import React, { useState } from "react";

const ComprehensionForm = () => {
  const initialData = [
    {
      ComprehensionNumber: "Question 3",
      title: "Water Cycle",
      passage:
        "Whether you're preparing for your first job interview or aiming to upskill in this ever-evolving tech landscape, GeeksforGeeks Courses are your key to success. We provide top-quality content at affordable prices, all geared towards accelerating your growth in a time-bound manner. Join the millions we've already empowered, and we're here to do the same for you. Don't miss out - check it out now!",
      questions: [
        {
          questionNumber: "Question 3.1",
          question: "all geared towards accelerating",
          Options: {
            option1: "Option 1",
            option2: "Option 2",
            option3: "Option 3",
            option4: "Option 4",
          },
        },
        {
          questionNumber: "Question 3.2",
          question: "all geared towards accelerating",
          Options: {
            option1: "Option 1",
            option2: "Option 2",
            option3: "Option 3",
            option4: "Option 4",
          },
        },
      ],
    },
  ];

  const [formData, setFormData] = useState(initialData);
  console.log(formData);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      newFormData[0].questions[questionIndex].selectedOption = `Option ${
        optionIndex + 1
      }`;
      return newFormData;
    });
  };

  return (
    <div className="bg-slate-50 shadow-md p-2 flex-auto flex-col h-auto w-full flex  justify-center mb-4 gap-4">
      {formData.map((eachQuestion, questionIndex) => (
        <div
          key={eachQuestion.ComprehensionNumber}
          className="border m-2 p-2 gap-4 questionContainer"
        >
          <h1 className="questionNumber ">
            {eachQuestion.ComprehensionNumber}
          </h1>
          <hr className="text-3xl text-green-50 w-full" />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">{eachQuestion.title}</h1>
            <p className="passage">{eachQuestion.passage}</p>
          </div>
          {eachQuestion.questions.map((eachQuestion, innerIndex) => (
            <div
              key={eachQuestion.questionNumber}
              className="border m-2 p-2 gap-4 questionContainer"
            >
              <p>{eachQuestion.questionNumber}</p>
              <p>{eachQuestion.question}</p>
              {Object.values(eachQuestion.Options).map(
                (eachOption, optionIndex) => (
                  <div key={optionIndex} className="flex gap-2">
                    <input
                      type="radio"
                      checked={
                        eachQuestion.selectedOption ===
                        `Option ${optionIndex + 1}`
                      }
                      onChange={() =>
                        handleOptionChange(innerIndex, optionIndex)
                      }
                    />
                    <p>{eachOption}</p>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ComprehensionForm;
