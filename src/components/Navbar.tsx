/** -------------------------MODULES------------------------- **/
import companyLogo from "../../public/sesame-logo.png";
import { useState, useRef } from "react";
import { ClerkProvider } from "@clerk/react";
import { Show, SignUpButton, SignInButton } from "@clerk/react";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

/** -------------------------COMPONENTS------------------------- **/
import { Link } from "react-router-dom";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const Navbar = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='relative grid grid-cols-12 w-full h-12 justify-between items-center px-4 z-300'>
			<div className='col-span-2 xl:hidden'></div>
			<Link to={"/"} className='col-span-8'>
				<img className='scale-60 xl:h-8' src={companyLogo} alt='' />
			</Link>
			<div
				className='md:hidden flex flex-col gap-y-1 col-span-2 place-self-center justify-self-send'
				onClick={() => setShowNavMenu(true)}>
				<div className='w-6 h-0.5 bg-black rounded'></div>
				<div className='w-6 h-0.5 bg-black rounded'></div>
				<div className='w-6 h-0.5 bg-black rounded'></div>
			</div>
			<div className='hidden'>
				<Link to={"/about"}>About</Link>
				<Link to={"/pricing"}>Pricing</Link>
				<Link to={"/demo"}>Demo</Link>
				<Link to={"/contact"}>Contact</Link>
			</div>
			<div className='flex gap-x-4 col-start-12'>
				<ClerkProvider publishableKey={publishableKey}>
					<Show when={"signed-out"}>
						<SignInButton></SignInButton>
						<SignUpButton></SignUpButton>
					</Show>
				</ClerkProvider>
			</div>
			{showNavMenu && (
				<div className='absolute translate-y-40 border-dark-200 border rounded-md w-7/8 flex flex-col items-center [&_a]:text-sm'>
					<Link to={"/about"}>About</Link>
					<Link to={"/pricing"}>Pricing</Link>
					<Link to={"/demo"}>Demo</Link>
					<Link to={"/contact"}>Contact</Link>
				</div>
			)}
		</div>
	);
};
export default Navbar;
