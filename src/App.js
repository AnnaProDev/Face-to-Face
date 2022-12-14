import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css"
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {

  return (
	<BrowserRouter>
    <div className="container">
      <Navbar />
      <div className="container_content">
		<Routes>
			<Route path="/profile" 
			element={<Profile 
			profilePage={props.state.profilePage} 
			dispatch={props.dispatch}/>}/>
			<Route path="/messages" 
			element={<Dialogs 
			state={props.state.dialogsPage} 
			dispatch={props.dispatch}
			/>}/>
			<Route path="/news" element={<News />}/>
			<Route path="/music" element={<Music />}/>
			<Route path="/settings" element={<Settings />}/>
		</Routes>
      </div>
    </div>
	 </BrowserRouter>
  );
}

export default App;
