import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React, {lazy} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer.js'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer.js'));

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
        <HeaderContainer/>
        <Navbar friends={this.props.state.navbarReducer.friends}/>
        <div className='content'>
          <Routes>
            <Route path="/profile/:id?" element={
                <React.Suspense fallback={<p>Loading...</p>}>
                  <ProfileContainer store={this.props.store}/>
                </React.Suspense>}
            ></Route>
            <Route path="/dialogues" element={
              <React.Suspense fallback={<p>Loading...</p>}>
                <DialogsContainer store={this.props.store}/>
              </React.Suspense>}
            ></Route>
            <Route element={<News/>} path="/news"/>
            <Route element={<Music/>} path="/music"/>
            <Route element={<Settings/>} path="/settings"/>
            <Route element={<UsersContainer/>} path="/users"/>
            <Route element={<LoginContainer/>} path="/login"/>
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>  {
  return {
    initialized : state.appReducer.initialized
  }
}

const AppHolder =  connect(mapStateToProps, {initializeApp})(App);

const AppContainer = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppHolder store={store} state={store.getState()} />
    </Provider>
  </BrowserRouter>
}


export default AppContainer;
