export const isActiveRoute = (pathname: string, route: string) => {
	if (route === "/") return pathname === "/"; // special case for home
	return pathname.startsWith(route);
};

export function formatCurrency(value: number | string, currency = "NGN") {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(Number(value));
}

// formatCurrency(45000);
// "₦45,000.00"
// formatCurrency(45000); // "45,000"
