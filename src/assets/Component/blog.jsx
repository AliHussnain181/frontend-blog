import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  getBlog } from "../redux/blogSlice"
import { AiFillDelete } from "react-icons/ai"
import { clearError, clearMessage, deleteBlog } from '../redux/adminSlice';
import Hero from './Hero';
import { motion } from 'framer-motion';


const Blog = () => {

  const dispatch = useDispatch();

  const { error, message } = useSelector(state => state.admin);

  const { data, faild } = useSelector(state => state.blog);

  const { user } = useSelector(state => state.user)


  
  const deleteBg = (e) => {
    dispatch(deleteBlog(e))
  };


  useEffect(() => {
    if (faild) {
      toast.error(faild);
      dispatch(clearError());
    }

    if (data) {
      toast.success("Blogs");
    }

    dispatch(getBlog());
  }, [dispatch, error, faild]);



  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

    if (message) {
      toast.success("successfully deleted");
    }

    dispatch(getBlog());
  }, [dispatch, error, message]);

  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };


  return (
    <>

      <Hero />
      {data.map((blog) =>
        <div key={blog._id} className="flex flex-col items-center justify-center mt-10 mb-9 ">
          <Link to={"/blog/" + blog.title}>
            <div className=" w-[80vw] sm:w-[60vw] md:w-[70vw] text-white shadow-md rounded-lg overflow-hidden bg-[#242446] font-Roboto ">
              <div className="md:flex">
                <motion.img
                  src={blog.image}
                  alt="img"
                  className="h-40 w-full mx-auto md:w-[20vw] md:mx-0 "
                  {...options}
                />
                <div className="p-4 md:w-2/3">
                  <motion.h1
                    className="text-md  mb-2 text-center leading-5 md:text-left"
                    {...options}
                  >
                    {blog.title}
                  </motion.h1>
                  <motion.p
                    className=" text-base mb-4 text-center md:text-left"
                    {...options}
                  >
                    By {blog.author}
                  </motion.p>
                </div>
              </div>
            </div>
          </Link>
          {user && user.role === 'admin' && (
            <div onClick={() => deleteBg(blog._id)} className="text-4xl w-11 text-red-700 cursor-pointer text-center">
              <AiFillDelete />
            </div>
          )}
        </div>
      )}

    </>
  )
}

export default Blog