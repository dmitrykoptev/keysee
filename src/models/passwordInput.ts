import { ChangeEvent } from "react";

export interface IPasswordInput {
  inputType: string;
  isError?: boolean;
  placeholder: string;
  enteredPassword?: string;
  enteredEmail?: string;
  passwordInputHasError?: boolean;
  emailInputHasError?: boolean;
  enteredPasswordIsValid?: boolean;
  enteredEmailIsValid?: boolean;
  passwordChangedHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  emailChangedHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  resetPasswordInput?: () => void;
  resetEmailInput?: () => void;
  passwordBlurHandler?: () => void;
  emailBlurHandler?: () => void;
}
