import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

// redux
import { fetchFindVideos } from "../store/slices/videos";
import { useDispatch } from "react-redux";

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
    let query = value;
    dispatch(fetchFindVideos({ name: valueSearch, page: "1" }));
    router.push(`/search?query_search=${query.replace(" ", "-")}`);
  }

  const handleSearch = (event: any) => {
    setValueSearch(event.target.value);
  }

  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">VodTube</Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={valueSearch}
          onKeyPress={pressEnter}
        />
        <button
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
