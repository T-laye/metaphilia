import Mission from "../../components/sections/about/Mission";
import WhoWeAre from "../../components/sections/about/WhoWeAre";
import SubTitle from "../../components/SubTitle";

export default function Page() {
	return (
		<div className="pt-20 lg:pt-24 min-h-screen ">
			<SubTitle title="About Us" breadcrumb="About" />
			<div className="py-15 lg:py-30">
				<WhoWeAre />
				<Mission />
			</div>
		</div>
	);
}
