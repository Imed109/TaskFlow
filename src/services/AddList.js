// AddList.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../JS/ListsSlice";
import Icon from "@mui/material/Icon";
import { Card } from "@mui/material";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@mui/material/Button";

const AddList = () => {
  const dispatch = useDispatch();
  const [newListTitle, setNewListTitle] = useState("");
  const [isAddingList, setIsAddingList] = useState(false);

  const handleAddListClick = () => {
    setIsAddingList(true);
  };

  const handleCancelAddList = () => {
    setIsAddingList(false);
    setNewListTitle("");
  };

  const handleAddList = () => {
    if (newListTitle.trim() === "") {
      return; // Prevent adding empty list titles
    }
    const newList = {
      id: Math.random(), // Generate a unique ID
      title: newListTitle,
      cards: [], // Initialize cards array for the new list
    };
    dispatch(addList(newList)); // Dispatch addList action with the new list
    setNewListTitle(""); // Clear input after adding list
  };

  return (
    <div>
      {isAddingList ? (
        <div>
          <Card style={{ minHeight: 50}}>
            <TextareaAutosize
              style={{
                resize: "none",
                width: "80%",
                outline: "none",
                border: "none",
                fontSize: 16,
              }}
              placeholder="Add new title"
              autoFocus
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
            />
          </Card>
          <div style={{ marginTop: 8, display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "#5aac44" }}
              onClick={handleAddList}
            >
              Add
            </Button>
            <Icon
              style={{ marginLeft: 8, cursor: "pointer" }}
              onClick={handleCancelAddList}
            >
              close
            </Icon>
          </div>
        </div>
      ) : (
        <div style={{
            opacity: 0.5,
            color: "inherit",
            backgroundColor: "#ccc",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: 3,
            height: 36,
            width: 272,
            paddingLeft: 10,
          }} onClick={handleAddListClick}>
          <Icon>add</Icon>
          <p>Add another List</p>
        </div>
      )}
    </div>
  );
};

export default AddList;
