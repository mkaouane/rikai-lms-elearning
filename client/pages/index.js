import Head from 'next/head'
import Image from 'next/image'
import TopNav from '../components/TopNav'
import styles from '../styles/Home.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../context';
import React, {useContext} from 'react'

export default function Home() {
  const notify = () => toast("Wow so easy!");
  const {state: {user}} = useContext(Context)

  return (
    <>
          <TopNav notification={notify}/>
          <p>{user && (
            user.name
          )}</p>
    </>
  )
}
