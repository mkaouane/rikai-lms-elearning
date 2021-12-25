import React from 'react'
import AsideNav from '../components/AsideNav'
import HeaderNav from '../components/HeaderNav'

export default function UserProfile() {
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
              <div class="bg-slate-700 w-full py-10 px-10">
  <div>
    <div class="sm:flex space-x-7 md:items-start items-center">
      <div class="mb-4">
        <img class="rounded-md md:w-80" src="https://avatars.githubusercontent.com/u/5550850?v=4" alt="brad" />
      </div>
      <div>
        <h1 class="text-slate-100 text-4xl font-bold my-2">Brad Traversy</h1>
        <p class="text-slate-100 text-lg tracking-wide mb-6 md:max-w-lg">Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.</p>
        <button class="border-2 px-6 py-4 rounded-md border-indigo-600 text-slate-100 hover:bg-indigo-600 hover:text-indigo-100 transition duration-75">VISIT GITHUB PROFILE</button>
      </div>
    </div>
  </div>
  <div class="mt-8 sm:grid grid-cols-3 sm:space-x-4">
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Location</span>
      <h2 class="text-slate-100 text-2xl font-semibold">Massachusetts</h2>
    </div>
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Website</span>
      <h2 class="text-slate-100 text-2xl font-semibold">traversymedia</h2>
    </div>
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Twitter</span>
      <h2 class="text-slate-100 text-2xl font-semibold">traversymedia</h2>
    </div>
  </div>
  <div class="sm:grid lg:grid-cols-4 grid-cols-2 sm:gap-x-4">
    <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span class="text-md text-slate-400">Followers</span>
        <h1 class="text-3xl font-bold text-slate-100">47155</h1>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </div>
    <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span class="text-md text-slate-400">Following</span>
        <h1 class="text-3xl font-bold text-slate-100">9322</h1>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
    </div>
    <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span class="text-md text-slate-400">Public Rpos</span>
        <h1 class="text-3xl font-bold text-slate-100">236</h1>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
    </div>
    <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span class="text-md text-slate-400">Public Gists</span>
        <h1 class="text-3xl font-bold text-slate-100">40</h1>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      </div>
    </div>
  </div>
</div>
            </main>
          </div>

        </div>
      </div>
    )
}
