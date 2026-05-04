"use client";

import Link from "next/link";
import { LiaClock } from "react-icons/lia";
import { RxEnvelopeClosed } from "react-icons/rx";
import { SlPhone } from "react-icons/sl";
import Button from "../../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
	return (
		<section className="bg-secondary-400">
			<div className="h-6 flex">
				<div className="bg-primary-500 flex-1"></div>
				<div className="bg-secondary-300 h-full flex-1"></div>
			</div>

			{/* TOP INFO */}
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center xl:grid-cols-4 custom-container text-neutral-100 font-medium text-lg sm:text-xl pt-7.5 pb-10 md:pt-14 md:pb20 gap-7.5 md:gap-15"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.15,
						},
					},
				}}
			>
				{[
					{
						icon: <LiaClock className="text-3xl md:text-[45px]" />,
						content: (
							<div className="flex flex-col mt-3.5">
								<span>MON - FRI</span>
								<span>8:00AM - 5:00PM</span>
							</div>
						),
					},
					{
						icon: <RxEnvelopeClosed className="text-2xl md:text-[40px]" />,
						content: (
							<div className="mt-3.5">
								<Link href="mailto:INFO@METAPHILIACONSULT.COM">
									INFO@METAPHILIACONSULT.COM
								</Link>
							</div>
						),
					},
					{
						icon: <SlPhone className="text-2xl md:text-[40px]" />,
						content: (
							<div className="mt-3.5">
								<Link href="tel:+2348139353850">+234 813 935 3850</Link>
							</div>
						),
					},
				].map((item, i) => (
					<motion.div
						key={i}
						className="h-full"
						variants={{
							hidden: { opacity: 0, y: 40 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						{item.icon}
						{item.content}
					</motion.div>
				))}

				{/* BUTTON */}
				<motion.div
					className="flex justify-center items-center h-full"
					variants={{
						hidden: { opacity: 0, scale: 0.9 },
						visible: { opacity: 1, scale: 1 },
					}}
					transition={{ duration: 0.4 }}
				>
					<Button variant="reverse">Book a Session</Button>
				</motion.div>
			</motion.div>

			{/* IMAGES GRID */}
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.1,
						},
					},
				}}
			>
				{[1, 2, 3, 4, 5, 6].map((i) => (
					<motion.div
						key={i}
						className="w-full h-81.25"
						variants={{
							hidden: { opacity: 0, scale: 0.95 },
							visible: { opacity: 1, scale: 1 },
						}}
						transition={{ duration: 0.4 }}
					>
						<Image
							src={`/images/home/contact-${i}.webp`}
							height={500}
							width={500}
							loading="eager"
							alt="contact image"
							className="h-full w-full object-cover object-center"
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
