import React, { useState } from "react";
import styled from "styled-components";

import SideBarComponent from "./components/SideBarComponent";
import NavigationContext from "./context/NavigationContext";

import AboutMePage from "./components/Pages/AboutMePage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import ContactPage from "./components/Pages/ContactPage";

const SideBarWrapper = styled.div`
	width: 300px;
	height: 100vh;
	position: fixed;
`;

const ContentWrapper = styled.div`
	width: 100%;
	padding-left: 300px;
`;

const PageWrapper = styled.div`
	padding: 2rem;
`;

export default function App() {
	const [page, setPage] = useState("about");

	const renderPage = (page: string) => {
		switch (page) {
			case "about":
				return <AboutMePage />;
			case "portfolio":
				return <PortfolioPage />;
			case "contact":
				return <ContactPage />;
		}
	};

	return (
		<>
			<NavigationContext.Provider value={{ page, setPage }}>
				<SideBarWrapper>
					<SideBarComponent />
				</SideBarWrapper>
				<ContentWrapper>
					<PageWrapper>{renderPage(page)}</PageWrapper>
				</ContentWrapper>
			</NavigationContext.Provider>
		</>
	);
}
