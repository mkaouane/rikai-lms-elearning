import React from 'react'
import AsideNav from '../components/AsideNav'
import HeaderNav from '../components/HeaderNav'

export default function Settings() {
    return (
        <div>
        <div class="h-screen w-full bg-white relative flex overflow-hidden">

          {/* <!-- Sidebar --> */}
          <AsideNav />
          <div class="w-full h-full flex flex-col justify-between">
            {/* <!-- Header --> */}

            <HeaderNav />

            {/* <!-- Main --> */}
            <main class="max-w-full h-full flex relative overflow-y-hidden">
              {/* <!-- Container --> */}
              <h1>Settings</h1>
            </main>
          </div>

        </div>
      </div>

   
    )
}
