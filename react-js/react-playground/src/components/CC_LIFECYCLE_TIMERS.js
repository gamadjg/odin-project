import React from "react";

class CC_LIFECYCLE_TIMERS extends React.Component {
	// First thing to run before any other lifecycle methods
	constructor() {
		super();
		// Setting initial state
		this.state = {
			date: new Date(),
		};
	}

	// Runs immediately after mounting the component and running the constructor
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ date: new Date() });
		}, 1000);
	}

	componentWillUnmount() {
		console.log("unmounted");
		clearInterval(this.interval);
	}

	// Runs after componentDidMount
	render() {
		return (
			<div>
				<h1>{this.state.date.toLocaleTimeString()}</h1>
			</div>
		);
	}
}

export default CC_LIFECYCLE_TIMERS;
