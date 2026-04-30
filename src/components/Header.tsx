"use client";
import Link from "next/link";
import { pageRoutes } from "../lib/routes";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { isActiveRoute } from "../utils/helper";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const navLinks = [
	{
		title: "Home",
		route: pageRoutes.HOME,
	},
	{
		title: "About Us",
		route: pageRoutes.ABOUT,
	},
	{
		title: "Services",
		route: pageRoutes.SERVICES,
	},
	{
		title: "Impact",
		route: pageRoutes.IMPACT,
	},
	{
		title: "Contact Us",
		route: pageRoutes.CONTACT,
	},
];

function NavItem({
	link,
	onClick,
	isTransparent,
}: {
	link: { title: string; route: string };
	onClick?: () => void;
	isTransparent: boolean;
}) {
	const pathname = usePathname();
	const [hovered, setHovered] = useState<string | null>(null);
	const isActive = isActiveRoute(pathname, link.route);
	const isHovered = hovered === link.route;
	const showUnderline = isActive || isHovered;

	return (
		<motion.li layout className="flex">
			<Link
				onMouseEnter={() => setHovered(link.route)}
				onMouseLeave={() => setHovered(null)}
				href={link.route}
				onClick={onClick}
				className="relative flex flex-col items-center justify-center h-8"
			>
				<span
					className={`mb-2.5 whitespace-nowrap ${
						isActive
							? "text-primary-500 font-semibold"
							: !isTransparent
								? "text-neutral-500"
								: "text-neutral-100"
					}`}
				>
					{link.title}
				</span>

				{showUnderline && (
					<motion.span
						layoutId="nav-underline"
						layout="position"
						className="absolute bottom-0 h-0.5 w-22 bg-primary-500 rounded-[5px]"
						transition={{
							type: "spring",
							stiffness: 500,
							damping: 30,
						}}
					/>
				)}
			</Link>
		</motion.li>
	);
}

function MobileNavItem({
	link,
	index,
	onClick,
}: {
	link: { title: string; route: string };
	index: number;
	onClick: () => void;
}) {
	const pathname = usePathname();
	const isActive = isActiveRoute(pathname, link.route);

	return (
		<motion.li
			initial={{ opacity: 0, x: -24 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{
				delay: 0.05 * index,
				type: "spring",
				stiffness: 400,
				damping: 28,
			}}
		>
			<Link
				href={link.route}
				onClick={onClick}
				className={`flex items-center justify-between py-4 border-b group ${isActive ? "border-primary-500" : "border-neutral-200"}`}
			>
				<span
					className={`text-lg font-medium transition-colors ${
						isActive ? "text-primary-500" : "text-neutral-500"
					} group-hover:text-primary-500`}
				>
					{link.title}
				</span>
				{isActive && (
					<span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
				)}
			</Link>
		</motion.li>
	);
}

const Header = () => {
	const pathname = usePathname();
	const isHome = pathname === pageRoutes.HOME;

	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		if (!isHome) return;
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [isHome]);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMobileOpen(false);
	}, [pathname]);

	useEffect(() => {
		document.body.style.overflow = mobileOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	const isTransparent = isHome && !scrolled;

	return (
		<>
			<motion.header
				className="py-5 fixed inset-x-0 top-0 z-50 transition-colors duration-300"
				animate={{
					backgroundColor: isTransparent
						? "rgba(255,255,255,0)"
						: "rgba(255,255,255,1)",
					boxShadow: isTransparent
						? "0 0 0 0 rgba(0,0,0,0)"
						: "0 1px 12px 0 rgba(0,0,0,0.08)",
				}}
				transition={{ duration: 0.3 }}
			>
				<div className="custom-container flex gap-10 justify-between items-center h-full">
					<div>
						<Logo variant={isTransparent ? "white" : "primary"} />
					</div>

					<nav className="flex items-center gap-7 max-lg:hidden">
						{/* layoutRoot scopes layoutId="nav-underline" to this subtree only,
						    preventing Framer Motion from animating across unrelated re-renders */}
						<motion.ul layoutRoot className="flex items-center lg:gap-12">
							{navLinks.map((link) => (
								<NavItem
									key={link.route}
									link={link}
									isTransparent={isTransparent}
								/>
							))}
						</motion.ul>
						<div>
							<Button>Book a Session</Button>
						</div>
					</nav>

					<button
						className="lg:hidden flex items-center justify-center p-1 focus:outline-none"
						onClick={() => setMobileOpen((prev) => !prev)}
						aria-label={mobileOpen ? "Close menu" : "Open menu"}
					>
						<AnimatePresence mode="wait" initial={false}>
							{mobileOpen ? (
								<motion.span
									key="close"
									initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
									animate={{ opacity: 1, rotate: 0, scale: 1 }}
									exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
									transition={{ duration: 0.18 }}
								>
									<HiX
										className={`text-3xl ${
											isTransparent ? "text-neutral-100" : "text-neutral-800"
										}`}
									/>
								</motion.span>
							) : (
								<motion.span
									key="menu"
									initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
									animate={{ opacity: 1, rotate: 0, scale: 1 }}
									exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
									transition={{ duration: 0.18 }}
								>
									<HiOutlineMenu
										className={`text-3xl ${
											isTransparent ? "text-neutral-100" : "text-primary-500"
										}`}
									/>
								</motion.span>
							)}
						</AnimatePresence>
					</button>
				</div>
			</motion.header>

			<AnimatePresence>
				{mobileOpen && (
					<>
						<motion.div
							key="backdrop"
							className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm lg:hidden"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
							onClick={() => setMobileOpen(false)}
						/>

						<motion.div
							key="drawer"
							className="fixed top-0 right-0 z-100 h-full w-[75vw] max-w-xs bg-neutral-100 flex flex-col lg:hidden shadow-2xl"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{
								type: "spring",
								stiffness: 380,
								damping: 36,
							}}
						>
							<div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
								<Logo variant="primary" />
								<button
									onClick={() => setMobileOpen(false)}
									aria-label="Close menu"
									className="p-1"
								>
									<motion.span
										initial={{ opacity: 0, rotate: -90 }}
										animate={{ opacity: 1, rotate: 0 }}
										transition={{ delay: 0.15 }}
									>
										<HiX className="text-2xl text-neutral-500" />
									</motion.span>
								</button>
							</div>

							<nav className="flex-1 overflow-y-auto px-6 pt-4">
								<ul>
									{navLinks.map((link, i) => (
										<MobileNavItem
											key={link.route}
											link={link}
											index={i}
											onClick={() => setMobileOpen(false)}
										/>
									))}
								</ul>
							</nav>

							<motion.div
								className="px-6 py-6 border-t border-neutral-200"
								initial={{ opacity: 0, y: 16 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.3 }}
							>
								<Button className="w-full justify-center">
									Book a Session
								</Button>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
