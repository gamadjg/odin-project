import React, { useState, useEffect } from "react";
import "../assets/CVForm.css";

const CVForm = ({
	setFirstName,
	setLastName,
	setEmail,
	setPhone,
	setSchool,
	setDegree,
	setSchoolDurationStart,
	setSchoolDurationEnd,
	setCompany,
	setPosition,
	setTasks,
	setWorkStartDate,
	setWorkEndDate,
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
		} else if (fieldName === "schoolDurationStartInput") {
			setSchoolDurationStart(event.target.value);
		} else if (fieldName === "schoolDurationEndInput") {
			setSchoolDurationEnd(event.target.value);
		}

		// Work Experience: Company name, Position, Main tasks of your jobs, Date from/ to worked
		else if (fieldName === "companyInput") {
			setCompany(event.target.value);
		} else if (fieldName === "positionInput") {
			setPosition(event.target.value);
		} else if (fieldName === "tasksInput") {
			setTasks(event.target.value);
		} else if (fieldName === "workStartDateInput") {
			setWorkStartDate(event.target.value);
		} else if (fieldName === "workEndDateInput") {
			setWorkEndDate(event.target.value);
		}
	};

	const renderField = (fieldName, fieldText, fieldType) => {
		return (
			<div className="formFieldContainer">
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
			{renderField("schoolInput", "School Name", "text")}
			{renderField("degreeInput", "Degree acquired", "text")}
			{renderField("schoolDurationStartInput", "From", "date")}
			{renderField("schoolDurationEndInput", "To", "date")}
			{renderField("companyInput", "Current job", "text")}
			{renderField("positionInput", "Position", "text")}
			{renderField("tasksInput", "Main tasks", "text")}
			{renderField("workStartDateInput", "From", "date")}
			{renderField("workEndDateInput", "To", "date")}

			<input type={"submit"} value={"Submit"} />
		</form>
	);
};

export default CVForm;
