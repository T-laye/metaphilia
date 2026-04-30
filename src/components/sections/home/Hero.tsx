import React from "react";
import Button from "../../ui/Button";

export default function Hero() {
	return (
		<div
			style={{
				backgroundImage:
					"linear-gradient(to top, rgba(0,0,0,0.6)), url('/images/hero-bg.png')",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "65% 100%",
			}}
			className=" pt-20 sm:pt-24"
		>
			<div className="custom-container">
				<div className="md:w-1/2 flex flex-col gap-7.5 pt-16.75 pb-15">
					<div className="border border-neutral-100/10 backdrop-blur-2xl rounded-[30px] w-30 h-8.75 flex items-center justify-center bg-neutral-100/30">
						<span className="text-primary-500 text-base font-medium">
							Metaphilia
						</span>
					</div>

					<div>
						<h1 className="text-neutral-100 font-bold text-[40px] leading-12">
							Your <span className="text-secondary-500">Pathway</span> to
							<br />
							Mental <span className="text-secondary-500"> Wellness</span>
						</h1>
						<p className="p2 text-neutral-100 mt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exe
						</p>
					</div>

					<div className="flex flex-col items-center gap-3.75 sm:flex-row">
						<Button>Book a Session</Button>
						<Button variant="ghost">Book a Session</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
