App.Views.Introduction = React.createClass({

	render: function(){
		return (
			<div className="
		        col-xs-12 
		        col-md-5 col-md-offset-1 
		        col-lg-4 col-lg-offset-1
		        container__introduction-left
		        tac
		        ">
				<h3 className="heading__tagline heading__tagline--bold">Job hunting sucks.</h3>
				<h3 className="heading__tagline">Mosu makes it suck like 5% less.</h3>
		        <img className="img img__mosu" 
		        src="/img/mosu-med.png" alt="Mosu Logo"/>
			</div>
		);
	}
});