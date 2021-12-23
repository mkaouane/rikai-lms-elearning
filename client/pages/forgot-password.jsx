import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from '@ant-design/icons'
import { Context } from "../context";
import { useRouter } from 'next/router'


export default function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [code, setCode] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false);

    // state
    const { state: { user }, dispatch } = useContext(Context)

    // Router
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post("/api/forgot-password", { email });
            setSuccess(true);
            toast("Check your email for the secret code");
            setLoading(false);
        } catch (err) {
            setLoading(false);
            toast(err.response.data);
        }
    };

    const handleResetPassword = async (e) => {

        try {
            const {data} = await axios.post("/api/reset-password", {
                code,
                email,
                newPassword
            })
            setEmail("")
            setCode("")
            setNewPassword("")
            setLoading(false)
            toast("Great ! Now you can login with your new password")
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast(error.response.data)
        }
    }
    useEffect(() => {
        if (user !== null)
            router.push('/lms')
    }, [user]);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div
                className=" flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md "
            >
                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                    Reset your password
                </div>
                <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                    Enter your email to receive a reset link
                </div>

                <div className="mt-10">
                    <form onSubmit={success ? handleResetPassword : handleSubmit}>
                        <div className="flex flex-col mb-5">
                            <label
                                for="email"
                                className="mb-1 text-xs tracking-wide text-gray-600"
                            >
                                E-Mail Address:
                            </label>
                            <div className="relative">
                                <div
                                    className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "
                                >
                                    <i className="fas fa-at text-blue-500"></i>
                                </div>
                                {/* Email */}
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    id="email"
                                    type="email"
                                    name="email"
                                    className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            {success && (
                                <>
                                    <label
                                        for="code"
                                        className="mb-1 text-xs tracking-wide text-gray-600"
                                    >
                                        Reset Code
                                    </label>
                                    <div className="relative">
                                        <div
                                            className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "
                                        >
                                            <i className="fas fa-at text-blue-500"></i>
                                        </div>
                                        {/* Code */}
                                        <input
                                            value={code}
                                            onChange={e => setCode(e.target.value)}
                                            id="code"
                                            name="code"
                                            className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                                            placeholder="Enter your code"
                                        />
                                    </div>
                                    <label
                                        for="newPassword"
                                        className="mb-1 text-xs tracking-wide text-gray-600"
                                    >
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <div
                                            className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 "
                                        >
                                            <i className="fas fa-at text-blue-500"></i>
                                        </div>
                                        {/* New Password */}
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={e => setNewPassword(e.target.value)}
                                            id="newPassword"
                                            name="newPassword"
                                            className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
                                            placeholder="Enter your new password"
                                        />
                                    </div>
                                </>
                            )}
                        </div>


                        <div className="flex w-full">
                            <button
                                type="submit"
                                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in
                "
                                disabled={!email || loading}
                            >
                                {loading ? <SyncOutlined spin /> : <span className="mr-2 uppercase">SEND</span>}
                                <span>
                                    {loading ? "" : <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>}

                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
