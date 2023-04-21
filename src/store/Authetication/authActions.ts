import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginSuccess } from "../../models/auth";

interface IAuthFunctionProps {
  funcType: "login" | "register";
  enteredEmail: string;
  enteredPassword: string;
}

export const authFuction = createAsyncThunk(
  "authFunction",
  async (
    { funcType, enteredEmail, enteredPassword }: IAuthFunctionProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`/api/v1/${funcType}`, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          funcType === "login"
            ? "Email or password was wrong"
            : "This email already exists"
        );
      }

      const data = (await response.json()) as ILoginSuccess;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
