/** -------------------------MODULES------------------------- **/
import React from "react";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

const ButtonPrimary = ({ text }: { text: string }): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<button type="button" className='px-6 py-2 bg-primary-light text-primary-dark w-fit rounded-lg hover:bg-primary-dark hover:text-white hover:outline hover:outline-primary-light duration-150'>
			<p>{text}</p>
		</button>
	);
};
export default ButtonPrimary;
