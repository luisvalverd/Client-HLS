import type { NextPage, NextPageContext } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/navbar";
import { useEffect } from "react";

//redux
import { fetchAllVideos } from "../store/slices/videos";
import { useDispatch, useSelector } from "react-redux";

// TODO make use dispatch before load page and get all videos

const Home: NextPage = () => {

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">VodTube!</a>
        </h1>
        <div>
          <ul>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
