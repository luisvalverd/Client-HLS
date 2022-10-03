import type { NextPage, NextPageContext } from "next"
import { useEffect, useState } from "react";
import axios from "axios";

// redux
import { useSelector } from "react-redux";

// components
import Results from "../../components/results_videos";
import PageNavigation from "../../components/page_navigation";

// interfaces
import { Video } from "../../interfaces";

interface Props {
  videos: Video[];
  totalPages: number;
  actualPage: number;
}

const AllVideos: NextPage<Props> = ({videos, totalPages, actualPage}) => {

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold">All Videos</h2>
      </div>
      <div>
        <Results videos={videos}></Results>
      </div>
      <div>
        <PageNavigation
          actualPage={actualPage}
          totalPages={totalPages}
          url={"/allVideos"}
          query_search={""}
          allVideos={true}
        ></PageNavigation>
      </div>
    </div>
  )
}

interface Context extends NextPageContext {
  query: {
    page: string;
  }
}

AllVideos.getInitialProps = async (ctx: Context) => {
  var { page } = ctx.query;
  if (!page) {
    page = "1";
  }
  const response = await axios.get(`http://localhost:8000/all-videos?page=${page}`)
  return {
    actualPage: response.data.actualPage,
    totalPages: response.data.totalPages,
    videos: response.data.videos,
  };
}

export default AllVideos;
