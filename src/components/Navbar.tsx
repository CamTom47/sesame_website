/** -------------------------MODULES------------------------- **/
import companyLogo from "../../public/sesame-logo.png";
import { useState, useRef } from "react";
import { Show, SignUpButton, SignInButton } from "@clerk/react";

/** -------------------------COMPONENTS------------------------- **/
import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const Navbar = (): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/
	const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='fixed top-0 flex w-full justify-between items-center py-8 px-4 z-300 text-primary-dark'>
			<Link to={"/"} className=''>
				<img className='scale-60 xl:h-8' src={companyLogo} alt='' />
			</Link>
			{/* <div
				className='md:hidden flex flex-col gap-y-1 col-span-2 place-self-center justify-self-send'
				onClick={() => setShowNavMenu(true)}>
				<div className='w-6 h-0.5 bg-black rounded'></div>
				<div className='w-6 h-0.5 bg-black rounded'></div>
				<div className='w-6 h-0.5 bg-black rounded'></div>
			</div> */}
			<div className='flex gap-x-16 p-3'>
				<Link to={"/about"}>About</Link>
				<Link to={"/pricing"}>Pricing</Link>
				<Link to={"/demo"}>Demo</Link>
				<Link to={"/contact"}>Contact</Link>
			</div>
			<div className='flex gap-x-8 px-12 items-center'>
				<Show when={"signed-out"}>
					<Link to={"/signup"}>
						<ButtonPrimary text='Get Started' />
					</Link>
					<Link to={"/signin"}>Sign In</Link>
				</Show>
			</div>
			{/* {showNavMenu && (
				<div className='absolute translate-y-40 border-dark-200 border rounded-md w-7/8 flex flex-col items-center [&_a]:text-sm'>
					<Link to={"/about"}>About</Link>
					<Link to={"/pricing"}>Pricing</Link>
					<Link to={"/demo"}>Demo</Link>
					<Link to={"/contact"}>Contact</Link>
				</div>
			)} */}
		</div>
	);
};
export default Navbar;
