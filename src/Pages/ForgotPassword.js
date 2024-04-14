import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPasswordResetToken } from '../services/operation/formapi';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    };

    return (
        <div className='text-white min-h-screen flex flex-col justify-center items-center'>
            {loading ? (
                <div className='spinner'>Loading...</div>
            ) : (
                <div className="max-w-md w-full px-6 py-8 bg-gray-800 shadow-md rounded-md">
                    <h1 className='text-3xl text-white mb-4'>
                        {!emailSent ? "RESET YOUR PASSWORD" : "CHECK YOUR EMAIL"}
                    </h1>
                    <p className='text-white mb-4'>
                        {!emailSent
                            ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery."
                            : `We have sent the reset email to ${email}`}
                    </p>
                    <form onSubmit={submitHandler} className='mb-4'>
                        {!emailSent && (
                            <label className='block mb-2 text-white'>
                                <span className='text-sm'>Email Address*</span>
                                <input
                                    required
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter your email address'
                                    className='mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500 bg-gray-700 text-white'
                                />
                            </label>
                        )}
                        <button
                            type='submit'
                            className='bg-blue-500 text-white px-4 py-2 rounded-md'
                        >
                            {!emailSent ? "Reset Password" : "Resend Email"}
                        </button>
                    </form>
                    <div>
                        <Link to="/login" className='text-blue-500'>Back to login</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ForgotPassword;
