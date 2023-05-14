import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// const elem = <h2>Hello World</h2>;
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World');
// 1-й параметр тег, 2-й парам. класс, 3-й парам. текст
const text = 'Hello World';

const elem = (
	<div>
		<h2>Текст: {text}</h2>
		{/* Примитивные типы данных */}
		{/* Нельзя помещать объекты new Date(), вернется строка [object object]; */}
		
		<input type="text" />
		<label htmlFor="">
			<button tabIndex='0'>Click Me</button>
		</label>
		
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	elem
);