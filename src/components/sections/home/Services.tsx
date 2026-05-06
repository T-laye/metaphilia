"use client";

import Image from "next/image";
import { serviceDetails } from "../../../lib/contents";
import { motion } from "framer-motion";
import Button from "../../ui/Button";

/* eslint-disable @next/next/no-img-element */

const Stats = () => {
	const statsDetails = [
		{
			title: "Lives Supported",
			value: "10+",
			img: "/icons/liveds.svg",
		},
		{
			title: "Client Satisfaction Rate",
			value: "15%",
			img: "/icons/handshake.svg",
		},
		{
			title: "Certified COunsellors",
			value: "0+",
			img: "/icons/mental-head.svg",
		},
	];

	return (
		<section className="py-15 lg:py-12 my-15 lg:my-30 bg-accent-200 ">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					visible: {
						transition: { staggerChildren: 0.2 },
					},
				}}
				className="custom-container flex justify-center max-sm:flex-col max-sm:items-center sm:justify-between gap-15 "
			>
				{statsDetails.map((s, i) => (
					<motion.div
						key={i}
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<div className="flex items-center justify-center sm:justify-start gap-3.5 lg:gap-7.5">
							<img src={s.img} alt={s.title} className="w-8 lg:w-12" />
							<span className="font-bold text-3xl lg:text-4xl ">{s.value}</span>
						</div>
						<p className="font-medium lg:text-xl">{s.title}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

const RenderServices = () => {
	return (
		<section className="py-7.5 md:py-15 bg-primary-500">
			<div className="custom-container text-neutral-100">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<h3 className="mx-auto font-semibold sm:text-lg lg:text-2xl md:font-medium bg-neutral-100/30 w-fit rounded-[30px] px-4.5 py-[5.5px] lg:px-[34.5px] lg:py-3">
						Our Services
					</h3>
					<p className="text-sm sm:text-lg lg:text-2xl leading-[170%] text-center mt-3.5 md:mt-7.5 lg:px-8">
						At Metaphilia, we offer a thoughtfully curated range of counselling
						and consulting services to meet you where you are and take you where
						you want to be. All sessions are available in-person and online,
						giving you the flexibility to access support on your terms.
					</p>
				</motion.div>

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
					className="mt-13.5 lg:mt-15 grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-7.5 "
				>
					{serviceDetails.map((s) => (
						<motion.div
							key={s.slug}
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="service-card relative max-[500px]:max-w-80 h-full place-self-center  rounded-[15px] overflow-hidden cursor-pointer"
						>
							<div className="service-card-overlay absolute inset-0 bg-black/20 flex justify-center items-start">
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
							<div className="px-4.5">
								<h5 className="my-3.5 text-xl sm:text-2xl xl:text-[28px] font-semibold">
									{s.title}
								</h5>
								<p className="line-clamp-4 md:text-lg xl:text-xl">{s.desc}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default function Services() {
	return (
		<div>
			<Stats />

			<div className="relative">
				<div className="absolute animate-float -scale-x-100  -top-13.5 -left-16 lg:-top-28 lg:-left-12  h-32.5 md:h-44 lg:h-62">
					<Image
						alt="green flower"
						src="/images/flower-green.svg"
						height={300}
						width={300}
						className="h-full w-full object-contain"
					/>
				</div>

				<RenderServices />
			</div>
		</div>
	);
}
