import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import LoadingSpinner from "./components/Reusable/LoadingSpinner";
import LoginPage from "./pages/LoginPage";

const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const MainPage = React.lazy(() => import("./pages/MainPage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const EmailFormPage = React.lazy(() => import("./pages/EmailFormPage"));
const ResetPasswordPage = React.lazy(() => import("./pages/ResetPasswordPage"));

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.token);
  console.log(isLoggedIn);

  return (
    <>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            {isLoggedIn && <MainPage />}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            {!isLoggedIn && <LoginPage />}
            {isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/register">
            {!isLoggedIn && <RegisterPage />}
            {isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/reset-password">
            {!isLoggedIn && <EmailFormPage />}
            {isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/set-new-password">
            {!isLoggedIn && <ResetPasswordPage />}
            {isLoggedIn && <Redirect to="/" />}
          </Route>

          <Route to="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
