import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearError, clearLoading, getUser } from '../redux/userSlice';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const { isAuthenticated,error,loading } = useSelector(state => state.user);


    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const submitHandler =  (e) => {
        e.preventDefault();
         dispatch(getUser({ name, email, password }))
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearError());
        }
        if (loading) {
            toast.loading("please wait");
            dispatch(clearLoading());
        }

        if (isAuthenticated) {
            toast.success("SignUp successfully");
        }

    }, [dispatch, error, isAuthenticated]);


    if (isAuthenticated) return <Navigate to={"/"} />;


    return (
        <div>
            <form  >
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-2/6 md:w-1/2 shadow-2xl rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 bg-[#39394d] text-white ">
                            <h2 className=" text-2xl font-Roboto font-medium title-font mb-5">Sign Up</h2>
                            <div className="relative mb-4">
                                <label className="leading-7 text-xl font-Raleway">Full Name</label>
                                <input type="text" id="full-name" name="full-name" required onChange={e => setName(e.target.value)} value={name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label className="leading-7 text-xl font-Raleway">Email</label>
                                <input type="email" id="email" name="email" required onChange={e => setEmail(e.target.value)} value={email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label className="leading-7 text-xl font-Raleway">Password</label>
                                <input type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)} value={password} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button  onClick={submitHandler}  className="text-black font-Roboto bg-[#e5e5eb] border-0 py-2 px-8 focus:outline-none hover:bg-[white] rounded text-lg font-bold">Submit</button>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default SignUp