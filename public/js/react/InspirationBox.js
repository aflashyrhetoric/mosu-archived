App.Views.InspirationBox = React.createClass({
  getInitialState: function(){
  	return {};
  },
  getQuote: function(){

	var quotes = [
		[
			"I'm a big believer in persistence, don't be greedy and, above all, work hard. It's what keeps me going.", 
			"Caprice Bourret"
		],
		[
			"Ambition is the path to success. Persistence is the vehicle you arrive in.", 
			"Bill Bradley"
		]
	];
    // var x =  this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)][0];

	// return quotes[Math.floor(Math.random() * quotes.length];
	return "hi";
  },
  render: function() {
    return (
      <div className="inspiration-box jumbotron">
      	<p class="quote-text">
			"I'm a big believer in persistence, don't be greedy and, above all, work hard. It's what keeps me going.", 
      	</p>
      	<p class="quote-author">
			"Caprice Bourret"
      	</p>
      </div>
    );
  }
});