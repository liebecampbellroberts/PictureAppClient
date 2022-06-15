import React from "react";
import { Redirect, Route } from "react-router-dom";

interface ProtectedProps {
	isLoggedIn: boolean;
	children: React.ReactNode;
}

const Protected: any = ({ isLoggedIn = false, children }: ProtectedProps) => {
	return (
		<Route
			render={() => {
				return !isLoggedIn ? <Redirect to={{ pathname: "login" }} /> : children;
			}}
		/>
	);
};

export default Protected;
