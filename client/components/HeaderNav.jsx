import React, { useContext } from 'react'
import { Context } from '../context'
import Link from 'next/link'


export default function HeaderNav() {

  const { state: { user }, dispatch } = useContext(Context);


  return (
    <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link href="/">
          <a>
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </Link>
        <div className="flex justify-center mx-auto items-center">

          {user !== null && user.role.includes('Instructor') ? (
        <Link href="/user/instructor">
            <a
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Dashboard
            </a>
          </Link>
          ) : ''}

        </div>
      </div>
      {/* <!-- Informação --> */}
      <div class="flex flex-shrink-0 items-center space-x-4 text-white">

        {/* <!-- Texto --> */}
        <div class="flex flex-col items-end ">
          {/* <!-- Nome --> */}
          <div class="text-md font-medium ">{user !== null && (user.name)}</div>
          {/* <!-- Título --> */}
          <div class="text-sm font-regular">{user !== null && user.role.includes('Instructor') ? ('Instructor') : ('Student')}</div>
        </div>
        {/* <!-- Foto --> */}
        <div class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"><img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="avatar" /></div>
      </div>
    </header>
  )
}
