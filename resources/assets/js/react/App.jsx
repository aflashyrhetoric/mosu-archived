import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import InspirationBox from './InspirationBox.jsx';
import Mosu from './Mosu.jsx';
import Auth from './auth/Auth.jsx';

let page;
let hasToken;

// If API_TOKEN is undefined, display login
if (! localStorage.getItem("api_token")) {
	page = <Auth />;
	hasToken = true;
} else {
	// page = <Auth />
	page = 	<Mosu 
				url="/api/v1/jobapplications" 
				pollInterval="2000" /> ;
}

ReactDOM.render(
	(
		<div>
			<Navbar />
			{ !hasToken ? 
				<div className="container__mosu">
					<InspirationBox />
				</div> : null
			}
			{ page }
		</div>
	),
	document.getElementById('app')
);