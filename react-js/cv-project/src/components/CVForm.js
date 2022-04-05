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

	const propField = (formField, event) => {
		console.log("test");
		if (formField === "firstName") {
			setFirstName(event.target.value);
		}
	};

	const getFieldData = (renderType) => {
		if (renderType === "firstName") {
			return ["firstName", "First Name", "text"];
		}
	};

	const renderField = (renderType) => {
		let [fieldName, fieldText, fieldType] = getFieldData(renderType);

		return (
			<div>
				<label htmlFor={fieldName}>{fieldText}</label>
				<input
					type={fieldType}
					id={fieldName}
					name={fieldName}
					onChange={(event) => {
						propField(renderType, event);
					}}
				/>
			</div>
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormSubmit(true);
	};

	return (
		<form onSubmit={handleSubmit}>
			{renderField("firstName")}
			{/*
			<div>
				<label htmlFor={"firstNameInput"}>First Name</label>
				<input
					type={"text"}
					id={"firstNameInput"}
					name={"firstNameInput"}
					onChange={(event) => {
						setFirstName(event.target.value);
						setLocalFirstName(event.target.value);
					}}
				/>
			</div>
			*/}
			<div>
				<label htmlFor={"lastNameInput"}>Last Name</label>
				<input
					type={"text"}
					id={"lastNameInput"}
					name={"lastNameInput"}
					onChange={(event) => {
						setLastName(event.target.value);
						setLocalLastName(event.target.value);
					}}
				/>
			</div>
			<input type={"submit"} value={"Submit"} />
		</form>
	);
};

export default CVForm;
