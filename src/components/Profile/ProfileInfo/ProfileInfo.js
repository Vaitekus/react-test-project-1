import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.profile__info}>
      {/*<img className={classes.profile__banner}*/}
      {/*     src="https://washington.org/sites/default/files/styles/generic_hero_banner_1920_x_820/public/old-town-alexandria-king-street_credit-k-summerer-visit-alexandria.jpg.webp?itok=JB3y1FeX"*/}
      {/*     alt=""/>*/}
      <img className={classes.profile__avatar} width="150" height="150"
           src={props.profile.photos.small} alt=""/>
      <div className={classes.profile__description}>
        <h2>{props.profile.fullName}</h2>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        { props.profile.lookingForAJobDescription ? <p>{props.profile.lookingForAJobDescription}</p> : null}
        { props.profile.contacts.facebook ? <p>{props.profile.contacts.facebook}</p> : null}
        { props.profile.contacts.twitter ? <p>{props.profile.contacts.twitter}</p> : null}
        { props.profile.contacts.github ? <p>{props.profile.contacts.github}</p> : null}
        { props.profile.contacts.youtube ? <p>{props.profile.contacts.youtube}</p> : null}
      </div>
    </div>
  )
};

export default ProfileInfo;
