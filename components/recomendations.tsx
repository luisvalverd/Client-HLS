import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

import { Videos } from "./results_videos";

interface Props {
  videos: Videos[];
}

interface Loader {
  src: string;
  width?: number;
  quality?: number;
}

// TODO: make get more recomendations on click btn
const Recomendations: React.FC<Props> = (props: Props) => {

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
      <li key={item.id_video} className="my-5 h-32 flex justify-center items-center">
        <Link href={{
          pathname: '/watch',
          query: { idVideo: item.id_video }
        }}>
          <div className="flex flex-row items-center cursor-pointer w-full h-full transition-all duration-150 hover:bg-slate-800/30">
            <div className="mr-6 h-full flex items-center">
              <Image
                loader={imgLoader}
                alt="image"
                src={`${item.path_image}`}
                width={220}
                height={120}
              ></Image>
            </div>
            <div>
              <h2 >{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </Link>
      </li>
    )
  })

  return (
    <div className="mb-16">
      <ul>
        {itemsVideos}
        <li>
          <button className="w-full bg-slate-800/70 h-12 rounded-lg hover:bg-slate-700/90">Show More</button>
        </li>
      </ul>
    </div>
  )
}

export default Recomendations;
