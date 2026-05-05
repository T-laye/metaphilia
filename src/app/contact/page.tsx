"use client";
import SubTitle from "../../components/SubTitle";
import { SlPhone } from "react-icons/sl";
import Link from "next/link";
import { contactDetails, serviceDetails } from "../../lib/contents";
import { RxEnvelopeClosed } from "react-icons/rx";
import { LiaClock } from "react-icons/lia";
import Button from "../../components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
	name: z.string().min(2, "Name is required"),
	email: z.string().email("Enter a valid email"),
	service: z.string().min(1, "Please select a service"),
	message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

function ContactForm() {
	const [success, setSuccess] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isValid },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		mode: "onChange", // 👈 required for isValid to work live
	});

	const onSubmit = async (data: FormData) => {
		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
					name: data.name,
					email: data.email,
					service: data.service,
					message: data.message,
					subject: "New Contact Form Submission",
				}),
			});

			const result = await res.json();

			if (result.success) {
				toast.success("Message sent successfully!");
				setSuccess(true);
				reset();

				setTimeout(() => setSuccess(false), 3000);
			} else {
				throw new Error(result.message);
			}
		} catch (error) {
			toast.error("Something went wrong. Try again.");
			console.error(error);
		}
	};

	return (
		<AnimatePresence mode="wait">
			{success ? (
				<motion.div
					key="success"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 0.4 }}
					className="w-full flex flex-col items-center justify-center gap-4 mt-5"
				>
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: "spring", stiffness: 200, damping: 10 }}
						className="text-4xl"
					>
						✅
					</motion.div>
					<p className="text-sm">Your message has been sent!</p>
				</motion.div>
			) : (
				<motion.form
					key="form"
					onSubmit={handleSubmit(onSubmit)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="w-full flex flex-col gap-5 mt-5"
				>
					<input
						placeholder="Your Name"
						type="text"
						{...register("name")}
						className="input-class"
					/>
					{errors.name && (
						<p className="text-red-500 text-xs">{errors.name.message}</p>
					)}

					<input
						placeholder="Email Address"
						type="text"
						{...register("email")}
						className="input-class"
					/>
					{errors.email && (
						<p className="text-red-500 text-xs">{errors.email.message}</p>
					)}

					<select {...register("service")} className="select-class">
						<option value="">Service Type</option>
						{serviceDetails.map((s, i) => (
							<option key={i} value={s.title}>
								{s.title}
							</option>
						))}
					</select>
					{errors.service && (
						<p className="text-red-500 text-xs">{errors.service.message}</p>
					)}

					<textarea
						placeholder="Write your message"
						{...register("message")}
						className="textarea"
					></textarea>
					{errors.message && (
						<p className="text-red-500 text-xs">{errors.message.message}</p>
					)}

					<div className="flex justify-center">
						<Button type="submit" disabled={!isValid || isSubmitting}>
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</div>
				</motion.form>
			)}
		</AnimatePresence>
	);
}

export default function Page() {
	return (
		<div className="pt-20 lg:pt-24 min-h-[50vh] ">
			<SubTitle title="Contact Us" breadcrumb="Contact us" />

			<div className="custom-container py-15">
				<div>
					<motion.h3
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="mx-auto font-semibold sm:text-lg mb-3.5 md:mb-7.5 bg-secondary-100 w-fit rounded-[30px] px-7.25 py-[5.5px] lg:text-2xl"
					>
						Contact Form
					</motion.h3>

					<h2 className="text-center text-2xl leading-10 font-bold mb-3.5 lg:text-[32px]">
						Get In Touch
					</h2>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="p2 mt-3.5 text-center max-w-2xl mx-auto"
					>
						Whether you&apos;re ready to book a session, want to ask a question
						first, or are enquiring on behalf of your organisation, we&apos;d
						love to hear from you. Reaching out is the first and most important
						step. We&apos;ll make everything after that as easy as possible.
					</motion.p>

					<div className="mt-7.5">
						<div className="flex gap-3.5">
							<div className="h-10 w-10 bg-primary-500 text-neutral-100 flex items-center justify-center">
								<SlPhone className="text-2xl md:text-[40px]" />
							</div>
							<div className="flex flex-col gap-1.5">
								<h5 className="text-primary-500 font-semibold text-xl">
									PHONE:
								</h5>
								<Link
									className="text-base"
									href={`tel:${contactDetails.phone}`}
								>
									{contactDetails.phone}
								</Link>
							</div>
						</div>
						<div className="flex gap-3.5 mt-7.5">
							<div className="h-10 w-10 bg-primary-500 text-neutral-100 flex items-center justify-center">
								<RxEnvelopeClosed className="text-2xl md:text-[40px]" />
							</div>
							<div className="flex flex-col gap-1.5">
								<h5 className="text-primary-500 font-semibold text-xl">
									EMAIL:
								</h5>
								<Link
									className="text-base"
									href={`mailto:${contactDetails.email}`}
								>
									{contactDetails.email}
								</Link>
							</div>
						</div>
						<div className="flex gap-3.5 mt-7.5">
							<div className="h-10 min-w-10 w-10 bg-primary-500 text-neutral-100 flex items-center justify-center">
								<LiaClock className="text-3xl md:text-[45px]" />
							</div>
							<div className="flex flex-col gap-1.5">
								<h5 className="text-primary-500 font-semibold text-xl">
									OFFICE HOURS:
								</h5>
								<p className="text-base">
									Monday – Friday: 8:00 AM – 5:00 PM <br /> Saturday: 9:00 AM –
									2:00 PM <br /> Sunday: Closed <br /> (Virtual sessions
									available outside office hours by appointment)
								</p>
							</div>
						</div>
						<div className="flex gap-3.5 mt-7.5">
							{/* <div className="h-10 min-w-10 w-10 bg-primary-500 text-neutral-100 flex items-center justify-center">
								<LiaClock className="text-3xl md:text-[45px]" />
							</div> */}
							{/* <div className="flex flex-col gap-1.5">
								<h5 className="text-primary-500 font-semibold text-xl">
									Free Discovery Call
								</h5>
								<p className="text-base">
									Not Sure Where to Start? <br /> Book a free 15-minute
									discovery call and have a chance to ask your questions and
									find the right path forward with one of our counsellors.
								</p>

								<div className="mt-3.5">
									<Button>Book a Session</Button>
								</div>
							</div> */}
						</div>
					</div>
				</div>

				<div className="bg-secondary-100 rounded-[20px] p-7.5 mt-7.5">
					<h4 className="text-xl md:text-2xl font-bold">Send us a message</h4>
					<p className="p2 mt-1.5">
						Have an inquiry, partnership proposal, or a general question? Fill
						out the form below and we will get back to you promptly.
					</p>

					<ContactForm />
					{/* <form action="" className="w-full flex flex-col gap-5 mt-5">
						<input
							placeholder="Your Name"
							type="text"
							required
							className="input-class"
						/>
						<input
							placeholder="Email Address"
							type="text"
							required
							className="input-class"
						/>
						<select className="select-class">
							<option value="">Service Type</option>
							{serviceDetails.map((s, i) => (
								<option key={i} value={s.title}>
									{s.title}
								</option>
							))}
						</select>

						<textarea
							placeholder="Write your message"
							required
							className="textarea"
						></textarea>

						<div className="flex justify-center">
							<Button>Send Message</Button>
						</div>
					</form> */}
				</div>
			</div>
		</div>
	);
}
