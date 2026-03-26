/** -------------------------MODULES------------------------- **/
import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js/checkout";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const CheckoutForm = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<form>
			<PaymentElement />
			<button>Submit</button>
		</form>
	);
};
export default CheckoutForm;
