"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

const WhoWeAre = () => {
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
		<section className="custom-container">
			<div className="flex flex-col gap-7.5 md:flex-row bg-red300 items-center">
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="h-51.5 sm:h-70 w-full md:h-full rounded-[10px] overflow-hidden md:flex-1"
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
					className="flex flex-col items-center  md:flex-1 md:items-start"
				>
					<h3 className="font-semibold sm:text-lg mb-3.5 md:mb-7.5 bg-secondary-100 w-fit rounded-[30px] px-7.25 py-[5.5px] lg:text-2xl">
						Who Are We
					</h3>
					<h2 className="text-2xl leading-10 font-bold mb-3.5 lg:text-[32px]">
						Metaphilia
					</h2>
					<p className="text-sm leading-6 text-center md:text-start sm:text-base lg:text-xl xl:text-2xl lg:leading-10">
						Metaphilia Consult Limited is a professional counselling and mental
						health consulting firm committed to providing accessible
						psychological support available to individuals, couples, families,
						and organisations. We combine clinical expertise with genuine human
						care to support people who are ready to understand themselves
						better, improve their relationships, and live healthier, more
						balanced lives.
						<br />
						We are a team of certified counsellors, mental health consultants,
						and support professionals united by a shared purpose to create
						spaces where people feel genuinely seen, heard, and helped.
					</p>
				</motion.div>
			</div>

			<div>
				<div>
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
						className="flex mt-7.5 md:15 lg:mt-30 flex-col gap-4 md:gap-3 lg:gap-5 md:flex-row"
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
								<div className="flex flex-col md:text-xl lg:text-2xl lg:leading-10">
									<span className="font-bold">{t.title}</span>
									<p>{t.text}</p>
								</div>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</div>
		</section>
	);
};

export default WhoWeAre;
