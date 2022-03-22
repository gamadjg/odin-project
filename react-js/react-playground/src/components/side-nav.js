import React, { useState } from "react";
import "./../assets/SideNav_Style.css";

const SideNav = (props) => {
	const [wid, setWid] = useState("0%");

	const openSidenav = () => {
		setWid("10%");
	};

	const closeNav = () => {
		setWid("0%");
	};

	return (
		<div>
			<button onClick={openSidenav}>Open</button>
			<div style={{ width: wid }} className="sidenav">
				<button onClick={closeNav}>Close</button>
				<div className="sideNavLinksContainer">
					<a href="#section">About</a>
					<a href="#section">Services</a>
					<a href="#section">Clients</a>
					<a href="#section">Contact</a>
				</div>
				<div>
					<span className="checkText">test</span>
					<label className="switch">
						<input type="checkbox" />
						<span className="slider round"></span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
