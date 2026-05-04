import Image from "next/image";
import Link from "next/link";
import { pageRoutes } from "../lib/routes";

const Logo = ({ variant = "primary" }: { variant?: "primary" | "white" }) => {
	return (
		<Link
			href={pageRoutes.HOME}
			className="block relative w-32.25 h-7.5 md:h-10 md:w-44 lg:h-12.5 lg:w-53.5 aspect-square"
		>
			<Image
				src={`/logos/${variant}.svg`}
				alt="Metaphilia Logo"
				fill
				loading="eager"
				className="object-contain"
			/>
		</Link>
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
