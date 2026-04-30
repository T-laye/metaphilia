import Image from "next/image";


const Logo = ({
	variant = "primary",
}: {
	variant?: "primary" | "white";
}) => {
	return (
		<div className="h-7.5 md:h-10 lg:h-12.5">
			<Image
				src={`/logos/${variant}.svg`}
				alt="Metaphilia Logo"
				height={50}
                loading="eager"
				width={50}
				className="h-full w-full object-contain"
			/>
		</div>
	);
};

export default Logo;
