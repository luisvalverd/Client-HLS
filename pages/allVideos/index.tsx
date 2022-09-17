import type { NextPage } from "next"
import { useEffect, useState } from "react";
import axios from "axios";

// redux
import { useSelector } from "react-redux";

// components
import Results from "../../components/results_videos";
import PageNavigation from "../../components/page_navigation";

const AllVideos: NextPage = () => {
  const [dataVideos, setDataVideos] = useState({
    videos: [],
    totalPage: 1,
    actualPage: 1,
  });
  const { entities, actualPage, totalPage } = useSelector((state: any) => state.videos)

  useEffect(() => {
    if (entities.length === 0) {
      axios.get("http://localhost:8000/all-videos")
        .then((response) => {
          setDataVideos(response.data)
        })
        .catch((error) => {
          console.log(error.message);
        })
    } else {
      setDataVideos({ videos: entities, actualPage, totalPage });
    }
  }, [])

  return (
    <div>
      <h2>All videos</h2>
      <div>
        <Results videos={dataVideos?.videos}></Results>
      </div>
      <div>
        <PageNavigation
          actualPage={dataVideos.actualPage}
          lastPage={dataVideos.totalPage}
          search_query={""}
          allVideos={true}
        ></PageNavigation>
      </div>
    </div>
  )
}

export default AllVideos;
