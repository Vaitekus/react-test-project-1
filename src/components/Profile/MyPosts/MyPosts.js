import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
  let postsElements = props.posts.map( (post, index) => <Post message={post.text} key={index}/>);
  let newPostElement = React.createRef();

  let addPost = (event) => {
    let text = newPostElement.current.value;
    event.preventDefault();

    props.addPost(text);
  }

    return (
        <div className={classes.profile__edit}>
            <div className={classes.profile__title}>
                <h2>My posts</h2>
            </div>
            <form onSubmit={(e) => addPost(e)}>
                <textarea ref={newPostElement} cols="30" rows="10"></textarea>
                <input className={classes.profile__button + ' button'} type="submit" value="Send"/>
            </form>
            <div>
              { postsElements }
            </div>
        </div>
    )
};

export default MyPosts;
