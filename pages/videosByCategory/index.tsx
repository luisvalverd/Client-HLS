import type { NextPage, NextPageContext } from "next";
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
  nameCategory: string;
}

const VideosByCategory: NextPage<Props> = ({ totalPages, actualPage, videos, nameCategory }) => {

  return (
    <div className="mt-20">
      <div className="ml-56">
        <p >
          <span className="text-xl font-bold">Results for: </span>
          <span className="text-xl font-light">
            {nameCategory}
          </span>
        </p>
      </div>
      <div>
        <Results videos={videos}></Results>
      </div>
      <div>
        <PageNavigation
          actualPage={actualPage}
          totalPages={totalPages}
          url={"/VideosByCategory"}
          allVideos={false}
          nameCategory={nameCategory}
        ></PageNavigation>
      </div>
    </div>
  )
}

interface Context extends NextPageContext {
  query: {
    nameCategory: string;
    page: string;
  }
}

VideosByCategory.getInitialProps = async (ctx: Context) => {
  var { nameCategory, page } = ctx.query;
  if (!page) {
    page = `1`;
  }
  const response = await axios.get(`http://localhost:8000/videos-by-category/${nameCategory}?page=${page}`);
  return {
    totalPages: response.data.totalPages,
    actualPage: response.data.actualPage,
    videos: response.data.list,
    nameCategory,
  };
}

export default VideosByCategory;
