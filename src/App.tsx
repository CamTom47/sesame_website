/** -------------------------MODULES------------------------- **/
import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { CheckoutProvider } from "@stripe/react-stripe-js/checkout";
import { loadStripe } from "@stripe/stripe-js";

/** -------------------------COMPONENTS------------------------- **/
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const App = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

	const promise = useMemo(() => {
		return fetch("/create-checkout-session", {
			method: "POST",
		})
			.then((res) => res.json())
			.then((data) => data.clientSecret);
	}, []);

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='h-full w-full flex flex-col'>
			<div className='top-0'>
				<Navbar />
			</div>
			<CheckoutProvider stripe={stripePromise} options={{ clientSecret: promise }}>
				<Routes>
					<Route path='/' element={<Homepage />}></Route>
					<Route path='/signup' element={<SignUpPage />}></Route>
					<Route path='/signin' element={<LoginPage />}></Route>
				</Routes>
			</CheckoutProvider>
		</div>
	);
};
export default App;
