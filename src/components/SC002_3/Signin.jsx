import { FaApple, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const validateEmail = (email) => {
		const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return re.test(String(email).toLowerCase());
	};

	const validatePassword = (password) => {
		return password.length >= 6;
	};

	useEffect(() => {
		const newErrors = { ...errors };
		if (email && !validateEmail(email)) {
			newErrors.email = "Invalid email address";
		} else {
			delete newErrors.email;
		}
		setErrors(newErrors);
	}, [email]);

	useEffect(() => {
		const newErrors = { ...errors };
		if (password && !validatePassword(password)) {
			newErrors.password = "Password must be at least 6 characters";
		} else {
			delete newErrors.password;
		}
		setErrors(newErrors);
	}, [password]);

	const handleSubmit = () => {
		const newErrors = {};
		if (!validateEmail(email)) {
			newErrors.email = "Invalid email address";
		}
		if (!validatePassword(password)) {
			newErrors.password = "Password must be at least 6 characters";
		}
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			const users = JSON.parse(localStorage.getItem("users")) || [];
			const user = users.find(
				(user) => user.email === email && user.password === password
			);

			if (user) {
				localStorage.setItem("user",JSON.stringify(user));
				navigate("/");
			} else {
				setErrors({ general: "Invalid email or password" });
				setTimeout(()=>{
					setErrors({ general: "" });
				},[2000])
			}
		}
	};

	return (
		<div className="bg-[rgba(245,245,245,1)] py-[50px] px-[80px]">
			{/* Input Email */}
			<div className="w-full flex mb-[20px]">
				<label
					htmlFor="email"
					className="text-[20px] w-[30%] font-bold"
				>
					User name:{" "}
				</label>
				<div className="w-[70%] pb-[10px] relative">
					<input
						id="email"
						type="text"
						className="w-[100%] px-[20px] py-[10px] rounded-[10px] outline-none bg-red-100"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					{errors.email && (
						<p className="text-red-500 text-[10px] absolute bottom-[-5px]">
							{errors.email}
						</p>
					)}
				</div>
			</div>
			{/* Input Password */}
			<div className="w-full flex mb-[20px]">
				<label
					htmlFor="password"
					className="text-[20px] w-[30%] font-bold"
				>
					Password:{" "}
				</label>
				<div className="w-[70%] pb-[10px] relative">
					<input
						id="password"
						type="password"
						className="w-[100%] px-[20px] py-[10px] rounded-[10px] outline-none bg-red-100"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{errors.password && (
						<p className="text-red-500 text-[10px] absolute bottom-[-5px]">
							{errors.password}
						</p>
					)}
				</div>
			</div>

			{errors.general && (
				<p className="text-red-500 text-center">{errors.general}</p>
			)}

			<button
				className="w-full text-center bg-red-500 py-[10px] font-[600] text-[white] rounded-[10px] mb-[10px]"
				onClick={handleSubmit}
			>
				SIGN IN
			</button>
			<p className="text-center font-[500] text-[red]">
				Forgot your password?
			</p>
			<p>Or connect with:</p>
			<ul className="flex items-center justify-center gap-[50px] mt-[20px] text-[35px]">
				<li>
					<FaApple />
				</li>
				<li>
					<FaFacebook />
				</li>
				<li>
					<FcGoogle />
				</li>
			</ul>
		</div>
	);
};

export default Signin;
