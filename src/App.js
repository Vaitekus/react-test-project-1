import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar friends={props.state.navbarList.friends}/>
      <div className='content'>
        <Routes>
          <Route element={<Profile posts={props.state.profilePage} dispatch={props.dispatch} />} path="/profile" />
          <Route element={<Dialogs dialogs={props.state.dialogsPage} dispatch={props.dispatch} />} path="/dialogues" />
          <Route element={<News />} path="/news" />
          <Route element={<Music />} path="/music" />
          <Route element={<Settings />} path="/settings" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
