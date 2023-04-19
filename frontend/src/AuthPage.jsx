import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
	const [username, setUsername] = useState();
	const [secret, setSecret] = useState();
	const [email, setEmail] = useState();
	const [first_name, setFirstName] = useState();
	const [last_name, setLastName] = useState();

	const onLogin = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3001/login", { username, secret })
			.then((r) => props.onAuth({ ...r.data, secret }))
			.catch((e) => console.log(JSON.stringify(e.response.data)));
	};

	const onSignup = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:3001/signup", {
				username,
				secret,
				email,
				first_name,
				last_name,
			})
			.then((r) => props.onAuth({ ...r.data, secret }))
			.catch((e) => console.log(JSON.stringify(e.response.data)));
	};

	return (
		<div className="login-page bg-gradient-to-b from-blue-500 to-cyan-500 min-h-screen flex justify-center">
			<div className="card h-[100%] flex flex-col p-10 w-full md:w-[50%] ">
				{/* Login Form */}
				<form onSubmit={onLogin} className="flex flex-col space-y-4">
					<div className="title text-3xl text-center text-white">LOGIN</div>
					<input
						type="text"
						name="username"
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
						className="rounded-lg p-4"
					/>
					<input
						type="password"
						name="secret"
						placeholder="Password"
						onChange={(e) => setSecret(e.target.value)}
						className="rounded-lg p-4"
					/>
					<button
						type="submit"
						className=" bg-slate-950 rounded-lg p-4 text-white"
					>
						LOG IN
					</button>
				</form>
				<div className="title text-2xl py-10 text-center"> or</div>

				{/* Sign Up Form */}
				<form onSubmit={onSignup} className="flex flex-col space-y-4">
					<div className="title text-3xl text-center text-white">SIGN UP</div>
					<input
						type="text"
						name="username"
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
						className="rounded-lg p-4"
					/>
					<input
						type="password"
						name="secret"
						placeholder="Password"
						onChange={(e) => setSecret(e.target.value)}
						className="rounded-lg p-4"
					/>
					<input
						type="text"
						name="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						className="rounded-lg p-4"
					/>
					<input
						type="text"
						name="first_name"
						placeholder="First name"
						onChange={(e) => setFirstName(e.target.value)}
						className="rounded-lg p-4"
					/>
					<input
						type="text"
						name="last_name"
						placeholder="Last name"
						onChange={(e) => setLastName(e.target.value)}
						className="rounded-lg p-4"
					/>
					<button
						type="submit"
						className=" bg-slate-950 rounded-lg p-4 text-white"
					>
						SIGN UP
					</button>
				</form>
			</div>
		</div>
	);
};

export default AuthPage;
