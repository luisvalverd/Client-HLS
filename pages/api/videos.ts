import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

async function findVideo(req: NextApiRequest, res: NextApiResponse) {
  let { query_search, page } = req.query;
  if (page === undefined) {
    page = "1";
  }
  console.log(query_search);

  let videos = await axios.post(`http://localhost:8000/videos?page=${page}`, {
    search_value: query_search
  })

  return res.json(videos.data);
}

export default findVideo;

