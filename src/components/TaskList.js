// TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import AddCard from '../services/AddCard';
import AddList from '../services/AddList';

const TaskList = () => {
  const lists = useSelector((state) => state.lists.lists);
  return (
    <div style={{ display:'flex',flexDirection:'row' }}>
      {lists.map((list) => (
        <div key={list.id} style={{ backgroundColor: '#ccc', borderRadius: 3, width: 300, marginRight: 8, padding:8 }}>
          <h4>{list.title}</h4>
          {list.cards.map((card) => (
            <TaskCard key={card.id} text={card.text} />
          ))}
          <AddCard listId={list.id}/>
        </div>
      ))}
      <AddList/>
    </div>
  );
};

export default TaskList;

