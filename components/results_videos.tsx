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
