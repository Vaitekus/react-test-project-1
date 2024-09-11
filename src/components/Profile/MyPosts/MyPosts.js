import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validation";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);
const addPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} cols="30" rows="10" name="post" validate={[required, maxLength10]}/>
      <button className={classes.profile__button + ' button'} type="submit">Send</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm({form: "addPostForm"})(addPostForm);

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((post, index) => <Post message={post.text} key={index}/>);

  let addPost = (text) => {
    props.addPost(text.post);
  }
  console.log("render");
    return (
        <div className={classes.profile__edit}>
            <div className={classes.profile__title}>
                <h2>My posts</h2>
            </div>
            <AddPostReduxForm onSubmit={addPost}/>
            <div>
              { postsElements }
            </div>
        </div>
    )
})

export default MyPosts;
