import { RootState } from "../store";

export const keysSelector = (state: RootState) => state.keyList.items;
