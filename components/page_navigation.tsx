import React from "react";
import { useRouter } from "next/router";

interface Props {
  actualPage: number;
  totalPages: number;
  query_search?: string;
  nameCategory?: string;
  url: string;
  allVideos?: boolean;
}

const PageNavigation: React.FC<Props> = (props: Props) => {
  const router = useRouter();

  //change page
  const nextPage = () => {
    if (!props.nameCategory || props.nameCategory === "" && !props.allVideos) {
      router.push({
        pathname: props.url,
        query: {
          query_search: props.query_search,
          page: props.actualPage + 1,
        }
      });
    }

    if (!props.query_search || props.query_search === "" && !props.allVideos) {
      router.push({
        pathname: props.url,
        query: {
          nameCategory: props.nameCategory,
          page: props.actualPage + 1,
        }
      });
    }

    if (props.allVideos) {
      router.push({
        pathname: props.url,
        query: {
          page: props.actualPage + 1,
        }
      })
    }
  }

  const lastPage = () => {
    if (!props.nameCategory || props.nameCategory === "" && !props.allVideos) {
      router.push({
        pathname: props.url,
        query: {
          query_search: props.query_search,
          page: props.actualPage - 1,
        }
      });
    }

    if (!props.query_search || props.query_search === "" && !props.allVideos) {
      router.push({
        pathname: props.url,
        query: {
          nameCategory: props.nameCategory,
          page: props.actualPage - 1,
        }
      });
    }

    if (props.allVideos) {
      router.push({
        pathname: props.url,
        query: {
          page: props.actualPage - 1,
        }
      })
    }
  }

  // validate if need next or last btn to change page
  const isLastPage = () => {
    if (props.actualPage < props.totalPages) {
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
      <ul className="flex flex-row">
        {isInitialPage()}
        {isLastPage()}
      </ul>
    </div>
  )
}

export default PageNavigation;
