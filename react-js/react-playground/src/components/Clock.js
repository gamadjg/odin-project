import React from "react";

// Clock as a class component
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	// componentDidMount runs after the component return is rendered to the DOM
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}
	//
	//componentWillUnmount(clearInterval(this.timerID));

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<h2>It is currently {this.state.date.toLocaleTimeString()}</h2>
			</div>
		);
	}
}

/*
// Clock as a functional component
const Clock = () => {
	const date = useState(0);

	return (
		<div className="Clock">
			<h1>Hello World!</h1>
			<h2>It is currently {state.Date.toLocaleTimeString}</h2>
		</div>
	);
};
*/
export default Clock;
