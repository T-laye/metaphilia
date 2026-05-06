"use client";

import Link from "next/link";
import { LiaClock } from "react-icons/lia";
import { RxEnvelopeClosed } from "react-icons/rx";
import { SlPhone } from "react-icons/sl";
import Button from "./ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { contactDetails } from "../lib/contents";

export default function Contact() {
	return (
		<>
			<motion.section
				style={{
					backgroundImage: "url('/images/home/about-sec-bg-2.webp')",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
				className="py-7.5 sm:py-10 md:py-15 lg:py-20 mb-15"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="custom-container flex flex-col items-center sm:flex-row gap-3.5 md:gap-10.5">
					<div className="bg-[#111]/61 border border-[#111]/10 rounded-[10px] py-7.5 px-4.25 backdrop-blur-[5px] w-full">
						<motion.h4
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
							className="text-secondary-500 text-2xl lg:text-[32px] lg:font-bold font-semibold text-center leading-10"
						>
							Discover Your Fit
						</motion.h4>
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
							className="text-neutral-100 text-sm font-semibold text-center leading-6 mt-4.5 md:text-2xl md:leading-10 max-w-3xl mx-auto"
						>
							Not sure which package is right for you? Book a{" "}
							<span className="">free 15-minute</span> discovery call and let us
							help you find the best fit. No pressure, no commitment required.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
							className="mt-5.5 flex justify-center"
						>
							<Button>Book a Discovery Call</Button>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* CONTACT */}
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
									<span className="text-sm italic">
										Virtual sessions available outside office hours by
										appointment
									</span>
								</div>
							),
						},
						{
							icon: <RxEnvelopeClosed className="text-2xl md:text-[40px]" />,
							content: (
								<div className="mt-3.5 max-[340px]:text-sm">
									<Link
										href={`mailto:${contactDetails.email}`}
										className="uppercase"
									>
										{contactDetails.email}
									</Link>
								</div>
							),
						},
						{
							icon: <SlPhone className="text-2xl md:text-[40px]" />,
							content: (
								<div className="mt-3.5">
									<Link href={`tel:${contactDetails.phone.trim()}`}>
										{contactDetails.phone.trim()}
									</Link>
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
		</>
	);
}
