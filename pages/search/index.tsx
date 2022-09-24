import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

// redux
import { useSelector } from "react-redux";

// components
import Results from "../../components/results_videos";
import PageNavigation from "../../components/page_navigation";

const Search: NextPage = () => {
  const [dataVideos, setDataVideos] = useState({
    videos: [],
    totalPage: 1,
    actualPages: 1,
    query_search: ""
  });

  const router = useRouter();
  var query_search: any = router.query.query_search;
  const { entities, totalPage, actualPage, search_value } = useSelector((state: any) => state.videos);


  if (query_search === "") {
    router.push("/");
  }

  const fetchVideos = async () => {
    if (entities.length === 0) {
      let response = await axios.post("http://localhost:8000/videos", {
        search_value: query_search,
      })
      setDataVideos(response.data)
    } else {
      setDataVideos({
        videos: entities,
        totalPage,
        actualPages: actualPage,
        query_search: search_value
      });
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [actualPage, totalPage])

  return (
    <div className="mt-20">
      <div className="ml-56">
        <p >
          <span className="text-xl font-bold">Results for: </span>
          <span className="text-xl font-light">
            {query_search}
          </span>
        </p>
      </div>
      <ul>
        <Results videos={dataVideos.videos}></Results>
      </ul>
      <div>
        <PageNavigation
          allVideos={false}
          search_query={query_search}
          actualPage={dataVideos.actualPages}
          lastPage={dataVideos.totalPage}></PageNavigation>
      </div>
    </div>
  )
}

export default Search;
