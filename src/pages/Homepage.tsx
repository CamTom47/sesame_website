/** -------------------------MODULES------------------------- **/
import React from "react";
import preview1 from "../../public/preview1.png";

/** -------------------------COMPONENTS------------------------- **/
import HomepageCard from "../components/HomepageCard";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const Homepage = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	const cards = [
		{
			header: "Hourly Bookings",
			text: "Sesame's main goal is to provide a tool that allows you to easily manage you hourly bookings.",
		},
		{
			header: "Calendar Syncing",
			text: "Don't miss a single step with our seamless calendar syncing. Keeping track of of your appointments should be easy.",
		},
		{
			header: "Team Management",
			text: "Scale your team with precision with our role based permissions.",
		},
		{
			header: "Smart Lock Integrations",
			text: "Fully automate your booking process with auto generated lock codes for a hands off experience.",
		},
		{
			header: "In-App Messaging",
			text: "Maintain communication with your clients through our in app messaging system.",
		},
		{
			header: "Payment Handling",
			text: "Conduct your business with peace of mind, knowing that our Stripe integrations have you covered.",
		},
	];

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='w-full h-svh flex flex-col'>
			<div className='flex flex-col gap-y-12 h-full px-4 xl:grid grid-cols-2 xl:mx-36 xl:gap-x-48'>
				<div className='flex flex-col'>
					<h1 className='text-6xl font-bold'>Flexible, Automated Bookings </h1>
					<p className='text-3xl font-light'>Managing your bookings has never been easier</p>
				</div>
				<img src={'/preview1.png'} alt='' className='border rounded-md border-gray-400 shadow-xl' />
			</div>
			<div className='flex flex-col gap-y-8 mx-4'>
				<h1 className='text-3xl'>What We Do</h1>
				{cards.map((card, idx) => (
					<HomepageCard key={idx} header={card.header} text={card.text} />
				))}
			</div>
		</div>
	);
};
export default Homepage;
