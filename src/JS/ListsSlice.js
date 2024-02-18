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
        id: 33,
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
    addList: (state, action) => {
      state.lists.push(action.payload); // Add the new list to the lists array
    }
    // You can add other reducers here if needed
  },
});

// Export action creators
export const { setLists, addList } = listsSlice.actions;

// Define and export addCard action creator
export const addCard = (listId, newCard) => (dispatch, getState) => {
  // Retrieve the current state
  const state = getState();

  // Find the list by listId
  const list = state.lists.lists.find((list) => list.id === listId);
  if (list) {
    // Dispatch the setLists action with updated lists
    dispatch(setLists([
      ...state.lists.lists.filter((list) => list.id !== listId), // Remove the list to be updated
      {
        ...list, // Spread the properties of the existing list
        cards: [...list.cards, newCard] // Add the new card to the cards array
      }
    ]));
  } else {
    console.error("List not found!"); // Log an error if the list is not found
  }
};
export default listsSlice.reducer;
