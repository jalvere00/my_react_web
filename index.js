import ReactDOM from "react-dom";
import React from 'react';

import Header from './module/Header';
import Body from './module/Body';
import Footer from './module/Footer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin(); //needed for Material-UI

ReactDOM.render(
	<MuiThemeProvider>
		<div>
			<Header/>
			<Body/>
			<Footer/>
		</div>
	</MuiThemeProvider>, 
	document.getElementById('main_container')
)