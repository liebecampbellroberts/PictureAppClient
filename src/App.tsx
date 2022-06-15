import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/home";
import LoginPage from "./components/pages/login";
import Protected from "./routes";
import { Link as MuiLink } from "@mui/material";
import { logOut as logOutUser } from "./services/http";
import {
	checkLoggedInLocalStorage,
	setLoggedInLocalStorage,
} from "./utils/utils";

const startAutoLogOut = (
	setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const autoLogout = setInterval(async () => {
		setLoggedInLocalStorage(false);
		setLoggedIn(false);
	}, 60 * 1000);

	return {
		stop: () => clearInterval(autoLogout),
	};
};

const logOut = (
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
) => {
	setIsLoggedIn(false);
	setLoggedInLocalStorage(false);
	logOutUser();
};

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(checkLoggedInLocalStorage());

	useEffect(() => {
		if (isLoggedIn) {
			setLoggedInLocalStorage(true);
			const checkLoggedIn = startAutoLogOut(setIsLoggedIn);
			return () => checkLoggedIn.stop();
		} else {
			setLoggedInLocalStorage(false);
		}
	}, [isLoggedIn]);

	return (
		<Router>
			<div>
				<header className="AppHeader">
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								{isLoggedIn ? (
									<MuiLink onClick={() => logOut(setIsLoggedIn)}>
										Logout
									</MuiLink>
								) : (
									<Link to="/login">Login</Link>
								)}
							</li>
						</ul>
					</nav>
				</header>
				<main className="AppMain">
					<Switch>
						<Route
							path="/login"
							render={(routeProps) => (
								<LoginPage setIsLoggedIn={setIsLoggedIn} {...routeProps} />
							)}
						/>
						<Route path="/">
							<Protected isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
								<HomePage />
							</Protected>
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
