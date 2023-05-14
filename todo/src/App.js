import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello World</h2>
}

function Btn() {
	// const res = () => {
	// 	return 'Log In';
	// }
	const text = 'Log In';
	const logged = true;

	return <button>{logged ? 'Enter' : text }</button>
}

class Field extends Component {
	render() {
		const holder = 'Enter Here';
		const styleField = {
			width: 300 + 'px'
		}
		return <input 
					placeholder={holder} 
					type='text' 
					style={styleField}/>
	}
}

function App() {
	return (
		<div className="App">
			<StrictMode>
				<Header/>
			</StrictMode>
			<Field/>
			<Btn/>
		</div>
	);
}

export {Header};
export default App;
