/** -------------------------MODULES------------------------- **/
import React from "react";

/** -------------------------COMPONENTS------------------------- **/
import { SignUp } from "@clerk/react";
import CheckoutForm from "../components/CheckoutForm";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const SignUpPage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='flex flex-col h-svh justify-center items-center'>
			<SignUp></SignUp>
			<CheckoutForm></CheckoutForm>
		</div>
	);
};
export default SignUpPage;
