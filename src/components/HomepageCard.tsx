/** -------------------------MODULES------------------------- **/
import React from "react";

/** -------------------------COMPONENTS------------------------- **/

/** -------------------------STYLES------------------------- **/

/** -------------------------INTERFACES------------------------- **/

interface HomepageCardProps {
	header: string;
	text: string;
	icon?: SVGAElement;
}

const HomepageCard = ({ header, text, icon }: HomepageCardProps): React.JSX.Element => {
	/** -------------------------STATE------------------------- **/

	/** -------------------------FUNCTIONS------------------------- **/

	/** -------------------------EFFECTS------------------------- **/

	return (
		<div className='bg-white border border-gray-400 rounded-md p-4'>
			<h1 className="text-2xl">{header}</h1>
			<p>{text}</p>
		</div>
	);
};
export default HomepageCard;
