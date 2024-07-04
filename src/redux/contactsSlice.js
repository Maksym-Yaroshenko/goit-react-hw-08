import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, actions) => {
      state.items = actions.payload;
      state.loading = false;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(addContact.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    });
    builder.addCase(addContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });

    builder.addCase(deleteContact.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      const contast = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.items.splice(contast, 1);
      state.loading = false;
    });
    builder.addCase(deleteContact.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    console.log("fdfed");
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter)
    );
  }
);

// export const { addContact1, deleteContact1 } = contactsSlice.actions;

export default contactsSlice.reducer;
