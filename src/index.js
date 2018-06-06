import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Content from './components/Content';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/Content" component={Content} />
		</Switch>
	</HashRouter>,
 document.getElementById('root'));
registerServiceWorker();
