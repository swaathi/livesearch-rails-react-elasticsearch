var Song = React.createClass({
	render () {
		return (
			<div>
		        <h4>{ this.props.artist } sang:</h4>
		        <p>{ this.props.name }</p>
		    </div>
			)
	}
});