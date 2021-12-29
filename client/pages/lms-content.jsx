import React from 'react'
import Lms from './lms'
import AsideNav from '../components/AsideNav'
import HeaderNav from '../components/HeaderNav'


export default function LmsContent() {

  return (
    <>
 
        <div class="h-screen w-full bg-white relative flex  overflow-y-scroll">

          {/* <!-- Sidebar --> */}
          <AsideNav />
          <div class="w-full h-full flex flex-col justify-between">
            {/* <!-- Header --> */}

            <HeaderNav />

            {/* <!-- Main --> */}


            <main class="max-w-full h-full flex relative overflow-y-hidden">
              {/* <!-- Container --> */}
     
              <div class="h-full w-full m-4 pb-6 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
                {/* <!-- Container --> */}
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
                <div class="w-60 lg:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
              </div>
  
            </main>
          </div>

        </div>


    </>
  )
}
