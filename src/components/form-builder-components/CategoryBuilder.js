import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { IoClose } from "react-icons/io5";
import { RiApps2Line } from "react-icons/ri";

const CategoryBuilder = ({
  index,
  category,
  onCategoryChange,
  onRemoveCategory,
  onAddCategory,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAddCategory();
    }
  };

  return (
    <Draggable draggableId={`category-${index}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex items-center text-center space-x-4">
            <RiApps2Line />
            <input
              placeholder={`Category ${index + 1} (optional)`}
              type="text"
              value={category.name}
              onChange={(e) => onCategoryChange(index, e.target.value)}
              className="border rounded p-2 mt-2 outline-none"
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => onRemoveCategory(index)}>
              <IoClose className="font-bold text-2xl" />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CategoryBuilder;
