// TaskCard.js
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TaskCard = ({ text }) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }} style={{ marginBottom:"8px"}}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default TaskCard;
