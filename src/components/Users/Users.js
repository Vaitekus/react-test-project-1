import React from "react";
import User from "./User/User";
import Pagination from "../common/Pagination/Pagination";

const Users = (props) => {
  return (
    <div>
      <Pagination currentPage={props.currentPage} totalItemsCount={props.usersCount} pageSize={props.pageSize} changePage={props.changePage} />

      {props.users.map((user, index) => <User key={index} user={user} toggleFollowButton={props.toggleFollowButton}/>)}
      <button>More Users</button>
    </div>
  )
}

export default  Users;
