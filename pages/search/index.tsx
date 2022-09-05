import type { NextPage } from "next";
import { useRouter } from "next/router";
import Navbar from "../../components/navbar";

const Search: NextPage = () => {
  const router = useRouter();
  const { query_search } = router.query;

  if (query_search === "") {
    router.push("/");
  }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <p>result for:{query_search}</p>
      </div>
      <ul>
        <li>1 result</li>
        <li>2 result</li>
        <li>3 result</li>
      </ul>
    </div>
  )
}

export default Search;
