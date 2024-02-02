import {NavLink} from "react-router-dom";
import classes from "./Name.module.css";

const Name = (props) => {
  let path = "/dialogues/" + props.id;
  return (
    <li className={classes.messages__name}>
      <NavLink to={path} className={({isActive}) => isActive ? classes.active : ""}>{props.name}</NavLink>
    </li>
  )
};

export default Name;
