import { useState } from "react";
import CVForm from "./CVForm";
import Preview from "./Preview";
import "../assets/Body.css";

const Body = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [school, setSchool] = useState("");
	const [degree, setDegree] = useState("");
	const [schoolDurationStart, setSchoolDurationStart] = useState("");
	const [schoolDurationEnd, setSchoolDurationEnd] = useState("");
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");
	const [tasks, setTasks] = useState("");
	const [workStartDate, setWorkStartDate] = useState("");
	const [workEndDate, setWorkEndDate] = useState("");

	return (
		<div className="siteBody">
			<div className="formSubmission">
				<CVForm
					setFirstName={setFirstName}
					setLastName={setLastName}
					setEmail={setEmail}
					setPhone={setPhone}
					setSchool={setSchool}
					setDegree={setDegree}
					setSchoolDurationStart={setSchoolDurationStart}
					setSchoolDurationEnd={setSchoolDurationEnd}
					setCompany={setCompany}
					setPosition={setPosition}
					setTasks={setTasks}
					setWorkStartDate={setWorkStartDate}
					setWorkEndDate={setWorkEndDate}
				/>
			</div>
			<div className="formDisplay">
				<Preview
					firstName={firstName}
					lastName={lastName}
					email={email}
					phone={phone}
					school={school}
					degree={degree}
					schoolDurationStart={schoolDurationStart}
					schoolDurationEnd={schoolDurationEnd}
					company={company}
					position={position}
					tasks={tasks}
					workStartDate={workStartDate}
					workEndDate={workEndDate}
				/>
			</div>
		</div>
	);
};

export default Body;
