import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from 'react-router-dom'

import App from './components/App/App'
import AppWithAsync from './components/App/AppWithAsync'
import AppWithAxios from './components/App/AppWithAxios'
import AppWithQ from './components/App/AppWithQ'

import * as serviceWorker from './serviceWorker'

import './index.css'

ReactDOM.render((
	<Router>
		<Switch>
			<Route path="/axios" component={AppWithAxios} />
			<Route path="/q" component={AppWithQ} />
			<Route path="/async" component={AppWithAsync} />
			<Route path="/" component={App} />
		</Switch>
		<nav>
			<ul>
				<li>
					<Link to="/">Native</Link>
				</li>
				<li>
					<Link to="/async">Async / Await</Link>
				</li>
				<li>
					<Link to="/q">Q Library</Link>
				</li>
				<li>
					<Link to="/axios">Axios Library</Link>
				</li>
			</ul>
		</nav>
	</Router>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
