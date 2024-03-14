import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
  let postsElements = props.posts.map( (post, index) => <Post message={post.text} key={index}/>);
  let newPostElement = React.createRef();

  let addPost = (event) => {
    event.preventDefault();
    props.addPost();
  }

  let updateTextareaText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

    return (
        <div className={classes.profile__edit}>
            <div className={classes.profile__title}>
                <h2>My posts</h2>
            </div>
            <form onSubmit={(e) => addPost(e)}>
                <textarea onChange={updateTextareaText} ref={newPostElement} value={props.newText} cols="30" rows="10" />
                <input className={classes.profile__button + ' button'} type="submit" value="Send"/>
            </form>
            <div>
              { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
