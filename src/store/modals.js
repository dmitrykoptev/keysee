import { createSlice } from "@reduxjs/toolkit";

const modalsInitialState = {
  showLogoutModal: false,
  showChangePasswordModal: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState: modalsInitialState,
  reducers: {
    openLogoutModal(state) {
      state.showLogoutModal = true;
    },
    openChangePasswordModal(state) {
      state.showChangePasswordModal = true;
    },
    closeModal(state) {
      state.showLogoutModal = false;
      state.showChangePasswordModal = false;
    },
  },
});

export const modalActions = modalsSlice.actions;

export default modalsSlice.reducer;
