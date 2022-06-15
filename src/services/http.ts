const logIn = async (body: { username: string; password: string }) => {
	const response = await fetch("http://localhost:9000", {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	const data = await response.json();

	return data;
};

const logOut = async () => {
	const response = await fetch("http://localhost:9000/logOut", {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ logOut: true }),
	});

	const data = await response.json();

	return data;
};

const isLoggedIn = async () => {
	const response = await fetch("http:localhost:9000", {
		method: "GET",
		mode: "cors",
		cache: "no-cache",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await response.json();

	return data;
};

export { logIn, isLoggedIn, logOut };
