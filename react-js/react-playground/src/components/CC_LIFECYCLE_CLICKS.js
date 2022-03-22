import React from "react";
import "./../assets/cc_styles.css";

class CC_LIFECYCLE_CLICKS extends React.Component {
	constructor() {
		super();

		this.state = {
			A_count: 0,
			B_count: 0,
		};

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler = (e) => {
		e.preventDefault();
		this.setState({ B_count: this.state.B_count + 1 });
	};

	// Runs after componentDidMount
	render() {
		return (
			<div className="clicksContainer">
				<div>
					<h1>Click handler set as anonymous function within input button.</h1>
					<h1>{this.state.A_count}</h1>
					<input
						type="button"
						onClick={() => {
							this.setState({ A_count: this.state.A_count + 1 });
						}}
						value="Click"
					/>
				</div>
				<div>
					<h1>Click handler within "this" state called in js curly brackets</h1>
					<h1>{this.state.B_count}</h1>
					<input type="button" onClick={this.clickHandler} value="Click" />
				</div>
			</div>
		);
	}
}

export default CC_LIFECYCLE_CLICKS;
