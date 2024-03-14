import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    props.dispatch(updatePostTextActionCreator(text));
  }

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts={props.posts} newText={props.newText}/>
    )
}

export default MyPostsContainer;
