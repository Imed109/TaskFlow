// TaskList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskCard from "./TaskCard";
import AddCard from "../services/AddCard";
import AddList from "../services/AddList";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { reorderCards } from "../JS/ListsSlice";
const TaskList = () => {
  const lists = useSelector((state) => state.lists.lists);
  const dispatch = useDispatch(); 


  const handleDragEnd = (result) => {
    const { destination, source } = result;
    // If there's no destination or if the card is dropped in the same position
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }
    console.log ('doppableId :',destination.droppableId,)
    // Dispatch action to reorder cards
    dispatch(reorderCards({ source: result.source, destination: result.destination }));

  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {lists.map((list) => (
          <Droppable droppableId={String(list.id)} key={list.id}>
            {(provided) => (
              <div {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: "#ccc",
                  borderRadius: 3,
                  width: 300,
                  marginRight: 8,
                  padding: 8,
                }}
              >
                <h4>{list.title}</h4>
                {list.cards.map((card, index) => (
                  <TaskCard key={card.id} index={index} id={card.id} text={card.text} />
                ))}
                <AddCard listId={list.id} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
        <AddList />
      </div>
    </DragDropContext>
  );
};

export default TaskList;
