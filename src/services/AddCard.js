// AddCard.js
import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch hook
import {addCard} from "../JS/ListsSlice"
import Icon from "@mui/material/Icon";
import TextareaAutosize from "react-textarea-autosize";
import { Card } from "@mui/material";
import Button from "@mui/material/Button";

const AddCard = ({ listId }) => {
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCardText, setNewCardText] = useState("");

  const handleAddCardClick = () => {
    setIsAddingCard(true);
  };

  const handleCancelAddCard = () => {
    setIsAddingCard(false);
    setNewCardText("");
  };

  const handleAddNewCard = () => {
    const newCard = {
      id: Math.random(), // You might want to generate a unique ID in a better way
      text: newCardText,
    };
    dispatch(addCard( {listId, newCard} )); // Dispatch addCard action with listId and newCard
    setIsAddingCard(false);
    setNewCardText("");
        console.log("the id :" ,listId);

    // Reset state
    setIsAddingCard(false);
    setNewCardText("");
  };

  return (
    <div>
      {isAddingCard ? (
        <div>
          <Card style={{ minHeight: 80 }}>
            <TextareaAutosize
              style={{
                resize: "none",
                width: "100%",
                outline: "none",
                border: "none",
                fontSize:16
              }}
              placeholder="Add new card"
              autoFocus
              value={newCardText}
              onChange={(e) => setNewCardText(e.target.value)}
            />
          </Card>
          <div style={{marginTop:8, display:"flex",alignItems:"center"}}>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
            onClick={handleAddNewCard}
          >
            Add
          </Button>
          <Icon style={{marginLeft:8, cursor:"pointer"}} onClick={handleCancelAddCard}>
            close
          </Icon>
          </div>
        </div>
      ) : (
        <div
          style={{
            opacity: 0.5,
            color: "inherit",
            backgroundColor: "inherit",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            borderRadius: 3,
            height: 36,
            width: 272,
            paddingLeft: 10,
          }}
          onClick={handleAddCardClick}
        >
          <Icon>add</Icon>
          <p>Add another Card</p>
        </div>
      )}
    </div>
  );
};

export default AddCard;
