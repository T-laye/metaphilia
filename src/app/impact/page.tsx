"use client";
import { motion } from "framer-motion";
import SubTitle from "../../components/SubTitle";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

export default function Page() {
	const details = [
		{
			title: "A Safe Space, Always",
			text: "Our sessions are highly confidential. You speak, and we listen without judgment and assumptions.",
		},
		{
			title: "Effortless Scheduling",
			text: "You can easily book, reschedule, or manage your sessions online at your convenience. Our processes are simple and accessible.",
		},
		{
			title: "Tailored to You",
			text: "We do not apply a “one-size-fits-all” approach. Every engagement, as an individual, couple, or organisation, is thoughtfully customised to your specific needs and goals.",
		},
	];

	return (
		<div className="pt-20 lg:pt-24 min-h-[50vh] ">
			<SubTitle title="Impact" breadcrumb="Impact" />

			<div className="custom-container pt-15 pb-60">
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="h-51.5 sm:h-70 w-full md:h-90 lg:h-110 xl:h-120 rounded-[10px] lg:rounded-[16.8px] overflow-hidden"
				>
					<Image
						src="/images/impact/impact-img.webp"
						alt="Impact Image"
						loading="eager"
						height={500}
						width={500}
						className="w-full h-full object-cover"
					/>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
					className="flex flex-col items-center mt-7.5 md:flex-1 md:items-start"
				>
					<h3 className="font-semibold sm:text-lg mb-3.5 md:mb-7.5 bg-secondary-100 w-fit rounded-[30px] px-7.25 py-[5.5px] lg:text-2xl">
						METAPHILIA FOUNDATION
					</h3>
					<h2 className="text-2xl leading-10 font-bold mb-3.5 lg:text-[32px]">
						Metaphilia
					</h2>
					<p className="text-sm leading-6 text-center md:text-start sm:text-base md:text-lg lg:text-xl xl:text-2xl lg:leading-10">
						Metaphilia Consult Limited is a professional counselling and mental
						health consulting firm committed to providing accessible
						psychological support available to individuals, couples, families,
						and organisations. We combine clinical expertise with genuine human
						care to support people who are ready to understand themselves
						better, improve their relationships, and live healthier, more
						balanced lives.
					</p>
				</motion.div>

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
					className="flex mt-7.5 flex-col gap-4 md:gap-3 lg:gap-5"
				>
					{details.map((t, i) => (
						<motion.li
							key={i}
							variants={{
								hidden: { opacity: 0, y: 15 },
								visible: { opacity: 1, y: 0 },
							}}
							className="flex gap-2 md:gap-3"
						>
							<GiCheckMark className="text-primary-500 min-w-3.5 md:min-w-7.5 md:mt-2 text-2xl" />
							<div className="">
								{/* <span className="font-bold">{t.title}</span> */}
								<p className="text-sm leading-6 sm:text-base md:text-lg lg:text-xl xl:text-2xl lg:leading-10">
									{t.text}
								</p>
							</div>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</div>
	);
}
