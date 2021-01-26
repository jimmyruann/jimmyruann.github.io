import React from "react";
import styled from "styled-components";
import TopSection from "./SideBarSections/TopSection";
import BottomSection from "./SideBarSections/BottomSection";

const SideBarBase = styled.div`
	background-color: #2d2d2d;
	color: #fff;
	font-family: var(--font-family-sans-serif);
`;

const ResponsiveSideBar = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	min-height: 100vh;
	@media (max-width: 767.98px) {
		min-height: auto;
		width: 350px;
	}
`;

export default function SideBarComponent() {
	return (
		<SideBarBase>
			<ResponsiveSideBar>
				<TopSection />
				<BottomSection />
			</ResponsiveSideBar>
		</SideBarBase>
	);
}
