import React from "react";

interface Videos {
  id_video: string;
  title: string;
  description: string;
  path_video?: string;
  path_stream?: string;
}

interface Props {
  videos: Videos[];
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

  const itemsVideos = listVideos.map((item) => {
    return (
      <li key={item.id_video}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
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
