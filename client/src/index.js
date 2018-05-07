import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'

import { Provider } from 'react-redux'
import store from './collect/store'
import registerServiceWorker from './collect/registerServiceWorker'

//Styling
import './styling/index.css';
import { theme } from './styling/theme'
import { MuiThemeProvider } from 'material-ui-next/styles'

ReactDOM.render(
	<Provider store={store}>
	<MuiThemeProvider theme={theme}>
		<App />
		</MuiThemeProvider>
		</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
