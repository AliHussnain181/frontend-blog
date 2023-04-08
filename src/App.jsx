import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blog from "./assets/Component/blog"
import Header from "./assets/Component/Header"
import Profile from "./assets/Component/Profile"
import { toast, Toaster } from 'react-hot-toast';
import BlogPost from "./assets/Component/blogPost";
import SignUp from "./assets/Component/SignUp";
import Login from "./assets/Component/Login";
import { useDispatch, useSelector } from "react-redux";
import PrivateComponent from "./assets/Component/PrivateComponent";
import { useEffect } from "react";
import { getMe } from "./assets/redux/userSlice";
import AddBlog from "./assets/Component/AddBlog";
import Footer from "./assets/Component/Footer";
import About from "./assets/Component/About";

function App() {

  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(state => state.user);


  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);



  return (
    <>
      <BrowserRouter>
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/me" element={<Profile />}  />
            <Route path="/addblog" element={<AddBlog />} />
            <Route path="/about" element={<About/>} />
          </Route>
          <Route path="/" element={<Blog />} />
          <Route path="/blog/:title" element={<BlogPost />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
