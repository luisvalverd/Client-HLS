import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import axios from "axios";

// redux
import { useDispatch } from "react-redux";
import { fetchAllVideos } from "../store/slices/videos";

// components
import Results from '../components/results_videos';

// TODO make use dispatch before load page and get all videos

const Home: NextPage = () => {
  const [videosData, setVideosData] = useState({
    actualPage: 1,
    totalPage: 1,
    videos: []
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const getAllVideos = () => {
    dispatch(fetchAllVideos());
    router.push("/allVideos")
  }

  useEffect(() => {
    axios.get("http://localhost:8000/all-videos")
      .then((response) => setVideosData({ ...response.data }))
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">VodTube!</a>
        </h1>
        <div>
          <Results videos={videosData?.videos}></Results>
        </div>
        <div>
          <button onClick={() => getAllVideos()}>Show all Videos</button>
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
