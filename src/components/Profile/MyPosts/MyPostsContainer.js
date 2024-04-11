import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
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
    updateNewPostText: (text) => {
      dispatch(updatePostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(propsItems, callbackItems)(MyPosts)

export default MyPostsContainer;
