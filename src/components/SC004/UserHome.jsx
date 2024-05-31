import { IoHomeSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const UserHome = () => {
	return (
		<>
			<div className="login_body flex justify-center items-center">
				<h1 className="text-[35px] my-[20px] drop-shadow-[0px_2px_2px_rgba(109,109,109,0.8)]">
					For your{" "}
					<span className="text-[red] font-[700]">better life</span>
				</h1>
			</div>
			<div className="w-[100%] py-[20px] bg-[red] text-center">
				<h1 className="font-[600] text-[white] text-[35px] tracking-[1.5px]">
					WELCOME JOHN123!
				</h1>
			</div>
			<div className="w-[100%] my-[30px] px-[250px] flex justify-around items-center flex-wrap truncate">
				<div
					className="text-center flex items-center justify-center flex-col cursor-pointer
                flex-wrap w-[35%] p-[40px] rounded-[20px] border border-solid 
                border-red-500 mb-[20px] gap-[5px]"
				>
					<IoHomeSharp className="text-red-500 text-[40px]" />
					<h3 className="text-[20px] font-bold drop-shadow-[0px_2px_3px_rgba(109,109,109,0.8)]">
						By homes
					</h3>
					<p className=" w-full text-wrap text-[20px]">
						Find your place with an immersive photo experience and
						the most listing, including things you won’t find
						anywhere else
					</p>
				</div>

				<div
					className="text-center flex items-center justify-center flex-col cursor-pointer
                flex-wrap w-[35%] p-[40px] rounded-[20px] border border-solid 
                border-red-500 mb-[20px] gap-[5px]"
				>
					<MdAttachMoney className="text-red-500 text-[40px]" />
					<h3 className="text-[20px] font-bold drop-shadow-[0px_2px_3px_rgba(109,109,109,0.8)]">
                    Sell homes homes
					</h3>
					<p className=" w-full text-wrap text-[20px]">
						Find your place with an immersive photo experience and
						the most listing, including things you won’t find
						anywhere else
					</p>
				</div>
				<div
					className="text-center flex items-center justify-center flex-col cursor-pointer
                flex-wrap w-[35%] p-[40px] rounded-[20px] border border-solid 
                border-red-500 mb-[20px] gap-[5px]"
				>
					<MdAttachMoney className="text-red-500 text-[40px]" />
					<h3 className="text-[20px] font-bold drop-shadow-[0px_2px_3px_rgba(109,109,109,0.8)]">
                    Contracts
					</h3>
					<p className=" w-full text-wrap text-[20px]">
						Find your place with an immersive photo experience and
						the most listing, including things you won’t find
						anywhere else
					</p>
				</div>
				<div
					className="text-center flex items-center justify-center flex-col cursor-pointer
                flex-wrap w-[35%] p-[40px] rounded-[20px] border border-solid 
                border-red-500 mb-[20px] gap-[5px]"
				>
					<FaUser className="text-red-500 text-[40px]" />
					<h3 className="text-[20px] font-bold drop-shadow-[0px_2px_3px_rgba(109,109,109,0.8)]">
                    Personal information
					</h3>
					<p className=" w-full text-wrap text-[20px]">
						Find your place with an immersive photo experience and
						the most listing, including things you won’t find
						anywhere else
					</p>
				</div>
			</div>
		</>
	);
};

export default UserHome;
