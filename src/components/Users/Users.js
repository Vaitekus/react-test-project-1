import React from "react";
import User from "./User/User"


const Users = (props) => {
  let userElement = props.users.map((user, index) => <User key={index} user={user} toggle={props.toggleState} />);

  return (
    <div>
      {userElement}
      <button>More Users</button>
    </div>
  )
}

export default Users;
