import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css"
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
	<BrowserRouter>
    <div className="container">
      {/* <Header /> */}
      <Navbar />
      <div className="container_content">
		<Routes>
			<Route path="/profile" element={<Profile />}/>
			<Route path="/messages" element={<Dialogs />}/>
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
