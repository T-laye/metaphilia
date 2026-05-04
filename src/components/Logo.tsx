import Image from "next/image";


const Logo = ({
	variant = "primary",
}: {
	variant?: "primary" | "white";
}) => {
	return (
		<div className="relative w-32.25 h-7.5 md:h-10 md:w-44 lg:h-12.5 lg:w-53.5 aspect-square">
			<Image
				src={`/logos/${variant}.svg`}
				alt="Metaphilia Logo"
				fill
				loading="eager"
				className="object-contain"
			/>
		</div>
		// <div className="h-7.5 md:h-10 lg:h-12.5">
		// 	<Image
		// 		src={`/logos/${variant}.svg`}
		// 		alt="Metaphilia Logo"
		// 		height={50}
		//         loading="eager"
		// 		width={50}
		// 		className="h-full w-full object-contain"
		// 	/>
		// </div>
	);
};

export default Logo;
