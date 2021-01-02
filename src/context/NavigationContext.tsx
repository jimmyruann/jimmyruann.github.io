import React from "react";

const NavigationContext = React.createContext({
	page: "about",
	setPage: (page: "about" | "portfolio" | "contact") => {},
});

export default NavigationContext;
