import React from "react";
import styled from "styled-components";
import TopSection from "./SideBarSections/TopSection";
import BottomSection from "./SideBarSections/BottomSection";
import NavigationSection from "./SideBarSections/NavigationSection";

const SideBarBase = styled.div`
	background-color: #2d2d2d;
	height: 100%;
	margin: 0;
	color: #fff;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	z-index: 100;
	overflow-x: auto;
	overflow-y: auto;
`;

export default function SideBarComponent() {
	return (
		<SideBarBase>
			<TopSection />
			<NavigationSection />
			<BottomSection />
		</SideBarBase>
	);
}
