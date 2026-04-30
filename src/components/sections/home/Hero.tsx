"use client";

import React from "react";
import Button from "../../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(to top, rgba(0,0,0,0.6)), url('/images/hero-bg.png')",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "65% 100%",
			}}
			className="pt-20 sm:pt-24 relative pb-20 overflow-hidden"
		>
			{/* 🌸 Flower */}
			<motion.div
				initial={false}
				// animate={{ y: [0, -12, 0] }}
				animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute -bottom-4 -right-8 sm:right-0 max-sm:h-32 max-md:h-52"
			>
				<Image
					alt="white flower"
					src="/images/flower-white.svg"
					height={300}
					width={300}
					className="h-full w-full object-contain"
				/>
			</motion.div>

			<div className="custom-container">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.15,
							},
						},
					}}
					className="flex flex-col gap-7.5 pt-16.75 max-[450px]:items-center lg:pt-30"
				>
					{/* Badge */}
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						className="border border-neutral-100/10 backdrop-blur-2xl rounded-[30px] w-fit px-5 py-1 sm:px-8 sm:py-2 flex items-center justify-center bg-neutral-100/30 place-self-start"
					>
						<span className="text-primary-500 text-base lg:text-2xl font-medium">
							Metaphilia
						</span>
					</motion.div>

					{/* Heading */}
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<h1 className="text-neutral-100 font-bold text-[40px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[100%]">
							Your <span className="text-secondary-500">Pathway</span> to{" "}
							<br className="max-[450px]:hidden" />
							Mental <span className="text-secondary-500"> Wellness</span>
						</h1>

						<motion.p
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							className="text-sm sm:text-base md:text-xl lg:text-2xl text-neutral-100 mt-3 max-[450px]:w-full  w-2/3 sm:w1/2"
						>
							Professional, safe and accessible mental health counselling and
							consulting built around you. We exist for people who are ready to
							understand themselves better, improve their relationships, and
							live healthier, more balanced lives.
						</motion.p>
					</motion.div>

					{/* Buttons */}
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						className="flex flex-col items-center gap-3.75 min-[400px]:flex-row"
					>
						<Button>Book a Session</Button>
						<Button variant="ghost">Book a Session</Button>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
