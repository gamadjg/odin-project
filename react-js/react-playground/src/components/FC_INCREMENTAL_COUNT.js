import React, { useState } from "react";

const FC_INCREMENTAL_COUNT = () => {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<div>{count}</div>
			<input type="button" onClick={incrementCount} value="Click Me" />
		</div>
	);
};

export default FC_INCREMENTAL_COUNT;
