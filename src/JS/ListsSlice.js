import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [
      {
        title: "testing list",
        id: 1,
        cards: [
          {
            id: 0,
            text: "this is a static card",
          },
          {
            id: 1,
            text: "this is a static card n2 butttttt utessdfdfxcv sxxx zerzerzerscx cvcdf fhtfh ",
          },
        ],
      },
      {
        title: "testing list number 2",
        id: 2,
        cards: [
          {
            id: 3,
            text: "this is a static card",
          },
          {
            id: 5,
            text: "this is a static card n2",
          },
        ],
      },
    ],
  },
  reducers: {
    setLists: (state, action) => {
      state.lists = action.payload;
    },
    addCard: (state, action) => {
      const { listId, newCard } = action.payload;
      const listIndex = state.lists.findIndex(list => list.id === parseInt(listId));
      console.log(listId)
      if (listIndex !== -1) {
        state.lists[listIndex].cards.push(newCard);
      } else {
        console.error("List not found!");
      }
    },
    
    reorderCards: (state, action) => {
      const { source, destination } = action.payload;
      const { lists } = state;

      // Check if source and destination are defined
      if (source && destination) {
        // Retrieve source and destination list indices
        const sourceListIndex = lists.findIndex(list => list.id === parseInt(source.droppableId));
        const destListIndex = lists.findIndex(list => list.id === parseInt(destination.droppableId));

        // Ensure source and destination lists exist
        if (sourceListIndex !== -1 && destListIndex !== -1) {
          const sourceList = lists[sourceListIndex];
          const destList = lists[destListIndex];

          // Remove card from source list
          const [movedCard] = sourceList.cards.splice(source.index, 1);

          // Add card to destination list
          destList.cards.splice(destination.index, 0, movedCard);

    
        }
      }
    },
  },
});

export const { setLists, addList, reorderCards,addCard } = listsSlice.actions;

export default listsSlice.reducer;
