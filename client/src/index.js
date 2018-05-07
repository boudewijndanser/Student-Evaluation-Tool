import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';

//import { Provider } from 'react-redux'
//import store from './store'
//<Provider store={store}> </Provider>

import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles'
import './styling/index.css';
import { theme } from './styling/theme'

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
		</MuiThemeProvider>,
	document.getElementById('root')
)
registerServiceWorker()
