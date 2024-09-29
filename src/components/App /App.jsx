import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import PrivateRoute from "../PrivateRoute";
import HomePage from "../../pages/Homepage/HomePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";

import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";

import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Please wait, updating user info...</b>
  ) : (
    <div className={css.appContainer}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo="/"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
