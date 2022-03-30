import React, { useState, useEffect } from "react";

const HooksReview = () => {
	// Initializing the constructor
	const [count, setCount] = useState(0);
	const [btnValue, setBtnValue] = useState("Click");

	// React function method that watches the state values passed within the 2nd parameter array.
	// Runs AFTER the state value FINISHES updating.
	useEffect(() => {
		/* 
        Declare function that has to do stuff. In this case, we return immediately if count (state) is zero.
            if the count is a multiple of 5, then we call the setter function "setBtnValue" to update the btnValue to "Click Again"
            else btnValue is set to "Click". 
        */
		const renameBtn = () => {
			console.log(count);
			if (count === 0) return;
			if (count % 5 === 0) {
				setBtnValue("Click Again");
			} else {
				setBtnValue("Click");
			}
		};

		renameBtn();

		return () => {
			// Empty, just for example
		};
	}, [count]);

	// incrementCount is called onClick whenever the button is pressed
	const incrementCount = () => {
		// setCount is the setter function to update the state with count (current state) + 1
		setCount(count + 1);
	};

	return (
		<div>
			<div>{count}</div>
			<input type={"button"} value={btnValue} onClick={incrementCount} />
		</div>
	);
};

export default HooksReview;
