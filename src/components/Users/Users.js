import React from "react";
import User from "./User/User";
import classes from "./Users.module.css";

const Users = (props) => {
  let pageCount = Math.ceil(props.usersCount/props.pageSize);
  let pages = [];
  for(let index = 1; index <= pageCount; index++) {
    pages.push(index);
  }

  return (
    <div>
       <ul>
        {pages.map((page, index) => {
          return <li key={index} className={page === props.currentPage ? classes.selected : ''}
                     onClick={(event) => {props.changePage(page)}}>{page}</li>
        })}
      </ul>

      {props.users.map((user, index) => <User key={index} user={user} toggleFollowButton={props.toggleFollowButton}/>)}
      <button>More Users</button>
    </div>
  )
}

export default  Users;
