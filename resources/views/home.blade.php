<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <title>Mosu.IO</title>
        <link rel="icon"
            type="image/png"
            href="/favicon.png">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
            <link rel="stylesheet" href="{{ url('bower_components/normalize.css/normalize.css') }}">
            <link rel="stylesheet" href="{{ url('css/app.css') }}">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
            <script type="text/javascript" srjc="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
            <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js"></script> -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
            <body>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">
                                <p class="mosu-logo">MOSU v0.1.6</p>
                            </a>
                        </div>
                        <div class="pull-right">
                            <a
                            class="btn btn-secondary">Login</a>
                        </div>
                    </div>
                </nav>
                <div id="app">
                    <div class="container-fluid container__introduction">
                        <div class="row">
                            <div class="
                                col-xs-12
                                col-md-5 col-md-offset-1
                                col-lg-4 col-lg-offset-1
                                container__introduction-left
                                tac
                                ">
                                <h3 class="heading__tagline heading__tagline--bold">Job hunting sucks.</h3>
                                <h3 class="heading__tagline">Mosu makes it suck like 5% less.</h3>
                                <img class="img img__mosu"
                                src="/img/mosu-med.png" alt="Mosu Logo"/>
                            </div>
                            
                            <div class="
                                col-xs-12
                                col-md-5
                                col-lg-3 col-lg-offset-3
                                container__introduction-right
                                tac">
                                <h1 class="heading__join"> {  } </h1>
                                <div class="auth-signup">
                                    { formToBeUsed }
                                </div>
                                <br/>
                                <p>
                                    { prompt[0] +" "}
                                    <a onClick={this.toggleSignUpAndLogin}
                                    href="#">{ prompt[1] }</a></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12
                                    col-md-6
                                    col-lg-4 col-lg-offset-1
                                    ">
                                    <h1 class="display-4 tac">
                                    Track Your Data
                                    </h1>
                                    <ul class="list-group">
                                        <li class="list-group-item">Where you applied</li>
                                        <li class="list-group-item">What stage the application is in</li>
                                        <li class="list-group-item">Your notes on each company</li>
                                        <li class="list-group-item">More! Not much more, but still!</li>
                                    </ul>
                                </div>
                                <div class="col-xs-12
                                    col-md-6 col-md-offset-0
                                    col-lg-4 col-lg-offset-2
                                    ">
                                    <h1 class="display-4 tac">
                                    Random Goodies
                                    </h1>
                                    <ul class="list-group">
                                        <li class="list-group-item">Works on web & mobile!</li>
                                        <li class="list-group-item">Quotes for daily inspiration!</li>
                                        <li class="list-group-item">Better than pen & paper. Pen & Paper is basic.</li>
                                        <li class="list-group-item">Built w/ React, Bootstrap & Laravel!</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="alert alert-info tac">
                                    <p>Coded with love by Kevin Oh. Logo by Rebecca Choi.</p>
                                </div>
                            </div>
                        </div>
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
                        <!-- Bootstrap file for the app, not Twitter Bootstrap -->
                        <script src="{{ url('js/bootstrap.js') }}"></script>
                        <!-- Redux -->
                        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-redux/4.4.5/react-redux.min.js"></script>
                        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.5.2/redux.min.js"></script>
                        <!-- Mosu Auth Components -->
                        <script type="text/babel" src="{{ url('js/react/utils/Alert.js') }}"></script>
                        <script type="text/babel" src="{{ url('js/react/auth/Navbar.js') }}"></script>
                        <script type="text/babel" src="{{ url('js/react/auth/SignUp.js') }}"></script>
                        <script type="text/babel" src="{{ url('js/react/auth/Login.js') }}"></script>
                        <script type="text/babel" src="{{ url('js/react/auth/Form.js') }}"></script>
                        <script type="text/babel" src="{{ url('js/react/auth/Auth.js') }}"></script>
                        <!-- Tracking Code -->
                        <script>
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                        ga('create', 'UA-80812351-1', 'auto');
                        ga('send', 'pageview');
                        </script>
                        
                        <!-- Mosu Components -->
                        <script type="text/javascript" src="{{ url('js/scripts.js') }}"></script>
                        <script type="text/babel" src="{{ url('js/react/Navbar.js') }}"></script>
                        <script type="text/babel" src="{{ url('js/react/Introduction.js') }}"></script>
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
                    </div>
                </body>
            </html>