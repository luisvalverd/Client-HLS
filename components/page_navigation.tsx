import React from "react";

// redux 
import { fetchFindVideos, fetchAllVideos } from "../store/slices/videos";
import { useDispatch } from "react-redux";

interface Props {
  actualPage: number;
  lastPage: number;
  search_query: string;
  allVideos?: boolean;
}

const PageNavigation: React.FC<Props> = (props: Props) => {

  const dispatch = useDispatch();
  //change page
  const nextPage = () => {
    if (!props.allVideos) {
      dispatch(fetchFindVideos({ name: props.search_query, page: props.actualPage + 1 }))
    } else {
      dispatch(fetchAllVideos(props.actualPage + 1));
    }
  }

  const lastPage = () => {
    if (!props.allVideos) {
      dispatch(fetchFindVideos({ name: props.search_query, page: props.actualPage - 1 }))
    } else {
      dispatch(fetchAllVideos(props.actualPage - 1));
    }
  }

  // validate if need next or last btn to change page
  const isLastPage = () => {
    if (props.actualPage < props.lastPage) {
      return (
        <li>
          <button
            className="h-10 w-28 transition-all duration-150 bg-slate-800/70 hover:bg-slate-700/90"
            onClick={() => nextPage()}
          >
            next
          </button>
        </li>
      )
    }
    return <></>
  }

  const isInitialPage = () => {
    if (props.actualPage > 1) {
      return (
        <li className="mr-6">
          <button
            className="h-10 w-28 transition-all duration-150 bg-slate-800/70 hover:bg-slate-700/90"
            onClick={() => lastPage()}
          >
            last
          </button>
        </li>
      )
    }
    return <></>
  }

  return (
    <div className="my-10 flex justify-center">
      <ul>
        {isInitialPage()}
        {isLastPage()}
      </ul>
    </div>
  )
}

export default PageNavigation;
