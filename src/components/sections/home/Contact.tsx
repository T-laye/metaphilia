import Link from "next/link";
import { LiaClock } from "react-icons/lia";
import { RxEnvelopeClosed } from "react-icons/rx";
import { SlPhone } from "react-icons/sl";
import Button from "../../ui/Button";
import Image from "next/image";

export default function Contact() {
	return (
		<section className="bg-secondary-400">
			<div className="h-6 flex">
				<div className="bg-primary-500 flex-1"></div>
				<div className="bg-secondary-300 h-full flex-1"></div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center xl:grid-cols-4 custom-container text-neutral-100 font-medium text-lg sm:text-xl pt-7.5 pb-10 md:pt-14 md:pb20 gap-7.5 md:gap-15">
				<div className="h-full">
					<LiaClock className="text-3xl md:text-[45px]" />
					<div className="flex flex-col mt-3.5">
						<span>MON - FRI</span>
						<span>8:00AM - 5:00PM</span>
					</div>
				</div>
				<div className="h-full">
					<RxEnvelopeClosed className="text-2xl md:text-[40px]" />
					<div className="mt-3.5">
						<Link href="mailto:INFO@METAPHILIACONSULT.COM" className="">
							INFO@METAPHILIACONSULT.COM
						</Link>
					</div>
				</div>
				<div className="h-full">
					<SlPhone className="text-2xl md:text-[40px]" />
					<div className="mt-3.5">
						<Link href="tel:+2348139353850" className="">
							+234 813 935 3850
						</Link>
					</div>
				</div>

				<div className="flex justify-center items-center h-full">
					<Button variant="reverse" className="">
						Book a Session
					</Button>
				</div>
			</div>
			{/* images */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
				{[1, 2, 3, 4, 5, 6].map((i) => (
					<div key={i} className="w-full h-81.25">
						<Image
							src={`/images/home/contact-${i}.webp`}
							height={500}
							width={500}
							loading="eager"
							alt="contact image"
							className="h-full w-full object-cover object-center"
						/>
					</div>
				))}
			</div>
		</section>
	);
}
