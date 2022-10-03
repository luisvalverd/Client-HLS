import type { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
//import { useEffect, useState } from "react";
import axios from "axios";

// components
import Results from "../../components/results_videos";
import PageNavigation from "../../components/page_navigation";

// interfaces
import { Video } from "../../interfaces";

interface Props {
  totalPages: number;
  actualPage: number;
  videos: Video[];
  query_search: string;
}

const Search: NextPage<Props> = ({ totalPages, actualPage, videos, query_search }) => {
  /*
    const [dataVideos, setDataVideos] = useState({
      videos: [],
      totalPage: 1,
      actualPages: 1,
      query_search: ""
    });
    var query_search: any = router.query.query_search;
    const { entities, totalPage, actualPage, search_value } = useSelector((state: any) => state.videos);
  */

  const router = useRouter();
  if (query_search === "") {
    router.push("/");
  }
  /*
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
  */
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
        <Results videos={videos}></Results>
      </ul>
      <div>
        <PageNavigation
          allVideos={false}
          query_search={query_search}
          actualPage={actualPage}
          totalPages={totalPages}
          url={"/search"}
        ></PageNavigation>
      </div>
    </div>
  )
}

interface Context extends NextPageContext {
  query: {
    query_search: string;
    page: string;
  }
}

Search.getInitialProps = async (ctx: Context) => {
  var { query_search, page } = ctx.query;
  if (!page) {
    page = "1"
  }
  const response = await axios.post(`http://localhost:8000/videos?page=${page}`, {
    search_value: query_search,
  });
  return {
    totalPages: response.data.totalPages,
    actualPage: response.data.actualPage,
    videos: response.data.videos,
    query_search: query_search,
  };
}

export default Search;
