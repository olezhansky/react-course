import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';



const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" 
            render={ () => <Profile 
            profilePage={props.state.profilePage} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            />}/>
          <Route path="/dialogs" 
            render={ () => <Dialogs state={props.state.dialogsPage}/>} />
        </div>
      </div>
  );
}

export default App;
