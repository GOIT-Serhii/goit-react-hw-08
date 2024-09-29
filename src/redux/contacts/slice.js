import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from "./operations";
import { logOut } from "../auth/operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    currentItem: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchContacts.pending, handlePending)

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })

      .addCase(deleteContact.rejected, handleRejected)

      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.isLoading = false;
        state.error = null;
      })

      .addCase(changeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                ...action.payload,
              }
            : item
        );

        state.currentItem = null;
      });
  },
  reducers: {
    editCurrenItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

export const { editCurrenItem } = contactsSlice.actions;

export default contactsSlice.reducer;
