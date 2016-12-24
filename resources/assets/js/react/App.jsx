// App.jsx 
// Conditionally displays Auth.js or Mosu.js

import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './auth/Auth';
import Mosu from './Mosu';
import InspirationBox from './InspirationBox';
import Navbar from './Navbar';

let page, hasToken;

/* If API_TOKEN is undefined, display login*/
if (!localStorage.getItem("api_token")) {
    page = <Auth />;
} else {
    page = 	<Mosu url="/api/v1/jobapplications" pollInterval="2000" />;
}

ReactDOM.render(
	<div>
		<Navbar />
		{ !hasToken ?
			<div className="container__mosu">
				<InspirationBox />
			</div> 
      : null
		}
		{ page }
	</div>
	,
	document.getElementById('app')
);