/** -------------------------MODULES------------------------- **/
import React from "react";

/** -------------------------COMPONENTS------------------------- **/
import { SignIn } from "@clerk/react";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const LoginPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='flex flex-col h-svh justify-center items-center'>
			<SignIn></SignIn>
		</div>
	);
};
export default LoginPage;
