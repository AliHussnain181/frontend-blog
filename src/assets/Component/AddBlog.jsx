import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { addBlog, clearError } from '../redux/adminSlice';
import { toast } from 'react-hot-toast';


const AddBlog = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [author, setAuthor] = useState('')

    const dispatch = useDispatch();

    const { loading, error,data } = useSelector(state => state.admin)


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearError());
        }

        if (data) {
            toast.success("Blog Added");
        }

    }, [dispatch, error, data])


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBlog({ title, content, author, image }))
    };

    return (
        <motion.form
            className="flex flex-col justify-center mb-20 items-center w-full max-w-2xl mx-auto mt-10 px-5 text-white py-20 bg-[#39394d] rounded-lg shadow-md"
            onSubmit={handleSubmit}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-2xl font-medium mb-4">Add Product</h2>
            <div className="w-full mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                    Title
                </label>
                <textarea
                    type="text"
                    id="name"
                    name="name"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded-lg px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 shadow-2xl focus:ring-blue-500"
                />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="name" className="block  font-medium mb-2">
                    Content
                </label>
                <textarea
                    type="text"
                    id="name"
                    name="name"
                    value={content}
                    required
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border rounded-lg px-3 py-12 text-gray-700 focus:outline-none focus:ring-2 shadow-2xl focus:ring-blue-500"
                />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="email" className="block  font-medium mb-2">
                    Author
                </label>
                <input
                    type="text"
                    id="text"
                    name="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 shadow-2xl focus:ring-blue-500"
                />
            </div>
            <div className="w-full mb-4">
                <label htmlFor="message" className="block font-medium mb-2">
                    Image Src
                </label>
                <input
                    id="message"
                    name="message"
                    value={image}
                    required
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 shadow-2xl focus:ring-blue-500"
                    rows={5}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Submit
            </button>
        </motion.form>
    );
};

export default AddBlog;
