import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, selectName) => {
    if (!selectName) {
      return contacts;
    }
    return contacts.filter((item) => {
      const number = item.number.replace(/-/g, "");
      return (
        item.name.toLowerCase().includes(selectName) ||
        number.includes(selectName)
      );
    });
  }
);

export const selectCurrentItem = (state) => state.contacts.currentItem;
