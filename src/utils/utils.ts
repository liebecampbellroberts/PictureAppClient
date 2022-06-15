const checkLoggedInLocalStorage = () =>
	localStorage.getItem("picture-app") === "true";

const setLoggedInLocalStorage = (loggedIn: boolean) =>
	localStorage.setItem("picture-app", `${loggedIn}`);

export { checkLoggedInLocalStorage, setLoggedInLocalStorage };
