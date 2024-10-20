import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const config = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "/profile-page",
      element: <ProfilePage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/registration",
      element: <RegistrationPage />,
    },
  ]);

  return (
    <React.StrictMode>
      <div className="App">
        <RouterProvider router={config} />
      </div>
    </React.StrictMode>
  );
}

export default App;
