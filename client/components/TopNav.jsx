import React from 'react'
import Link from 'next/link'
import { Context } from '../context'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { LogoutOutlined } from '@ant-design/icons'


export default function TopNav() {

    const [current, setCurrent] = useState("");

    const { state: {user}, dispatch } = useContext(Context);

    const router = useRouter();

    const logout = async () => {
        dispatch({
            type: "LOGOUT",
        });
        window.localStorage.removeItem("user");
        const { data } = axios.get('/api/logout');
        // toast(data.message);
        router.push("/login")
    }

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
      }, [process.browser && window.location.pathname]);

    return (
        <>
            <nav className="w-full py-6 bg-white w-screen">
                <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
                    <section className="flex items-center text-gray-900 space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
                        </svg>
                        <Link href="/">
                            <a className="font-bold text-xl focus:ring focus:ring-blue-500 focus:ring-opacity-25 outline-none rounded-lg">RIKAI</a>
                        </Link>
                    </section>
                    <section>
                        <ul className="md:space-x-8 space-x-6 text-gray-900 font-semibold hidden md:flex">
                            <li className="relative group">
                                <Link href="/user">
                                    <a className="group focus:ring focus:ring-blue-500 focus:ring-opacity-25 outline-none rounded-lg"> {user !== null && (user.name)} </a>
                                </Link>
                                <div className="w-full h-0.5 bg-transparent group-hover:bg-blue-500 transition-al absolute bottom-0" />
                            </li>
                            <li className="relative group">
                                <Link href="/lms">
                                   <a className="focus:ring focus:ring-blue-500 focus:ring-opacity-25 outline-none rounded-lg">LMS</a>
                                </Link>
                                <div className="w-full h-0.5 bg-transparent group-hover:bg-blue-500 transition-al absolute bottom-0" />
                            </li>
                            <li className="relative group">
                                <a href="#" className="focus:ring focus:ring-blue-500 focus:ring-opacity-25 outline-none rounded-lg">About</a>
                                <div className="w-full h-0.5 bg-transparent group-hover:bg-blue-500 transition-al absolute bottom-0" />
                            </li>
                            <li>
                                {user === null && (
                                    <Link href="/register">
                                        <a className="bg-white px-4 py-1 rounded-xl text-gray-900 active:bg-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-25 outline-none">Register</a>
                                    </Link>
                                )}

                            </li>
                            <li>
                                {user ?
                                    <a onClick={logout} href="#">
                                        <LogoutOutlined />
                                    </a>
                                    : <Link href="/login">
                                        <a className="bg-blue-500 px-4 py-1 rounded-xl text-white hover:bg-blue-400 active:bg-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-25 outline-none">Login</a>
                                    </Link>}
                            </li>
                        </ul>
                        <button className="flex md:hidden hover:bg-gray-100 p-2 rounded-full transition-all focus:ring focus:ring-purple-500 focus:ring-opacity-25 active:bg-gray-200 outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </section>
                </div>
            </nav>
        </>
    )
}
