import { RootState } from "../store";

export const showMenuSelector = (state: RootState) => state.modals.showMenu;
export const showLogoutModalSelector = (state: RootState) =>
  state.modals.showLogoutModal;
export const showChangeEmailModalSelector = (state: RootState) =>
  state.modals.showChangeEmailModal;
export const showChangePasswordModalSelector = (state: RootState) =>
  state.modals.showChangePasswordModal;
