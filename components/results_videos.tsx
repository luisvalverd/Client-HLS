import React from "react";

interface Videos {
  id: string;
  name: string;
  description: string;
}

interface Props {
  videos: Videos[];
}

const Results: React.FC<Props> = (props: Props) => {

  const listVideos = props.videos;
  const itemsVideos = listVideos.map((item) => {
    return (
      <li key={item.id}>
        <h2>{item.name}</h2>
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
