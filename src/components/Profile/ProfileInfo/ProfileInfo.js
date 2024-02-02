import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={classes.profile__info}>
      <img className={classes.profile__banner}
           src="https://washington.org/sites/default/files/styles/generic_hero_banner_1920_x_820/public/old-town-alexandria-king-street_credit-k-summerer-visit-alexandria.jpg.webp?itok=JB3y1FeX"
           alt=""/>
      <img className={classes.profile__avatar} width="150" height="150"
           src="https://www.reshot.com/preview-assets/icons/9DF6HBNLZX/cartoon-dog-9DF6HBNLZX.svg" alt=""/>
      <div className={classes.profile__description}>
        <h2>Name</h2>
        <p>Date of birth</p>
        <p>Education</p>
        <p>Web site</p>
      </div>
    </div>
  )
};

export default ProfileInfo;
