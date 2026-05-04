import React from "react";

const SubTitle = ({
	title,
	breadcrumb,
}: {
	title: string;
	breadcrumb: string;
}) => {
	return (
		<section className="bg-primary-500 min-h-20 md:py-6 flex items-center">
			<div className="custom-container text-neutral-100 flex w-full justify-between items-center">
				<h3 className="text-2xl leading-10 whitespace-nowrap font-bold md:text-3xl xl:text-4xl">
					{title}
				</h3>
				<h4 className="uppercase text-base md:text-xl lg:text-2xl">{`Home > ${breadcrumb}`}</h4>
			</div>
		</section>
	);
};

export default SubTitle;
