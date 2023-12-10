import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ClozeForm = () => {
  const [clozeItems, setClozeItems] = useState([
    {
      clozeQuestionNumber: 1,
      clozeQuestion:
        "Whether you're preparing for your first job interview or aiming",
      clozeQuestionUnderlined: "Whether you're _ for your _ job _ or aiming",
      clozeOptions: ["preparing", "first", "interview"],
    },
    {
      clozeQuestionNumber: 2,
      clozeQuestion:
        "tech landscape, GeeksforGeeks Courses are your key to success. We provide top-quality content",
      clozeQuestionUnderlined:
        "tech landscape, _ Courses are your key to _. We provide top-quality content",
      clozeOptions: ["GeeksforGeeks", "success"],
    },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return; // Dropped outside a droppable area
    }

    const newClozeItems = Array.from(clozeItems);
    const [movedItem] = newClozeItems.splice(result.source.index, 1);
    newClozeItems.splice(result.destination.index, 0, movedItem);

    setClozeItems(newClozeItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-slate-50 shadow-md p-2 flex-auto flex-col h-30 w-full flex justify-center mb-4 gap-4">
        {clozeItems.map((eachClozeItem, index) => (
          <div
            key={eachClozeItem.clozeQuestionNumber}
            className="w-80 items-center justify-center gap-8 w-full"
          >
            <h1 className="text-left w-full text-2xl">
              Question {eachClozeItem.clozeQuestionNumber}
            </h1>
            <div className="flex items-center w-full">
              <Droppable
                droppableId={`optionsDroppable-${eachClozeItem.clozeQuestionNumber}`}
                direction="horizontal"
              >
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`flex gap-2 ${
                      snapshot.isDraggingOver ? "bg-gray-200" : ""
                    }`}
                  >
                    {eachClozeItem.clozeOptions.map((option, index) => (
                      <Draggable
                        key={option}
                        draggableId={option}
                        index={index}
                      >
                        {(provided) => (
                          <p
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-1 text-white font-bold bg-blue-400 m-2 rounded-md"
                          >
                            {option}
                          </p>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
            {eachClozeItem.clozeQuestionUnderlined.includes("_") ? (
              <Droppable
                droppableId={`textDroppable-${eachClozeItem.clozeQuestionNumber}`}
                direction="horizontal"
              >
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`w-full ${
                      snapshot.isDraggingOver ? "bg-gray-200" : ""
                    }`}
                  >
                    <Draggable
                      key={`text-${eachClozeItem.clozeQuestionNumber}`}
                      draggableId={`text-${eachClozeItem.clozeQuestionNumber}`}
                      index={0}
                    >
                      {(provided) => (
                        <h1
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-full"
                        >
                          {eachClozeItem.clozeQuestionUnderlined}
                        </h1>
                      )}
                    </Draggable>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ) : (
              <h1 className="w-full">
                {eachClozeItem.clozeQuestionUnderlined}
              </h1>
            )}
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default ClozeForm;
