import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const CategoriesForm = () => {
  const initialItems = ["option 1", "option 2", "option 3", "option 4"];
  const [items, setItems] = useState(initialItems);
  const [results, setResults] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);

    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-slate-50 shadow-md p-2 flex-auto flex-col h-auto w-full flex items-center justify-center mb-4"
          >
            <h1 className="text-left w-full text-2xl">Question 1</h1>
            <div className="flex-auto flex-row flex">
              {items.map((item, index) => (
                <Draggable
                  key={index}
                  draggableId={`draggable-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="draggable flex text-center"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div
                        key={index}
                        className="h-fit m-2 border p-1 rounded-md"
                      >
                        {item}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>

            <div className="flex items-center justify-center gap-10">
              <div> 
                <div className="mb-2 p-1 min-h-2 min-w-15 border-r-4 rounded-lg bg-yellow-400">
                  categorie 1
                </div>
                <Droppable droppableId="dropable-1">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="dropable p-20 min-h-20 min-w-15 border-r-4 rounded-lg bg-yellow-400"
                    >
                      {results.map((item, index) => (
                        <Draggable
                          key={index}
                          draggableId={`draggable-${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="draggable flex text-center"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div
                                key={index}
                                className="h-fit m-2 border p-1 rounded-sm"
                              >
                                {item}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
              <div>
                <div className="mb-2 p-1 min-h-2 min-w-15  min-w-15 border-r-4 rounded-lg bg-cyan-500 ">
                  categorie 2
                </div>
                <Droppable droppableId="dropable-2">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="dropable p-20 min-h-20 min-w-10 border-r-4 rounded-lg bg-cyan-500 "
                    >
                      {results.map((item, index) => (
                        <Draggable
                          key={index}
                          draggableId={`draggable-${index}`}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="draggable flex text-center"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <div
                                key={index}
                                className="h-fit m-2 border p-1 rounded-sm"
                              >
                                {item}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default CategoriesForm;
