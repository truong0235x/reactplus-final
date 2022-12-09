import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import GetStartPage from "./pages/GetStartPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStartPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  },
])

export default router;