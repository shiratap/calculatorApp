import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*
	Wrapping react app with strict mode. Rendering that to the body of index.html.
*/

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
