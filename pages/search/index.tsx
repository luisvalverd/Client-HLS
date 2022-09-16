import type { NextPage } from "next";
import { useRouter } from "next/router";

// redux
import { useSelector } from "react-redux";

// components
import Results from "../../components/results_videos";
import PageNavigation from "../../components/page_navigation";
import { useEffect } from "react";

const Search: NextPage = () => {
  const router = useRouter();
  var query_search: any = router.query.query_search;
  const { entities, totalPage, actualPage, search_value} = useSelector((state: any) => state.videos);

  if (query_search === "") {
    router.push("/");
  }

  if (query_search?.includes("-")) {
    query_search = query_search.replace("-", " ");
  }

  return (
    <div>
      <div>
        <p>result for:{query_search}</p>
      </div>
      <ul>
        <Results videos={entities}></Results>
      </ul>
      <div>
        <PageNavigation search_query={search_value} actualPage={actualPage} lastPage={totalPage}></PageNavigation>
      </div>
    </div>
  )
}

export default Search;
