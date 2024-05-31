import { useState, useEffect } from "react";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [errors, setErrors] = useState({});

	const validateEmail = (email) => {
		const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return re.test(String(email).toLowerCase());
	};

	const validatePassword = (password) => {
		return password.length >= 6;
	};

	const validatePhone = (phone) => {
		const re = /^\d{10}$/;
		return re.test(String(phone));
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

	useEffect(() => {
		const newErrors = { ...errors };
		if (phone && !validatePhone(phone)) {
			newErrors.phone = "Phone number must be 10 digits";
		} else {
			delete newErrors.phone;
		}
		setErrors(newErrors);
	}, [phone]);

	const handleSubmit = () => {
		const newErrors = {};
		if (!validateEmail(email)) {
			newErrors.email = "Invalid email address";
		}
		if (!validatePassword(password)) {
			newErrors.password = "Password must be at least 6 characters";
		}
		if (!validatePhone(phone)) {
			newErrors.phone = "Phone number must be 10 digits";
		}

		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			// Handle successful signup
			console.log("Form submitted successfully");
		}
	};

	return (
		<div className="bg-[rgba(245,245,245,1)] py-[50px] px-[60px] flex gap-[20px] flex-col">
			<div className="w-full flex">
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

			<div className="w-full flex">
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
			<div className="w-full flex">
				<label
					htmlFor="phone"
					className="text-[20px] w-[30%] font-bold"
				>
					Phone:{" "}
				</label>
				<div className="w-[70%] pb-[10px] relative">
					<input
						id="phone"
						type="text"
						className="w-[100%] px-[20px] py-[10px] rounded-[10px] outline-none bg-red-100"
						placeholder="Enter your phone number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					{errors.phone && (
						<p className="text-red-500 text-[10px] absolute bottom-[-5px]">{errors.phone}</p>
					)}
				</div>
			</div>

			<p className="text-center my-[15px] text-[12px]">
				By submitting, I accept NAME`s terms of use
			</p>
			<button
				className="w-full text-center bg-red-500 py-[10px] font-[600] text-[white] rounded-[10px] mb-[10px]"
				onClick={handleSubmit}
			>
				SIGN UP
			</button>
		</div>
	);
};

export default Signup;
