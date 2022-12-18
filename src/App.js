import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const MainPage = React.lazy(() => import("./pages/MainPage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.token);
  console.log(isLoggedIn);

  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
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
        <Route path="/profile">
          {isLoggedIn && <ProfilePage />}
          {!isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route to="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;
