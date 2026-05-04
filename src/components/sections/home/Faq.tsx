"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { faqDetails } from "../../../lib/contents";

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="py-15 lg:py-30">
			<div className="custom-container">
				<h3 className="mx-auto font-semibold sm:text-lg lg:text-2xl md:font-medium bg-secondary-100 w-fit rounded-[30px] px-11 py-[5.5px] lg:px-15.75 lg:py-3">
					FAQs
				</h3>
				<p className="text-sm sm:text-lg lg:text-xl leading-[170%] lg:w-2/3 mx-auto text-center mt-3.5 md:mt-7.5 lg:px-8">
					Here are honest answers to the questions we hear most often. If yours
					isn&apos;t listed, kindly reach out, we&apos;re always happy to
					discuss.
				</p>

				<motion.div
					className="mt-7.5 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-20 lg:gap-x-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.12,
							},
						},
					}}
				>
					{faqDetails.map((f, i) => (
						<FaqList
							key={i}
							q={f.question}
							a={f.answer}
							isOpen={openIndex === i}
							onClick={() => setOpenIndex(openIndex === i ? null : i)}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
}

function FaqList({
	q,
	a,
	isOpen,
	onClick,
}: {
	q: string;
	a: string;
	isOpen: boolean;
	onClick: () => void;
}) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 40 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div
				className="flex gap-4 items-center justify-between cursor-pointer"
				onClick={onClick}
			>
				<h4 className="text-sm font-bold sm:text-base lg:text-lg">{q}</h4>

				<motion.div
					className="text-xl"
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
				>
					{isOpen ? <FiMinus /> : <FiPlus />}
				</motion.div>
			</div>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						style={{ overflow: "hidden" }}
					>
						<p className="text-sm leading-6 mt-2.5 lg:text-base">{a}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
