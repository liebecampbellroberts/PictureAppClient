import React from "react";
import "./Login.css";
import { Box, TextField, Button } from "@mui/material";
import { logIn } from "../../../services/http";

type IsLoggedIn = {
	username?: string | null;
	loadCount?: number;
	message?: string | null;
	passwordValid?: boolean;
};

class LoginPage extends React.Component<any, IsLoggedIn> {
	constructor(props: any) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = {
			message: null,
			username: null,
		};
	}

	private async onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		const { username, password } = e.target as HTMLFormElement;
		e.preventDefault();
		const isLoggedIn: IsLoggedIn = await logIn({
			username: username.value,
			password: password.value,
		});

		this.props.setIsLoggedIn(!!isLoggedIn.username);
		this.setState({ message: isLoggedIn.message });
		if (!!isLoggedIn.username) this.props.history.push("/");
	}

	render() {
		return (
			<>
				<Box
					component="form"
					sx={{
						"& > :not(style)": { m: 1, width: "25ch" },
					}}
					noValidate
					autoComplete="off"
					onSubmit={this.onFormSubmit}
				>
					<TextField label="Username" variant="outlined" name="username" />
					<TextField
						label="Password"
						variant="outlined"
						type="password"
						name="password"
					/>
					<Button type="submit" variant="contained">
						Login
					</Button>
				</Box>
				<div>{this.state.message}</div>
			</>
		);
	}
}

export default LoginPage;
