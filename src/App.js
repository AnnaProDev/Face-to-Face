import { Route, Routes} from "react-router-dom"
import "./App.css"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

function App() {

  return (

    <div className="container">
	 	<HeaderContainer />
      <Navbar />
      <div className="container_content">
		<Routes>
		<Route path="/profile" element={<ProfileContainer />}>
        <Route path=":userId" element={<ProfileContainer />} />
      </Route>
			<Route path="/login" element={<LoginPage />}/>	
			<Route path="/messages" element={<DialogsContainer />}/>	
			<Route path="/news" element={<News />}/>
			<Route path="/users" element={<UsersContainer />}/>
			<Route path="/settings" element={<Settings />}/>
		</Routes>
      </div>
    </div>

  );
}

export default App;
