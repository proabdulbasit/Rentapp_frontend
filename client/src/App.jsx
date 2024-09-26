import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import Layout, { RequireAuth } from "./routes/Layout/Layout";
import SinglePage from "./routes/SinglePage/SinglePage";
import Profile from "./routes/Profile/Profile";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import ProfileUpdate from "./routes/ProfileUpdate/ProfileUpdate";
import NewPost from "./routes/NewPost/NewPost";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/Loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
        {
          path: "/add",
          element: <NewPost />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
