import React from "react";

const Preview = ({
	firstName,
	lastName,
	email,
	phone,
	school,
	degree,
	schoolDuration,
	company,
	position,
	tasks,
	workStartDate,
	workEndDate,
}) => {
	return (
		<div>
			<div>{firstName}</div>
			<div>{lastName}</div>
			<div>{email}</div>
			<div>{phone}</div>
			<div>{school}</div>
			<div>{degree}</div>
			<div>{schoolDuration}</div>
			<div>{company}</div>
			<div>{position}</div>
			<div>{tasks}</div>
			<div>{workStartDate}</div>
			<div>{workEndDate}</div>
		</div>
	);
};

export default Preview;
