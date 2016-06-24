<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Mosu.IO</title>

	<link rel="stylesheet" href="{{ url('bower_components/normalize.css/normalize.css') }}">
	<link rel="stylesheet" href="{{ url('css/app.css') }}">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
	<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js"></script> -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>
<body>
	<div id="app"></div>

	<!-- Bootstrap file for the app, not for Twitter Bootstrap -->
	<script src="{{ url('js/bootstrap.js') }}"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script type="text/babel" src="{{ url('js/react/Navbar.js') }}"></script>
	<script type="text/babel" src="{{ url('js/react/NewApplicationForm.js') }}"></script>
	<script type="text/babel" src="{{ url('js/react/ModifyApplicationForm.js') }}"></script>
	<script type="text/babel" src="{{ url('js/react/InspirationBox.js') }}"></script>
	<script type="text/babel" src="{{ url('js/react/ApplicationItem.js') }}"></script>
	<script type="text/babel" src="{{ url('js/react/ApplicationList.js') }}"></script>
	<script type="text/babel" src="{{ url('js/react/Mosu.js') }}"></script>
	<script type="text/babel" src="{{ url('js/react/Error.js') }}"></script>
	<script type="text/babel" src="{{ url('js/react/App.js') }}"></script>
	<script src="https://use.typekit.net/mqi8rfr.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
</body>
</html>