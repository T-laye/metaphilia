"use client";

import { motion } from "framer-motion";

const Mission = () => {
	const values = [
		{
			title: "Confidentiality: ",
			text: "Your privacy is sacred. Always.",
		},
		{
			title: "Excellence: ",
			text: "We are committed to the highest professional and ethical standards.",
		},
		{
			title: "Growth: ",
			text: "We believe in the infinite capacity of people to heal, evolve, and thrive.",
		},
		{
			title: "Compassion: ",
			text: "We lead with empathy in every interaction.",
		},
	];

	return (
		<section className="mt-15 xl:mt-30">
			<div className="custom-container">
				<motion.h3
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mx-auto font-semibold sm:text-lg mb-3.5 md:mb-7.5 bg-secondary-100 w-fit rounded-[30px] px-7.25 py-[5.5px] lg:text-2xl"
				>
					Vision & Mission
				</motion.h3>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="p2 mt-3.5 text-center max-w-2xl mx-auto"
				>
					To improve access to counselling, provide a safe environment,
					streamline scheduling, increase awareness and support growth.
				</motion.p>

				<div className="mt-7.5 lg:mt-15 flex flex-col gap-7.5 lg:flex-row lg:gap-15">
					{/* LEFT SIDE */}
					<motion.div
						className="flex flex-col items-center gap-7.5 flex-1 lg:gap-15 lg:items-start"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: {},
							visible: {
								transition: { staggerChildren: 0.2 },
							},
						}}
					>
						{["Mission", "Vision"].map((item, i) => (
							<motion.div
								key={i}
								variants={{
									hidden: { opacity: 0, y: 40 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.5 }}
							>
								<h4 className="text-xl md:text-2xl lg:text-[32px] font-bold max-lg:text-center">
									Our {item}
								</h4>
								<p className="p2 mt-3.5 md:mt-7.5 max-lg:text-center">
									To provide accessible, high-quality mental health counselling
									and consulting services that empower individuals, couples,
									families, and organisations to achieve lasting wellbeing in a
									safe, professional, and compassionate environment.
								</p>
							</motion.div>
						))}
					</motion.div>

					{/* RIGHT SIDE */}
					<div className="flex-1">
						<motion.h4
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="text-xl text-center md:text-2xl font-bold lg:text-[32px]"
						>
							Our Values
						</motion.h4>

						<motion.ul
							className="mt-7.5 space-y-7.5 lg:space-y-15"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={{
								hidden: {},
								visible: {
									transition: { staggerChildren: 0.12 },
								},
							}}
						>
							{values.map((v, i) => (
								<motion.li
									key={i}
									className="flex gap-3.5 items-center"
									variants={{
										hidden: { opacity: 0, x: 40 },
										visible: { opacity: 1, x: 0 },
									}}
									transition={{ duration: 0.5 }}
								>
									<span className="font-semibold sm:text-lg bg-secondary-100 min-w-10 min-h-10 h-10 w-10 lg:min-h-15 lg:min-w-15 lg:h-15 lg:w-15 rounded-full inline-flex items-center justify-center md:text-lg">
										{i + 1}
									</span>
									<div className="p2">
										<span className="font-bold">{v.title}</span>
										<span>{v.text}</span>
									</div>
								</motion.li>
							))}
						</motion.ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Mission;
