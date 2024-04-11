import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar friends={props.state.navbarReducer.friends}/>
      <div className='content'>
        <Routes>
          <Route element={<Profile store={props.store} />} path="/profile" />
          <Route element={<DialogsContainer store={props.store} />} path="/dialogues" />
          <Route element={<News />} path="/news" />
          <Route element={<Music />} path="/music" />
          <Route element={<Settings />} path="/settings" />
          <Route element={<UsersContainer />} path="/users" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
