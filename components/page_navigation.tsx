import React from "react";

// redux 
import { fetchFindVideos } from "../store/slices/videos";
import { useDispatch } from "react-redux";

interface Props {
  actualPage: number;
  lastPage: number;
  search_query: string;
}

const PageNavigation: React.FC<Props> = (props: Props) => {

  const dispatch = useDispatch();
  //change page
  const nextPage = () => {
    dispatch(fetchFindVideos({ name: props.search_query, page: props.actualPage + 1 }))
  }

  const lastPage = () => {
    dispatch(fetchFindVideos({ name: props.search_query, page: props.actualPage - 1 }))
  }

  // validate if need next or last btn to change page
  const isLastPage = () => {
    if (props.actualPage < props.lastPage) {
      return (
        <li>
          <button onClick={() => nextPage()}>next</button>
        </li>
      )
    }
    return <></>
  }

  const isInitialPage = () => {
    if (props.actualPage > 1) {
      return (
        <li>
          <button onClick={() => lastPage()}>last</button>
        </li>
      )
    }
    return <></>
  }

  return (
    <div>
      <ul>
        {isInitialPage()}
        {isLastPage()}
      </ul>
    </div>
  )
}

export default PageNavigation;
