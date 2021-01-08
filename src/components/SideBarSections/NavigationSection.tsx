import React, { useContext } from "react";
import styled, { css } from "styled-components";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import WorkIcon from "@material-ui/icons/Work";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import { Col, Row } from "react-bootstrap";

import NavigationContext from "../../context/NavigationContext";

interface NavigationOptionProps {
	readonly active?: boolean;
}

const SideBarNavigationSection = styled.div`
	display: flex;
	flex-direction: column;
`;

const activeCSS = css<NavigationOptionProps>`
	background-color: ${(props) => (props.active ? "white" : "#2d2d2d")};
	color: ${(props) => (props.active ? "#2d2d2d" : "white")};
	${(props) => (!props.active ? `&:hover {background-color: #626567;cursor: pointer;}` : ``)};
	transition: all 0.15s ease-in;
`;

const NavigationOption = styled(Col)<NavigationOptionProps>`
	padding: 0.3rem 2rem;
	display: flex;
	align-items: center;
	${activeCSS}
`;

const NavigationOptionText = styled.span`
	text-transform: uppercase;
	font-size: 20px;
	margin-left: 1rem;
`;

const SideBarNavigationSectionMobile = styled(SideBarNavigationSection)`
	flex-direction: row;
`;

const NavigationOptionMobile = styled(NavigationOption)<NavigationOptionProps>`
	padding: 0.3rem 0;
	justify-content: center;
`;

export default function NavigationSection(props: { screen: "desktop" | "mobile" }) {
	const { page, setPage } = useContext(NavigationContext);

	function handleOnClick(page: "about" | "portfolio" | "contact") {
		setPage(page);
	}

	const renderDesktop = () => {
		return (
			<SideBarNavigationSection className="pb-2" id="sideBarNavigationSection">
				<Row className="w-100 m-0">
					<NavigationOption active={page === "about"} onClick={() => handleOnClick("about")}>
						<AccountBoxIcon />
						<NavigationOptionText>About Me</NavigationOptionText>
						<ArrowForwardIosIcon className="ml-auto" />
					</NavigationOption>
					<NavigationOption active={page === "portfolio"} onClick={() => handleOnClick("portfolio")}>
						<WorkIcon />
						<NavigationOptionText>Portfolio</NavigationOptionText>
						<ArrowForwardIosIcon className="ml-auto" />
					</NavigationOption>
					<NavigationOption active={page === "contact"} onClick={() => handleOnClick("contact")}>
						<PermPhoneMsgIcon />
						<NavigationOptionText>Contact</NavigationOptionText>
						<ArrowForwardIosIcon className="ml-auto" />
					</NavigationOption>
				</Row>
			</SideBarNavigationSection>
		);
	};

	const renderMobile = () => {
		return (
			<SideBarNavigationSectionMobile className="px-4" id="sideBarNavigationSectionMobile">
				<Row className="w-100 mx-auto">
					<NavigationOptionMobile active={page === "about"} onClick={() => handleOnClick("about")}>
						<AccountBoxIcon fontSize="large" />
					</NavigationOptionMobile>
					<NavigationOptionMobile active={page === "portfolio"} onClick={() => handleOnClick("portfolio")}>
						<WorkIcon fontSize="large" />
					</NavigationOptionMobile>
					<NavigationOptionMobile active={page === "contact"} onClick={() => handleOnClick("contact")}>
						<PermPhoneMsgIcon fontSize="large" />
					</NavigationOptionMobile>
				</Row>
			</SideBarNavigationSectionMobile>
		);
	};

	return <div id="sidebarNavigationSection">{props.screen === "desktop" ? renderDesktop() : renderMobile()}</div>;
}
