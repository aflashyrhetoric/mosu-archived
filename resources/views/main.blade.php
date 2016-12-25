<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>Mosu.IO</title>
	<link rel="icon" 
      type="image/png" 
      href="/favicon.png">


    <!-- Tether Bootstrap JS component -->
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/css/tether.min.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
	<link rel="stylesheet" href="{{ url('bower_components/normalize.css/normalize.css') }}">
	<link rel="stylesheet" href="{{ url('css/app.css') }}">
	{{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"> --}}

</head>
<body>

	<!-- MOSU APP -->
	<div id="app"></div>


{{-- 	<!-- React -->
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
	Redux
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-redux/4.4.5/react-redux.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.5.2/redux.min.js"></script>
 --}}
	<!-- Google WebFonts -->
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
	<!-- jQuery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.js"></script>
	{{-- <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>  --}}

	  <!-- Twitter Bootstrap --> 
	  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
	<!-- Bootstrap file for the app, not Twitter Bootstrap -->
	{{-- <script src="{{ url('js/bootstrap.js') }}"></script> --}}
	<script type="text/javascript" src=" {{ url('js/app.js') }} "></script>
	<!-- Assorted Scripts -->	
	{{-- <script type="text/javascript" src="{{ url('js/scripts.js') }}"></script> --}}

	<!-- Tracking Code -->
	<script>
	  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  // })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  // ga('create', 'UA-80812351-1', 'auto');
	  // ga('send', 'pageview');

	</script>
{{-- 	<script src="https://use.typekit.net/mqi8rfr.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
 --}}</body>
</html>