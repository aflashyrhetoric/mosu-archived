App.Views.InspirationBox = React.createClass({
  randomIndex: function(quoteBoxSize){
    return Math.floor((Math.random() * quoteBoxSize) + 1);
  },
  getQuote: function(){
    var quotes = [
        { 
          quote: "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.",
          author: "Elbert Hubbard"
        },
        { 
          quote: "Success is the result of perfection, hard work, learning from failure, loyalty, and persistence. ",
          author: "Colin Powell"
        },
        { 
          quote: "Paralyze resistance with persistence.",
          author: "Woody Hayes"
        },
        { 
          quote: "Quantity and persistence will get you the outcomes you need.",
          author: "James Altucher"
        },
        { 
          quote: "Choose a job you love, and you will never have to work a day in your life.",
          author: "Confucius"
        },
        { 
          quote: "The beginning is the most important part of the work.",
          author: "Plato"
        },
        { 
          quote: "Opportunities are usually disguised as hard work, so most people don't recognize them.",
          author: "Ann Landers"
        },
        { 
          quote: "“One important key to success is self-confidence. An important key to self-confidence is preparation.”",
          author: "Arthur Ashe"
        },
        { 
          quote: "Success consists of going from failure to failure without loss of enthusiasm.",
          author: "Winston Churchill"
        },
        { 
          quote: "Do one thing everyday that scares you.",
          author: "Eleanor Roosevelt"
        },
        { 
          quote: "Take risks: if you win, you will be happy; if you lose, you will be wise.",
          author: "Unknown"
        },
        { 
          quote: "Only those who dare to fail greatly can ever achieve greatly.",
          author: "Robert F. Kennedy"
        },
        { 
          quote: "Whenever you are asked if you can do a job, tell ‘em, ‘Certainly I can!’ Then get busy and find out how to do it.",
          author: "Theodore Roosevelt"
        }
    ];

    var randomNumber = this.randomIndex(quotes.length);
    var quote = quotes[randomNumber].quote;
    var author = quotes[randomNumber].author;

    return {
      quote: quote,
      author: author,
    };

  },
  componentDidMount: function() {
  },
  render: function() {
    var quote = this.getQuote();
    return (
      <div className="inspiration-box jumbotron">
        <p className="quote-text">
          { quote.quote }
        </p>
        <p className="quote-author">
          { quote.author }
        </p>
      </div>
    );
  }
});