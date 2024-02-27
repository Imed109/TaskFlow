// TaskCard.js
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ text, id, index }) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Box sx={{ minWidth: 275 }} style={{ marginBottom: "8px" }}>
            <Card variant="outlined">{card}</Card>
          </Box>{" "}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
