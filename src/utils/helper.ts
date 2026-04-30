export const isActiveRoute = (pathname: string, route: string) => {
	if (route === "/") return pathname === "/"; // special case for home
	return pathname.startsWith(route);
};
