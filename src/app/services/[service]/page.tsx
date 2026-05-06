"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SubTitle from "../../../components/SubTitle";
import Button from "../../../components/ui/Button";

export default function Page() {
	return (
		<div className="pt-20 lg:pt-24 min-h-[50vh] ">
			<SubTitle
				title="Our Services"
				breadcrumb="Services > Coaching Individuals"
			/>

			<div className="custom-container py-15 lg:py-30 flex flex-col lg:flex-row-reverse lg:gap-24.5 lg:items-center">
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="h-51.5 sm:h-70 w-full md:h-90 lg:h-full xl:h-120 rounded-[10px] lg:rounded-[16.8px] overflow-hidden lg:flex-1"
				>
					<Image
						src="/images/about/about-img.png"
						alt="About Image"
						loading="eager"
						height={1000}
						width={500}
						className="w-full h-full object-cover"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
					className="flex flex-col items-center mt-7.5 lg:flex-1 md:items-start"
				>
					<h3 className="font-semibold sm:text-lg mb-3.5 md:mb-7.5 bg-secondary-100 w-fit rounded-[30px] px-7.25 py-[5.5px] lg:text-2xl">
						METAPHILIA
					</h3>
					<h2 className="text-2xl leading-10 font-bold mb-3.5 md:text-[32px] xl:text-[48px]">
						Individual Coaching
					</h2>
					<p className="text-sm leading-6 text-center md:text-start sm:text-base md:text-lg lg:text-xl xl:text-2xl lg:leading-10">
						Metaphilia Consult Limited is a professional counselling and mental
						health consulting firm committed to providing accessible
						psychological support available to individuals, couples, families,
						and organisations. We combine clinical expertise with genuine human
					</p>

					<div className="flex flex-col items-center mt-3.5 md:items-start">
						<p className="sm:font-semibold text-neutral-500 md:text-xl">
							Start from
						</p>
						<h5 className="mt-1.5">
							<span className="text-[40px] lg:text-[48px] font-bold text-primary-500">
								₦45,000
							</span>
							<span className="text-neutral-300 lg:text-xl">/session</span>
						</h5>
					</div>

					<div className="flex flex-col gap-3.5 mt-5.5 sm:flex-row">
						<Button>Book a Session</Button>
						<Button variant="reverse" className="border border-primary-500">
							Book a Discovery Call
						</Button>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
