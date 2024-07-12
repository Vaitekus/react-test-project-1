import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let propsItems = (state) => {
  return {
    posts: state.profileReducer.posts,
    newText: state.profileReducer.newText
  }
}

let callbackItems = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPost(text))
    }
  }
}

const MyPostsContainer = connect(propsItems, callbackItems)(MyPosts)

export default MyPostsContainer;
