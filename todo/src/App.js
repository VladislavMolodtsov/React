import {Component} from 'react';


import './App.css';

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			position: ''
		}
		// this.nextYear = this.nextYear.bind(this); // Мы обращаемся к экземпляру класса через свойство this.nextYear
	}

	nextYears = () => {
		this.setState(state => ({ // Мы передаем callback func, который возвращает новай объект состояния. state - это текущий объект состояния
			years: state.years + 1
		}))
	}

	// При использовании обработчиков события контекст теряется, это происходит потому что ф-ия commitInputChange вызывается внутри другой ф-ии render следовательно this становится undefined
	// function commitInputChange в вызове ф-ии onChange вызовет undefined
	commitInputChange = (e, color) => {
		console.log(color)
		this.setState({
			position: e.target.value
		})
	}

	render() {
		const {name, surname, link} = this.props;
		const {years, position} = this.state;

		return (
			<div>
				<button onClick={this.nextYears}>+++</button>
				<h1>
					My name is {name}, surname - {surname},
					age - {years}, 
					position - {position}
				</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Enter form</span>
					<input type='text' onChange={(e) => this.commitInputChange(e, 'some color')} />
				</form>
			</div>
		)
	}
	
}

function App() {
	return (
		<div className="App">
			<WhoAmI name={() => {return 'John'}} surname='Smith' link='facebook.com'/>
			<WhoAmI name={() => {return 'John'}} surname='Smith' link='facebook.com'/>
		</div>
	)
}

export default App;