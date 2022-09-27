import type { NextPage, NextPageContext } from "next";

import axios from "axios";
import FileDownload from "js-file-download";

// components
import { LionPlayer } from "lion-player";
import Recomendations from "../../components/recomendations";
import { Videos } from "../../components/results_videos";

// styles
import 'lion-player/dist/lion-skin.min.css'

interface Video {
  id_video?: string;
  path_stream: string;
  path_video: string;
  path_image: string;
  title: string;
  description: string;
}

interface Props {
  video?: Video;
  recomendations: Videos[]
}

const Watch: NextPage<Props> = ({ video, recomendations }) => {

  const downloadVideo = (fileUrl: string) => {

    try {
      axios({
        method: 'GET',
        url: fileUrl,
        responseType: 'blob',
      }).then((res) => {
        FileDownload(res.data, "video.mp4");
      })

    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <div className="mt-24 flex flex-row">
      <div className="basis-4/6">
        <ul>
          <li>
            <LionPlayer
              height={650}
              width={600}
              src={`http://localhost:8000/${video?.path_stream}`}
            ></LionPlayer>
          </li>
          <li className="mt-5 ml-20">
            <h2 className="text-xl ">{video?.title}</h2>
            <div className="mt-5 mr-12 border-solid border-t-2 border-slate-500/30 pt-5">
              <h3 className="text-sm text-gray-200/70">description</h3>
              <p>{video?.description}</p>
            </div>
          </li>
          <li className="mt-5 ml-20">
            <button
              className="bg-slate-700/50 w-28 cursor-pointer h-10 transition-all duration-150 hover:bg-slate-700/80"
              onClick={() => downloadVideo(`http://localhost:8000/${video?.path_video}`)}
            >
              download
            </button>
          </li>
        </ul>
      </div>
      <div className="basis-2/6 pr-10">
        <h1 className="text-lg font-semibold border-b-2 border-solid border-slate-700/50 pb-3">Recomendations</h1>
        <Recomendations videos={recomendations}></Recomendations>
      </div>
    </div>
  );
};

interface Context extends NextPageContext {
  query: {
    idVideo: string
  }
}

Watch.getInitialProps = async (ctx: Context) => {
  var { idVideo } = ctx.query;
  const video = await axios.get(`http://localhost:8000/video/${idVideo}`);
  const recomendations = await axios.get("http://localhost:8000/recomendations")
  return { video: video.data, recomendations: recomendations.data };
};

export default Watch;
