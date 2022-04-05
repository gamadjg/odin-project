import React, { useState, useEffect } from "react";

const CVForm = ({
	setFirstName,
	setLastName,
	setEmail,
	setPhone,
	setSchool,
	setDegree,
	setSchoolDuration,
	setCompany,
	setPosition,
	setTasks,
	setDateWorked,
}) => {
	//const [formSubmit, setFormSubmit] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		//setFormSubmit(true);
		console.log("form submitted");
	};

	const propField = (fieldName, event) => {
		// General Information: First Name, Last Name, Email, Phone number
		if (fieldName === "firstNameInput") {
			setFirstName(event.target.value);
		} else if (fieldName === "lastNameInput") {
			setLastName(event.target.value);
		} else if (fieldName === "emailInput") {
			setEmail(event.target.value);
		} else if (fieldName === "phoneInput") {
			setPhone(event.target.value);
		}

		// Educational experience: School, Title of study, Date of study)
		else if (fieldName === "schoolInput") {
			setSchool(event.target.value);
		} else if (fieldName === "degreeInput") {
			setDegree(event.target.value);
		} else if (fieldName === "schoolDurationInput") {
			setSchoolDuration(event.target.value);
		}

		// Work Experience: Company name, Position, Main tasks of your jobs, Date from/ to worked
		else if (fieldName === "companyInput") {
			setCompany(event.target.value);
		} else if (fieldName === "positionInput") {
			setPosition(event.target.value);
		} else if (fieldName === "tasksInput") {
			setTasks(event.target.value);
		} else if (fieldName === "dateWorkedInput") {
			setDateWorked(event.target.value);
		}
	};

	const renderField = (fieldName, fieldText, fieldType) => {
		return (
			<div>
				<label htmlFor={fieldName}>{fieldText}</label>
				<input
					type={fieldType}
					id={fieldName}
					name={fieldName}
					onChange={(event) => {
						propField(fieldName, event);
					}}
				/>
			</div>
		);
	};

	return (
		<form onSubmit={handleSubmit}>
			{renderField("firstNameInput", "First Name", "text")}
			{renderField("lastNameInput", "Last Name", "text")}
			{renderField("emailInput", "Email", "email")}
			{renderField("phoneInput", "Telephone", "tel")}
			{renderField("schoolInput", "Telephone", "text")}
			{renderField("degreeInput", "Telephone", "text")}
			{renderField("schoolDurationInput", "From/To", "date")}
			{renderField("companyInput", "Current job", "text")}
			{renderField("positionInput", "Position", "text")}
			{renderField("tasksInput", "Main tasks", "text")}
			{renderField("dateWorkedInput", "From/To", "date")}

			<input type={"submit"} value={"Submit"} />
		</form>
	);
};

export default CVForm;
