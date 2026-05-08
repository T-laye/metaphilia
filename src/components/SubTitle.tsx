import Image from "next/image";
import React from "react";

const SubTitle = ({
	title,
	breadcrumb,
}: {
	title: string;
	breadcrumb: string;
}) => {
	return (
		<section className="relative bg-primary-500 min-h-20 md:py-6 flex items-center">
			<div className="custom-container text-neutral-100 flex w-full justify-between items-center gap-5">
				<h3 className="text-2xl leading-10 whitespace-nowrap font-bold md:text-3xl xl:text-4xl">
					{title}
				</h3>
				<h4 className="uppercase text-sm sm:text-base md:text-xl lg:text-2xl text-end">{`Home > ${breadcrumb}`}</h4>

				{/* flower */}
				<div className="absolute animate-float top-full right-[-58%] min-[450px]:right-[-45%] min-[550px]:right-[-35%] sm:right-[-30%] md:right-[-30%] lg:right-[-35%] xl:right-[-25%] 2xl:right-[-16%] h-[254.38px] md:h-75 lg:h-106.25 -z-10 max-md:z-10">
					<Image
						alt="green flower"
						src="/images/flower-green.svg"
						height={300}
						loading="eager"
						width={300}
						className="h-full w-full object-contain"
					/>
				</div>
			</div>
		</section>
	);
};

export default SubTitle;
