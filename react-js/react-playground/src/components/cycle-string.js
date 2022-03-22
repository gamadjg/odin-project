import React from "react";
import "./../assets/cc_styles.css";

class CycleString extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			font: "Helvetica",
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setNewFont();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	setNewFont() {
		let newFont = "Times New Roman";
		if (this.state.font === "Times New Roman") {
			newFont = "Helvetica";
		} else if (this.state.font === "Helvetica") {
			newFont = "Comicsansms";
		}
		//console.log("before set: " + this.state.font);
		this.setState({ font: newFont });
		//console.log("after set: " + this.state.font);
	}

	printWorld() {
		return <span style={{ fontFamily: this.state.font }}>world</span>;
	}

	render() {
		return <h1>Hello, {this.printWorld()}</h1>;
	}
}

export default CycleString;
