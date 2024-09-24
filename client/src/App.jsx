import HomePage from "./routes/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import Layout, { RequireAuth } from './routes/Layout/Layout';
import SinglePage from "./routes/SinglePage/SinglePage";
import Profile from "./routes/Profile/Profile";
import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import ProfileUpdate from "./routes/ProfileUpdate/ProfileUpdate";
import NewPost from "./routes/NewPost/NewPost";

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
        },
        {
          path: "/:id",
          element: <SinglePage />,
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
