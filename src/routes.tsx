import { createBrowserRouter } from "react-router-dom";
import GamesPage from "./pages/GamesPage.tsx";
import PageError from "./components/ui/PageError";
import MainLayout from "./components/layouts/MainLayout";
import TopupPage from "./pages/TopupPage.tsx";
import PayoutPage from "./pages/PayoutPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import GuestLayout from "./components/layouts/GuestLayout.tsx";
import SigninPage from "./pages/SigninPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import MatchesPage from "./pages/MatchesPage.tsx";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
      {
        path: "games",
        element: <GamesPage />,
      },
      {
        path: "games/:gameId",
        element: <MatchesPage />
      },
      {
        path: "topup",
        element: <TopupPage />,
      },
      {
        path: "payout",
        element: <PayoutPage />,
      }
    ]
  },
  {
    path: "/auth",
    element: <GuestLayout/>,
    errorElement: <PageError />,
    children: [
      {
        path: "sign-in",
        element: <SigninPage />
      },
      {
        path: "sign-up",
        element: <SignupPage />
      }
    ]
  }
])

export default AppRoutes