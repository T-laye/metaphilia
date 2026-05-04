import About from "../components/sections/home/About";
import Faq from "../components/sections/home/Faq";
import Hero from "../components/sections/home/Hero";
import Services from "../components/sections/home/Services";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Faq />
		</>
	);
}
