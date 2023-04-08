import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";



const BlogPost = () => {
    const params = useParams();
    const [data, setData] = useState([]);


    useEffect(() => {
        getPost()
    }, [])


    const getPost = async () => {
        let result = await fetch(`http://localhost:5000/api/b1/blog/${params.title}`)
        result = await result.json()
        setData(result)
        toast.success("blog")
    }

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
            <div className="flex flex-col items-center justify-center mt-10 mb-60">
                <div className="max-w-4xl w-full bg-white shadow-md rounded-lg overflow-hidden font-Roboto ">
                    <div className="md:flex">
                        <motion.img
                            src={data.image}
                            alt="Shoe"
                            className="mx-auto h-64 m-auto md:w-1/3 object-cove"
                            {...options}
                        />
                        <div className="p-4 md:w-2/3">
                            <motion.h1
                                className="text-xl font-bold mb-2"
                                {...options}
                            >
                                {data.title}
                            </motion.h1>
                            <motion.p
                                className="text-gray-700 text-base mb-4"
                                {...options}
                            >
                                By {data.author}
                            </motion.p>
                            <motion.p
                                className="text-gray-600 text-sm"
                                {...options}
                            >
                                {data.content}
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPost




{/* <div className='mt-2'>
<img className='w-[60%] h-[60vh] rounded-md mx-auto' src={data.image} alt="blog" />
<h2 className=' font-Roboto font-semibold text-2xl text-center'>{data.title}</h2>
<p className=' w-[70vw] mx-auto mt-3 font-Raleway text-lg text-center'>{data.content}</p>
<p className='w-[90%] text-right font-Roboto mt-5'>Author: {data.author}</p>
</div> */}