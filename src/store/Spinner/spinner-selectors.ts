import { RootState } from "../store";

export const showSpinnerSelector = (state: RootState) => state.spinner.show;
