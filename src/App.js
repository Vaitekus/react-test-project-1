import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Navbar friends={this.props.state.navbarReducer.friends}/>
        <div className='content'>
          <Routes>
            <Route element={<ProfileContainer store={this.props.store} />} path="/profile/:id?" />
            <Route element={<DialogsContainer store={this.props.store} />} path="/dialogues" />
            <Route element={<News />} path="/news" />
            <Route element={<Music />} path="/music" />
            <Route element={<Settings />} path="/settings" />
            <Route element={<UsersContainer />} path="/users" />
            <Route element={<LoginContainer />} path="/login" />
          </Routes>
        </div>
      </div>
    );
  }
}
// const App = (props) => {
//   return (
//     <div className="wrapper">
//       <HeaderContainer />
//       <Navbar friends={props.state.navbarReducer.friends}/>
//       <div className='content'>
//         <Routes>
//           <Route element={<ProfileContainer store={props.store} />} path="/profile/:id?" />
//           <Route element={<DialogsContainer store={props.store} />} path="/dialogues" />
//           <Route element={<News />} path="/news" />
//           <Route element={<Music />} path="/music" />
//           <Route element={<Settings />} path="/settings" />
//           <Route element={<UsersContainer />} path="/users" />
//           <Route element={<LoginContainer />} path="/login" />
//         </Routes>
//       </div>
//     </div>
//   );
// };

const mapStateToProps = (state) =>  {
  return {
    initialized : state.appReducer.initialized
  }
}
export default connect(mapStateToProps, {initializeApp})(App);
