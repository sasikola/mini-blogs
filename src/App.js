// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NotFound from "./Pages/NotFound";
import PostDetails from "./Pages/PostDetails";
import UserProfile from "./Pages/UserProfile";
import Authors from "./Pages/Authors";
import CreatePost from "./Pages/CreatePost";
import EditPost from "./Pages/EditPost";
import CategoryPosts from "./Pages/CategoryPosts";
import AuthorPosts from "./Pages/AuthorPosts";
import Dashboard from "./Pages/Dashboard";
import Logout from "./Pages/Logout";
import { Flip, ToastContainer } from "react-toastify";
import PublicRoutes from "./Components/routes/PublicRoutes";
import ProtectedRoutes from "./Components/routes/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <div>
        {!hideNavBar && <Navbar />}
        <ToastContainer
          toastClassName="toastContainerBox"
          transition={Flip}
          position="top-right"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoutes>
                {" "}
                <Register />
              </PublicRoutes>
            }
          />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route
            path="/profile/:id"
            element={
              <ProtectedRoutes>
                {" "}
                <UserProfile />
              </ProtectedRoutes>
            }
          />
          <Route path="/authors" element={<Authors />} />
          <Route
            path="/create"
            element={
              <ProtectedRoutes>
                <CreatePost />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/posts/:id/edit"
            element={
              <ProtectedRoutes>
                {" "}
                <EditPost />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/posts/categories/:categories"
            element={<CategoryPosts />}
          />
          <Route path="/posts/users/:id" element={<AuthorPosts />} />
          <Route path="/myposts/:id" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {!hideNavBar && <Footer />}
      </div>
    </>
  );
}

export default App;
