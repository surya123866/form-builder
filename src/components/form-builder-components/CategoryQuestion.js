import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CategoryBuilder from "./CategoryBuilder";
import { RiApps2Line } from "react-icons/ri";
import setCategories from "../../actions/catagoriesActions";

const AnswersSection = ({ categories, handleAnswerChange }) => (
  <div>
    <h1 className="font-normal">Items</h1>
    {categories.map((category, index) => (
      <div key={index} className="mt-4">
        {categories.length > 1 &&
          category.answers.map((answer, answerIndex) => (
            <div key={answerIndex} className="flex items-center mt-2 space-x-4">
              <RiApps2Line />
              <input
                type="text"
                value={answer.answer}
                onChange={(e) =>
                  handleAnswerChange(index, answerIndex, e.target.value)
                }
                className="border rounded p-2 outline-none"
                placeholder="answer"
              />
            </div>
          ))}
      </div>
    ))}
  </div>
);

const BelongsToSection = ({ categories, handleAnswerCategoryChange }) => {
  const nonEmptyCategories = categories.filter(
    (category) => category.name.trim() !== ""
  );

  return (
    <div>
      <h1 className="font-normal">Belongs to</h1>
      {nonEmptyCategories.map((category, index) => (
        <div
          key={index}
          className="flex items-center text-center space-x-4 mt-4"
        >
          <select
            className="w-20 space-x-8 outline-none border p-1 h-10"
            value={category.name}
            onChange={(e) => handleAnswerCategoryChange(index, e.target.value)}
          >
            {nonEmptyCategories.map((optionCategory, optionIndex) => (
              <option key={optionIndex} value={optionCategory.name}>
                {optionCategory.name}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

const FormBuilder = () => {
  const [categories, setCategories] = useState([
    { name: "", answers: [{ answer: "", categorie: "" }] },
  ]);

  const handleAnswerCategoryChange = (index, categorie) => {
    const updatedCategories = [...categories];
    updatedCategories[index].answers[0].categorie = categorie;
    setCategories(updatedCategories);
  };

  const handleCategoryChange = (index, name) => {
    const updatedCategories = [...categories];
    updatedCategories[index].name = name;
    setCategories(updatedCategories);
  };

  const handleAnswerChange = (categoryIndex, answerIndex, answer) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].answers[answerIndex].answer = answer;
    setCategories(updatedCategories);
  };

  const removeCategory = (index) => {
    if (categories.length > 1) {
      const updatedCategories = [...categories];
      updatedCategories[
        index === categories.length - 1 ? index - 1 : index
      ].name = "";
      updatedCategories.splice(index, 1);
      setCategories(updatedCategories);
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedCategories = Array.from(categories);
    const [reorderedItem] = updatedCategories.splice(result.source.index, 1);
    updatedCategories.splice(result.destination.index, 0, reorderedItem);

    setCategories(updatedCategories);
  };

  const addCategory = () => {
    setCategories([
      ...categories,
      { name: "", answers: [{ answer: "", categorie: "" }] },
    ]);
  };

  return (
    <div className="container border p-4 mb-4">
      <h1 className="text-2xl font-medium mb-4 items-center flex space-x-3 ">
        <RiApps2Line /> Question 1
      </h1>
      <input
        placeholder="Description (optional)"
        className="outline-none border text-start mb-8 w-80 pl-2"
      />

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="categories" key="categories">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h1 className="font-medium">Categories</h1>
              {categories.map((category, index) => (
                <Draggable
                  key={index}
                  draggableId={`category-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CategoryBuilder
                        index={index}
                        category={category}
                        onCategoryChange={handleCategoryChange}
                        onRemoveCategory={removeCategory}
                        onAddCategory={addCategory}
                        onAnswerChange={handleAnswerChange}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="flex space-x-10 w-46 mt-5 mb-5">
        <AnswersSection
          categories={categories}
          handleAnswerChange={handleAnswerChange}
        />
        <BelongsToSection
          categories={categories}
          handleAnswerCategoryChange={handleAnswerCategoryChange}
        />
      </div>
    </div>
  );
};

export default FormBuilder;
