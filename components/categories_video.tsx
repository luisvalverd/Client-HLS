import React from "react";
import Link from "next/link";

// interfaces 
import { Category } from "../interfaces";

interface Props {
  categories: Category[],
}

const CategoriesVideos: React.FC<Props> = (props: Props) => {

  const listCategories = props.categories;

  if (listCategories.length === 0) {
    return <></>
  }

  const itemsCategories = listCategories.map((item) => {
    return (
      <li key={item.id_category}>
        <Link href="#">
          <p>{item.name}</p>
        </Link>
      </li>
    )
  })

  return (
    <div>
      <ul>
        {itemsCategories}
      </ul>
    </div>
  )
}

export default CategoriesVideos;
