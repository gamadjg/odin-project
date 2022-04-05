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
	const [schoolDuration, setSchoolDuration] = useState("");
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");
	const [tasks, setTasks] = useState("");
	const [dateWorked, setDateWorked] = useState("");

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
					setSchoolDuration={setSchoolDuration}
					setCompany={setCompany}
					setPosition={setPosition}
					setTasks={setTasks}
					setDateWorked={setDateWorked}
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
					schoolDuration={schoolDuration}
					company={company}
					position={position}
					tasks={tasks}
					dateWorked={dateWorked}
				/>
			</div>
		</div>
	);
};

export default Body;
