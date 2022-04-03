import { useState } from "react";
import CVForm from "./CVForm";
import Preview from "./Preview";
import "../assets/Body.css";

const Body = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	return (
		<div className="siteBody">
			<CVForm setFirstName={setFirstName} setLastName={setLastName} />
			<Preview firstName={firstName} lastName={lastName} />
		</div>
	);
};

export default Body;
