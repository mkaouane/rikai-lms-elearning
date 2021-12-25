import React, {useContext} from 'react'
import {Context} from '../context'
import AsideNav from '../components/AsideNav';
import HeaderNav from '../components/HeaderNav';
import LmsContent from './lms-content';

export default function Lms() {

  const {state: {user}, dispatch} = useContext(Context);

  return (
    <div>
      <div class="h-screen w-full bg-white relative flex overflow-hidden">

        {/* <!-- Sidebar --> */}
        <AsideNav/>
        <div class="w-full h-full flex flex-col justify-between">
          {/* <!-- Header --> */}
          
          <HeaderNav/>

          {/* <!-- Main --> */}
        </div>

      </div>
    </div>
  )
}
