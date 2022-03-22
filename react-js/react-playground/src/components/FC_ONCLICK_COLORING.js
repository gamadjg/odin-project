import React, { useState, useEffect } from "react";

const FC_ONCLICK_COLORING = () => {
	const [color, setColor] = useState("black");

	useEffect(() => {
		const changeOnClick = () => {
			if (color === "black") setColor("red");
			else setColor("black");
		};

		document.addEventListener("click", changeOnClick);

		return () => {
			document.removeEventListener("click", changeOnClick);
		};
	}, [color]);

	return (
		<div>
			<div
				id="myDiv"
				style={{
					color: "white",
					width: "100px",
					height: "100px",
					position: "absolute",
					left: "50%",
					top: "50%",
					backgroundColor: color,
				}}
			>
				This div can change color. Click on me!
			</div>
		</div>
	);
};

export default FC_ONCLICK_COLORING;
