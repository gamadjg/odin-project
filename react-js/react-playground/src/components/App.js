import "../assets/App.css";
import SideNav from "./side-nav";
import CC_LIFECYCLE_TIMERS from "./CC_LIFECYCLE_TIMERS";
import CC_LIFECYCLE_CLICKS from "./CC_LIFECYCLE_CLICKS";
import CycleString from "./cycle-string";
import HooksReview from "./fc-hooks-review";

//import FC_INCREMENTAL_COUNT from "./FC_INCREMENTAL_COUNT";
//import FC_ONCLICK_COLORING from "./FC_ONCLICK_COLORING";

function App() {
	return (
		<div className="App">
			<div className="headerContainer"></div>
			<div className="bodyContainer">
				<div className="sideNavContainer">
					<SideNav />
				</div>
				<div className="mainBodyContainer">
					<CycleString />
					<CC_LIFECYCLE_TIMERS />
					<HooksReview />
					<CC_LIFECYCLE_CLICKS />
				</div>
			</div>
			<div className="footerContainer"></div>
		</div>
	);
}

export default App;
