import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import SideBarComponent from "./components/SideBarComponent";
import ContentComponent from "./components/ContentComponent"

const SideBarCol = styled(Col)`
	padding: 0;
	max-width: 275px;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1030;
	@media (max-width: 767.98px) {
		max-width: 100%;
		position: static;
	}
`;

const ContainerCol = styled(Col)`
	padding: 0px;
	margin-left: 275px;
	@media (max-width: 767.98px) {
		margin-left: 0;
	}
`;

export default function App() {
	return (
		<>
			<Row className="m-0 d-flex h-100">
				<SideBarCol md={6} lg={4}>
					<SideBarComponent />
				</SideBarCol>
				<ContainerCol md={6} lg={8} className="mw-100 flex-grow-1">
					<ContentComponent />
				</ContainerCol>
			</Row>
		</>
	);
}
