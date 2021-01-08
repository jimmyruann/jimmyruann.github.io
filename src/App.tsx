import React, { useState } from "react";

import SideBarComponent from "./components/SideBarComponent";
import NavigationContext from "./context/NavigationContext";

import AboutMePage from "./components/Pages/AboutMePage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import ContactPage from "./components/Pages/ContactPage";

import { Row, Col } from "react-bootstrap";

import styled from "styled-components";

const SideBarCol = styled(Col)`
	padding: 0;
	max-width: 300px;
	background-color: #2d2d2d;
	@media (max-width: 767.98px) {
		max-width: 100%;
	}
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
				<Row className="m-0 d-flex h-100">
					<SideBarCol md={6} lg={4}>
						<SideBarComponent />
					</SideBarCol>
					<Col md={6} lg={8} className="p-0 mw-100 flex-grow-1">
						{renderPage(page)}
					</Col>
				</Row>
			</NavigationContext.Provider>
		</>
	);
}
