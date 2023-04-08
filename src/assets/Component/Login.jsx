import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearError, clearLoading, getLogin } from '../redux/userSlice';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {


    const { isAuthenticated, error, loading } = useSelector(state => state.user);


    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(getLogin({ email, password }))
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearError());
        }
        if (loading) {
            toast.loading("Wait");
            dispatch(clearLoading());
        }

        if (isAuthenticated) {
            toast.success("Login successfully");
        }

    }, [dispatch, error, isAuthenticated]);



    if (isAuthenticated) return <Navigate to={"/"} />;




    return (
        <div>
            <section className="text-[#ee4b4b] body-font  ">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center ">
                    <div className="lg:w-2/6 md:w-1/2  shadow-xl rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 bg-[#39394d] text-white ">
                        <h2 className="font-Roboto text-2xl font-medium title-font mb-5">Login</h2>
                        <div className="relative mb-4">
                            <label className="leading-7 text-xl font-Raleway">Email</label>
                            <input type="email" id="email" name="email" required onChange={e => setEmail(e.target.value)} value={email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-xl font-Raleway">Password</label>
                            <input type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)} value={password} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={loginHandler} type='submit' className="text-black font-Roboto bg-[#e5e5eb] border-0 py-2 px-8 focus:outline-none hover:bg-[white] rounded text-lg">Button</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login