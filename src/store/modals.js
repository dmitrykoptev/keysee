import { createSlice } from "@reduxjs/toolkit";

const modalsInitialState = {
  showMenu: false,
  showLogoutModal: false,
  showChangePasswordModal: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState: modalsInitialState,
  reducers: {
    openMenu(state) {
      state.showMenu = true;
    },
    closeMenu(state) {
      state.showMenu = false;
    },
    openLogoutModal(state) {
      state.showMenu = false;
      state.showLogoutModal = true;
    },
    openChangePasswordModal(state) {
      state.showMenu = false;
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
