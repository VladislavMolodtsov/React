import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';

// const elem = <h2>Hello World</h2>;
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World');
// 1-й параметр тег, 2-й парам. класс, 3-й парам. текст



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode> 
	{/* Это инструмент для обнаружения потенциальных проблем в вашем приложении
	он не рэндерит ничего*/}
	{/* Помогает обнаружить устаревшие конструкции */}
		<App/>
		<Header/>
	</StrictMode>
);

/* Компоненты - это блоки пользовательского интерфейса, которые могут иметь свое собственное 
поведения */
/* - это ф-ии которые могут возвращать JSX элементы */
/* Блоки которые часто повторяются */
/* Например шапка сайта, элементы этой шапки, навигацеонное меню, подвал, формы, кнопки, карточки
товаров, иконки соц. сетей и т. п.*/
/* У блоков может быть собственное состояние в этот конкретный момент */
/* Например выбраный зарание элемент с подсветкой, когда зашел на сайт */
/* Элементы - это структурные частички компонентов */
/* Компоненты - это самостоятельный структурные блоки нашего приложения, которые могут переиспользоваться
и переходить по другим файлам */