import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { pageRoutes } from "../lib/routes";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="overflow-hidden pb-10">
			{/* <div className="animate-float -scale-x-100  -top-13.5 -left-16 lg:-top-28 lg:-left-12  h-32.5 md:h-44 lg:h-62"> */}
			<div className="relative animate-float -scale-x-100  h-60 lg:h-101 lg:bgred-400 -z-10">
				{/* <div className="relative animate-float -scale-x-100  h-60 -mr-75"> */}
				<Image
					alt="green flower"
					src="/images/flower-green.svg"
					height={300}
					width={300}
					className="absolute h-full w-full object-contain -top-5 left-[-40%] sm:left-[-45%] xl:left-[-47%]"
				/>
			</div>
			<div className="custom-container -mt-22">
				<div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm sm:gap-10 sm:text-base md:gap-20 xl:text-lg">
					{/* logo */}
					<div>
						<Logo />
						<p className="mt-4 leading-6 text-sm md:text-base">
							Professional, safe and accessible mental health counselling and
							consulting built around you. We exist for people who are ready to
							understand themselves better, improve their relationships, and
							live healthier, more balanced lives.
						</p>
					</div>

					<div className="flex gap-12 sm:gap-20 lg:gap-20 xl:gap-24 max-[315px]:flex-col max-[315px]:gap-8">
						{/* Services */}
						<div className="md:order-2">
							<h4 className="font-bold">Our Services</h4>
							<div className="flex flex-col mt-5 gap-5 md:mt-1 md:gap-0">
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href={pageRoutes.ABOUT}
								>
									Individual Therapy
								</Link>
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href={pageRoutes.SERVICES}
								>
									Pre-marital Counselling
								</Link>
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href={pageRoutes.SERVICES}
								>
									Marital Counselling
								</Link>
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href={pageRoutes.SERVICES}
								>
									Organizational Coaching
								</Link>
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href={pageRoutes.SERVICES}
								>
									Family Counselling
								</Link>
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href={pageRoutes.SERVICES}
								>
									Leadership Coaching
								</Link>
							</div>
						</div>
						{/* Company */}
						<div>
							<h4 className="font-bold">Company</h4>
							<div className="flex flex-col mt-5 gap-5 md:mt-1 md:gap-0">
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href={pageRoutes.ABOUT}
								>
									About Us
								</Link>
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href={pageRoutes.SERVICES}
								>
									Services
								</Link>
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href={pageRoutes.SERVICES}
								>
									Impact
								</Link>
							</div>
						</div>
					</div>

					{/* Contacts */}
					<div className="flex items-center lg:items-start flex-col max-lg:col-span-3">
						<h4 className="font-bold">Contacts</h4>
						<div className="flex flex-col mt-5 lg:mt-0 gap-5 lg:gap-0 items-center lg:items-start">
							<p>
								Email:{" "}
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href="mailto:info@metaphiliaconsult.com"
								>
									info@metaphiliaconsult.com
								</Link>
							</p>
							<p>
								Phone:{" "}
								<Link
									className="whitespace-nowrap hover:text-primary-500 hover:font-semibold duration-150"
									href="tel:+2348139353850"
								>
									+234 813 935 3850
								</Link>
							</p>
							<div className="flex text-lg gap-5 mt-2">
								<Link
									className="hover:text-primary-500 hover:scale-150 duration-150"
									href="#"
								>
									<FaFacebookSquare />
								</Link>
								<Link
									className="hover:text-primary-500 hover:scale-150 duration-150"
									href="#"
								>
									<AiFillInstagram />
								</Link>
								<Link
									className="hover:text-primary-500 hover:scale-150 duration-150"
									href="#"
								>
									<FaYoutube />
								</Link>
								<Link
									className="hover:text-primary-500 hover:scale-150 duration-150"
									href="#"
								>
									<FaLinkedin />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div>
					<p className="text-center text-sm mt-9 sm:text-base md:mt-16 lg:text-lg">
						&copy;2025Metaphilia Consult Limited. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
