import React, { useState, useEffect } from "react";

const CVForm = ({ setFirstName, setLastName }) => {
	const [localFirstName, setLocalFirstName] = useState("");
	const [localLastName, setLocalLastName] = useState("");
	const [formSubmit, setFormSubmit] = useState(false);

	useEffect(() => {
		if (formSubmit) {
			console.log();
			const person = { localFirstName, localLastName };
			console.log(person);
		}
	}, [formSubmit]);

	const fnChange = (event) => {
		setFirstName(event.target.value);
		setLocalFirstName(event.target.value);
	};

	const lnChange = (event) => {
		setLastName(event.target.value);
		setLocalLastName(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormSubmit(true);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor={"firstNameInput"}>First Name</label>
				<input
					type={"text"}
					id={"firstNameInput"}
					name={"firstNameInput"}
					onChange={fnChange}
				/>
			</div>

			<div>
				<label htmlFor={"lastNameInput"}>Last Name</label>
				<input
					type={"text"}
					id={"lastNameInput"}
					name={"lastNameInput"}
					onChange={lnChange}
				/>
			</div>

			<input type={"submit"} value={"Submit"} />
		</form>
	);
};

export default CVForm;
