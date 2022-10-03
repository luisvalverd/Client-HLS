import type { NextPage, NextPageContext } from 'next'
import { useRouter } from "next/router";
import Image from 'next/image'

import { useEffect, useState } from "react";
import axios from "axios";

// redux
import { useDispatch } from "react-redux";
import { fetchAllVideos } from "../store/slices/videos";

// components
import Results from '../components/results_videos';

// interfaces
import { Video } from "../interfaces";

// styles
import styles from '../styles/Home.module.css'

interface Props {
  actualPage: number;
  totalPage: number;
  videos: Video[];
}

const Home: NextPage<Props> = ({ videos }) => {

  const router = useRouter();
  const dispatch = useDispatch();

  const getAllVideos = () => {
    dispatch(fetchAllVideos());
    router.push("/allVideos")
  }

  return (
    <div className="bg-slate-900">

      <main className="mt-20">
        <h1 className={styles.title}>
          Welcome to <a href="#">VodTube!</a>
        </h1>
        <div>
          <Results videos={videos}></Results>
        </div>
        <div className='flex justify-center my-10'>
          <button
            className='h-10 w-80 transition-all duration-150 bg-slate-800/70 hover:bg-slate-700/90'
            onClick={() => getAllVideos()}
          >Show All Videos</button>
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

Home.getInitialProps = async (ctx: NextPageContext) => {
  const videos = await axios.get("http://localhost:8000/all-videos")
  return videos.data;
}

export default Home
