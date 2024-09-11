import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if(!profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profile__info}>
      <img className={classes.profile__avatar} width="150" height="150"
           src={profile.photos.small} alt=""/>
      <div className={classes.profile__description}>
        <h2>{profile.fullName}</h2>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        { profile.lookingForAJobDescription ? <p>{profile.lookingForAJobDescription}</p> : null}
        { profile.contacts.facebook ? <p>{profile.contacts.facebook}</p> : null}
        { profile.contacts.twitter ? <p>{profile.contacts.twitter}</p> : null}
        { profile.contacts.github ? <p>{profile.contacts.github}</p> : null}
        { profile.contacts.youtube ? <p>{profile.contacts.youtube}</p> : null}
      </div>
    </div>
  )
};

export default ProfileInfo;
