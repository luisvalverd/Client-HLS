import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// redux
import { fetchFindVideos } from "../store/slices/videos";
import { useDispatch } from "react-redux";

// TODO: make user config login register and logout

const Navbar: React.FC = () => {
  const [valueSearch, setValueSearch] = useState<any>();
  const router = useRouter();
  const dispatch = useDispatch();

  const pressEnter = (event: any) => {
    if (event.key === "Enter") {
      search(valueSearch)
    }
  }

  const search = (value: string) => {
    dispatch(fetchFindVideos({ name: valueSearch, page: "1" }));
    router.push({
      pathname: "/search",
      query: {
        query_search: value
      }
    })
  }

  const handleSearch = (event: any) => {
    setValueSearch(event.target.value);
  }

  return (
    <div className="h-full flex justify-between px-10 items-center">
      <div>
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">
            VodTube
          </span>
        </Link>
      </div>
      <div className="w-2/6 h-10">
        <input
          type="text"
          className="px-4 h-full w-5/6 bg-slate-800/70 transition-all duration-150 focus:bg-slate-800 hover:bg-slate-800 outline-none"
          placeholder="Search..."
          onChange={handleSearch}
          value={valueSearch}
          onKeyPress={pressEnter}
        />
        <button
          className="backdrop-blur h-full bg-sky-400/20 w-20 transition-all duration-100 ease-in-out
          focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-sky-400
          hover:bg-sky-400/50
          "
          onClick={() => {
            if (valueSearch !== undefined) {
              search(valueSearch)
            }
          }}
          id="btn_search"
        >Search</button>
      </div>
      <div>
        <a href="#">User</a>
      </div>
    </div>
  );
}

export default Navbar;
