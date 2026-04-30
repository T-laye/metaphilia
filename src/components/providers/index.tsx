"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		// <MotionConfig reducedMotion="never">
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				// initial={{ opacity: 0, scale: 0.98 }}
				// animate={{ opacity: 1, scale: 1 }}
				// exit={{ opacity: 0, scale: 0.98 }}
				// initial={{ scale: 0.98 }}
				// animate={{ scale: 1 }}
				// exit={{ scale: 0.98 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className="min-h-full"
			>
				{children}
			</motion.div>
		</AnimatePresence>
		// </MotionConfig>
	);
}
