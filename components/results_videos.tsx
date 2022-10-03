import React from "react";
import Link from "next/link";
import Image from "next/image";

// component
import CategoriesVideos from "./categories_video";

// interfaces
import { Video } from "../interfaces";

interface Props {
  videos: Video[];
}

interface Loader {
  src: string;
  width?: number;
  quality?: number;
}

const Results: React.FC<Props> = (props: Props) => {

  const listVideos = props.videos;

  if (listVideos.length === 0) {
    return (
      <div>
        <h1>Dont find any video</h1>
      </div>
    )
  }

  const imgLoader = (data: Loader) => {
    return `http://localhost:8000/${data.src}`
  }

  const itemsVideos = listVideos.map((item) => {
    return (
      <li key={item.id_video} className="mx-56 my-10 h-56 flex justify-center items-center">
        <div className="flex flex-row items-center w-full h-full transition-all duration-150 hover:bg-slate-800/30">
          <div className="mr-16 h-full flex items-center">
            <Link href={{
              pathname: '/watch',
              query: { idVideo: item.id_video }
            }}>
              <div className="cursor-pointer">
                <Image
                  loader={imgLoader}
                  alt="image"
                  src={`${item.path_image}`}
                  width={340}
                  height={220}
                ></Image>
              </div>
            </Link>
          </div>
          <div className="h-full mt-5 w-4/6">
            <div>
              <Link href={{
                pathname: '/watch',
                query: { idVideo: item.id_video }
              }}>
                <div className="cursor-pointer w-full">
                  <h2 className="text-xl fond-bold">{item.title}</h2>
                  <p className="text-xs text-gray-300/70 font-medium mt-2">{item.description}</p>
                </div>
              </Link>
            </div>
            <CategoriesVideos categories={item.categories}></CategoriesVideos>
          </div>
        </div>
      </li>
    )
  })

  return (
    <div>
      <ul>
        {itemsVideos}
      </ul>
    </div>
  )
}

export default Results;
