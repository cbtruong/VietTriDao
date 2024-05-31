import { useState } from "react";
import Menu from "../components/Menu";
import Signin from "../components/SC002_3/Signin";
import Signup from "../components/SC002_3/Signup";

const SC002_3 = () => {
	// choose tab Signin or Signup
	const [login, setLogin] = useState(false);

	return (
		<>
			<Menu />
			<div className="w-full flex items-center justify-center py-[50px] ">
				<div className="w-[40%]  rounded-[20px] overflow-hidden box-border">
					<div className="flex flex-row w-full justify-between mb-[5px]">
						<div
							className={`flex items-center justify-center w-[49%] bg-[rgba(245,245,245,1)] 
                            rounded-b-r-[5px] cursor-pointer ${
								login ? "text-red-500" : ""
							}`}
							onClick={() => setLogin(true)}
						>
							<h3 className="p-[10px] text-[24px] font-[700] cursor-pointer">
								Sign in
							</h3>
						</div>
						<div
							className={`flex items-center justify-center w-[49%] bg-[rgba(245,245,245,1)] rounded-b-r-[5px] cursor-pointer ${
								login ? "" : "text-red-500"
							}`}
							onClick={() => setLogin(false)}
						>
							<h3 className="p-[10px] text-[24px] font-[700] cursor-pointer">
								New Account
							</h3>
						</div>
					</div>
					{login ? <Signin /> : <Signup />}
				</div>
			</div>
		</>
	);
};

export default SC002_3;
