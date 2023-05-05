import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  showMenu: boolean;
  showLogoutModal: boolean;
  showChangeEmailModal: boolean;
  showChangePasswordModal: boolean;
  showMessageModal: boolean;
}

const initialState: IInitialState = {
  showMenu: false,
  showLogoutModal: false,
  showChangeEmailModal: false,
  showChangePasswordModal: false,
  showMessageModal: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openMenu(state) {
      return {
        ...state,
        showMenu: true,
      };
    },
    closeMenu(state) {
      return {
        ...state,
        showMenu: false,
      };
    },
    openLogoutModal(state) {
      return {
        ...state,
        showMenu: false,
        showLogoutModal: true,
      };
    },
    openChangeEmailModal(state) {
      return {
        ...state,
        showMenu: false,
        showChangeEmailModal: true,
      };
    },
    openChangePasswordModal(state) {
      return {
        ...state,
        showMenu: false,
        showChangePasswordModal: true,
      };
    },
    openMessageModal(state) {
      return {
        ...state,
        showMenu: false,
        showMessageModal: true,
      };
    },
    closeModal(state) {
      return {
        ...state,
        showLogoutModal: false,
        showChangeEmailModal: false,
        showChangePasswordModal: false,
        showMessageModal: false,
      };
    },
  },
});

export const modalActions = modalsSlice.actions;

export default modalsSlice.reducer;
