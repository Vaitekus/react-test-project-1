import React, {useState} from "react";
import classes from "./Pagination.module.css";

const Pagination = ({currentPage, totalItemsCount, pageSize, changePage, portionSize = 10}) => {
  let pageCount = Math.ceil(totalItemsCount/pageSize);
  let pages = [];
  for(let index = 1; index <= pageCount; index++) {
    pages.push(index);
  }

  let portionCount = Math.ceil(pageCount/portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftNumber = (portionNumber -1) * portionSize + 1;
  let rightNumber = portionNumber * portionSize;

  return (
    <ul>
      { portionNumber > 1 &&
        <li>
          <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>
        </li>
      }

      {pages.filter((p) => p >= leftNumber && p <= rightNumber)
        .map((page, index) => {
          return <li key={index} className={page === currentPage ? classes.selected : ''}
                       onClick={(event) => {
                         changePage(page)
                       }}>{page}</li>
        })}
      { portionCount > portionNumber &&
        <li>
          <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>
        </li>
      }

    </ul>
  )
}

export default Pagination;
