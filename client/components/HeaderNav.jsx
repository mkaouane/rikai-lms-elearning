import React, {useContext} from 'react'
import {Context} from '../context'

export default function HeaderNav() {

    const {state: {user}, dispatch} = useContext(Context);


    return (
        <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
            {/* <!-- Informação --> */}
            <div class="flex flex-shrink-0 items-center space-x-4 text-white">
            

              {/* <!-- Texto --> */}
              <div class="flex flex-col items-end ">
                {/* <!-- Nome --> */}
                <div class="text-md font-medium ">{user !== null && (user.name)}</div>
                {/* <!-- Título --> */}
                <div class="text-sm font-regular">{user !== null && (user.role)}</div>
              </div>

              {/* <!-- Foto --> */}
              <div class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"><img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="avatar" /></div>
            </div>
          </header>
    )
}
