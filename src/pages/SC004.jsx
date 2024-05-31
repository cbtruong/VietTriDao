
import Menu from "../components/Menu";
import Slide from "../assets/slider.png";
import UserHome from "../components/SC004/UserHome";

const SC004 = () => {
	

	return (
		<div>
			<Menu  />
			<img
				src={Slide}
				alt=""
				className="w-[100%] backdrop-sepia bg-white/30 "
			/>
			<UserHome />
		</div>
	);
};

export default SC004;
