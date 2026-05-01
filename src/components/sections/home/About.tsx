"use client";

import Image from "next/image";
import React from "react";
import Button from "../../ui/Button";
import { GiCheckMark } from "react-icons/gi";
import { pageRoutes } from "../../../lib/routes";
import { motion } from "framer-motion";

const About = () => {
	return (
		<section className="py-15 relative overflow-hidden md:py-24 lg:py-30">
			<div className="absolute animate-float -bottom-18 -right-47 lg:-right-64 lg:-bottom-24 h-52 md:h-64 xl:h-77">
				<Image
					alt="white flower"
					src="/images/flower-green.svg"
					height={300}
					width={300}
					className="h-full w-full object-contain"
				/>
			</div>

			<div className="custom-container flex flex-col md:flex-row gap-7.5">
				{/* Image */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="max-md:max-w-80 mx-auto md:flex-1 bg-red300"
				>
					<Image
						src="/images/home/about-sec-img.png"
						alt="four pics one word"
						height={500}
						width={500}
						className="w-full h-full lg:w-11/12 md:mx-auto object-contain"
					/>
				</motion.div>

				{/* Text Content */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
					className="flex flex-col items-center gap-3.75 md:flex-1 md:items-start md:gap-7.5 bg-red-00"
				>
					<h3 className=" font-semibold sm:text-lg bg-secondary-100 w-fit rounded-[30px] px-7.25 py-[5.5px]">
						You Deserve to Feel Whole
					</h3>

					<div className="text-sm sm:text-lg lg:text-2xl leading-[150%]">
						<p className="text-center md:text-start">
							Metaphilia Consult Limited is a professional counselling and
							mental health consulting firm committed to providing accessible
							psychological support available to individuals, couples, families,
							and organisations. We combine clinical expertise with genuine
							human care.
						</p>

						<h4 className="font-semibold mt-3">Why Choose Metaphilia:</h4>

						{/* List */}
						<motion.ul
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={{
								hidden: {},
								visible: {
									transition: {
										staggerChildren: 0.15,
									},
								},
							}}
							className="space-y-2.5 mt-2.5"
						>
							{[
								"A Safe Space, Always",
								"Effortless Scheduling",
								"Tailored to You",
							].map((text, i) => (
								<motion.li
									key={i}
									variants={{
										hidden: { opacity: 0, y: 15 },
										visible: { opacity: 1, y: 0 },
									}}
									className="flex items-center gap-3.5"
								>
									<GiCheckMark className="text-primary-500" />
									<span>{text}</span>
								</motion.li>
							))}
						</motion.ul>
					</div>

					{/* Button */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.3 }}
					>
						<Button href={pageRoutes.ABOUT}>Learn More</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
