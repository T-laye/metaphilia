"use client";

import Link from "next/link";
import React from "react";

type ButtonProps = {
	children: React.ReactNode;
	href?: string;
	className?: string;
	target?: string;
	variant?: "primary" | "secondary" | "ghost" | "reverse";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
	"inline-flex items-center justify-center rounded-[30px] px-10 py-[14px]  lgpx-12 lgpy-[18px] text-sm lg:text-base cursor-pointer transition-all duration-300 whitespace-nowrap font-semibold lg:font-bold hover:scale-105 min-w-[150px] active:scale-100";

const variants = {
	primary:
		"bg-primary-500 text-neutral-100 hover:border-primary-600 hover:bg-primary-600 border-2 border-primary-500",
	reverse:
		"bg-neutral-100 text-primary-500 hover:border-primary-500 hover:bg-secondary-100 border-2 border-neutral-100",
	secondary:
		"bg-secondary-500 text-white border-2 border-secondary-500 hover:bg-secondary-600",
	ghost:
		"bg-transparent backdrop-blur-[5px] text-neutral-100 border-2 border-primary-500 hover:bg-neutral-300",
};

const Button = ({
	children,
	href,
	target,
	className = "",
	variant = "primary",
	...props
}: ButtonProps) => {
	const styles = `${baseStyles} ${variants[variant]} ${className}`;

	// 🔥 If href exists → render Link
	if (href) {
		return (
			<Link href={href} target={target} className={styles}>
				{children}
			</Link>
		);
	}

	// 🔥 Otherwise → render button
	return (
		<button className={styles} {...props}>
			{children}
		</button>
	);
};

export default Button;
