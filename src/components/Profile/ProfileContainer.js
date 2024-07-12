import Profile from "./Profile";
import React from "react";
import {
  getUserStatus,
  getUserData, updateUserStatus
} from "../../redux/profile-reducer";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {connect} from "react-redux";
// import {WithAuthRedirectComponent} from "../../hoc/AuthRedirect"
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.id;

    if(!userId) {
      //userId = 2;
      userId = this.props.userId;
    }
    this.props.getUserData(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
    )
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

let propsItems = (state) => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    userId: state.authReducer.userId
  }
}

export default compose(
  connect(propsItems, {getUserData, getUserStatus, updateUserStatus}),
  withRouter
  // , WithAuthRedirectComponent
) (ProfileContainer)
