/** -------------------------MODULES------------------------- **/
import React from "react";
import { Routes, Route } from "react-router-dom";

/** -------------------------COMPONENTS------------------------- **/
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const App = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='h-full w-full flex flex-col'>
			<div className='top-0'>
				<Navbar />
			</div>
			<Routes>
				<Route path='/' element={<Homepage />}></Route>
			</Routes>
		</div>
	);
};
export default App;
