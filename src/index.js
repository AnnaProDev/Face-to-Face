import store from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"


const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderEntireTree = () => {
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App 	/>
		</Provider>
	</BrowserRouter>)
};

rerenderEntireTree();
