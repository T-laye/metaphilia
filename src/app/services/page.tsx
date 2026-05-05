"use client";
import Image from "next/image";
import SubTitle from "../../components/SubTitle";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";
import { serviceDetails } from "../../lib/contents";

export default function Page() {
	return (
		<div className="pt-20 lg:pt-24 min-h-[50vh]">
			<SubTitle title="Our Services" breadcrumb="Services" />

			{/* Grid */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					visible: {
						transition: { staggerChildren: 0.15 },
					},
				}}
				className="custom-container  py-15 lg:py-30 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-7.5"
			>
				{serviceDetails.map((s, i) => (
					<motion.div
						key={i}
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.5, ease: "easeOut" }}
						className="service-card relative max-[500px]:max-w-80 h-full place-self-center  rounded-[15px] overflow-hidden cursor-pointer hover:bg-primary-500 hover:text-neutral-100 duration-150"
					>
						<div className="service-card-overlay absolute inset-0 flex justify-center items-start">
							<Button className="mt-[30%]">Read More</Button>
						</div>
						<div className="h-1/2">
							<Image
								src={s.img}
								alt={s.title}
								className="w-full h-full object-cover"
								width={500}
								loading="eager"
								height={500}
							/>
						</div>
						<div className="px-4.5 pb-5 pt-3.5">
							<h5 className="mb-3.5 text-xl sm:text-2xl xl:text-[28px] font-semibold">
								{s.title}
							</h5>
							<p className="line-clamp-4 md:text-lg xl:text-xl">{s.desc}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
