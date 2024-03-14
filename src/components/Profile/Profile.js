import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer posts={props.posts.posts} newText={props.posts.textareaText} dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;
