import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.profile__post}>
            <span className={classes.profile__dot}></span>
            <span>{props.message}</span>
        </div>
    )
};

export default Post;
