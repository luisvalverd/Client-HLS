import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const [valueSearch, setValueSearch] = useState<any>();
  const router = useRouter();

  const search = (value: string) => {
    let query = value;
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
