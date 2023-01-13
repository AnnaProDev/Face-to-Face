import { Route, Routes} from "react-router-dom"
import "./App.css"
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import React, { Suspense } from "react";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
		return <Preloader /> 
	}

  return (
    <div className="container">
	 	<HeaderContainer />
      <Navbar />
      <div className="container_content">
		<Suspense fallback={<div><Preloader/></div>}>
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
		</Suspense>
      </div>
    </div>
  );
}
};

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
});

export default connect(mapStateToProps, {initializeApp})(App);
