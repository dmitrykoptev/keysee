import { RootState } from "../store";

export const accountsSelector = (state: RootState) => state.accountsList.items;
