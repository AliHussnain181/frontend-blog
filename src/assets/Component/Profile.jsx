import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { clearError, getLogout } from '../redux/userSlice';
import { Link } from 'react-router-dom';
import {AiOutlineCloudUpload} from "react-icons/ai"


const Profile = () => {

  const dispatch = useDispatch();
  const { user,error } = useSelector(state => state.user);


  const handleLogout = () => {
    dispatch(getLogout());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

  }, [dispatch, error]);

  return (
    <div>
      <div className="bg-[#282847] min-h-screen flex flex-col justify-center items-center font-Roboto ">
        <motion.div
          className="bg-white max-w-md mx-auto px-5 py-8 rounded-lg shadow-md flex flex-col justify-center items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >

          <h2 className="text-2xl font-medium mb-4">{user.name}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleLogout} 
          >
            Logout
          </button>
          {user && user.role === 'admin' &&(
          <Link to={"/addblog"} className="text-4xl h-19 mt-5 text-center">
            <AiOutlineCloudUpload />
          </Link>
            )}
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
