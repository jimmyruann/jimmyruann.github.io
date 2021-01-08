import React from "react";
import styled from "styled-components";
import TopSection from "./SideBarSections/TopSection";
import BottomSection from "./SideBarSections/BottomSection";
import NavigationSection from "./SideBarSections/NavigationSection";

const SideBarBase = styled.div`
	min-height: 100vh;
	max-width: 50%;
	min-width: 300px;
	margin: 0 auto;
	color: #fff;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	font-family: var(--font-family-sans-serif);
	@media (max-width: 767.98px) {
		min-height: auto;
	}
`;

type ResponsiveNavigationOptions = {
	screen: "desktop" | "mobile";
};

const ResponsiveNavigationBar = styled.div<ResponsiveNavigationOptions>`
	display: ${(props) => (props.screen === "desktop" ? "block" : "none")};
	@media (max-width: 767.98px) {
		display: ${(props) => (props.screen === "desktop" ? "none" : "block")};
	}
`;

export default function SideBarComponent() {
	return (
		<>
			<SideBarBase className="sticky-top">
				<TopSection />
				<ResponsiveNavigationBar screen="desktop">
					<NavigationSection screen="desktop" />
				</ResponsiveNavigationBar>
				<BottomSection />
				<ResponsiveNavigationBar screen="mobile">
					<NavigationSection screen="mobile" />
				</ResponsiveNavigationBar>
			</SideBarBase>
		</>
	);
}
