import { Route, Routes} from "react-router-dom"
import "./App.css"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

function App() {

  return (

    <div className="container">
      <Navbar />
      <div className="container_content">
		<Routes>
		<Route path="/profile" element={<ProfileContainer />}>
        <Route path=":userId" element={<ProfileContainer />} />
      </Route>
			<Route path="/messages" element={<DialogsContainer />}/>	
			<Route path="/news" element={<News />}/>
			<Route path="/music" element={<Music />}/>
			<Route path="/users" element={<UsersContainer />}/>
			<Route path="/settings" element={<Settings />}/>
		</Routes>
      </div>
    </div>

  );
}

export default App;
