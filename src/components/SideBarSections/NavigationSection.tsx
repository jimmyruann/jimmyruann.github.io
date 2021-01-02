import React, { useContext } from "react";
import styled from "styled-components";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import WorkIcon from "@material-ui/icons/Work";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import NavigationContext from "../../context/NavigationContext";

interface NavigationOptionProps {
	readonly active?: boolean;
}

const SideBarNavigationSection = styled.div`
	display: flex;
	flex-direction: column;
`;

const NavigationOption = styled.div<NavigationOptionProps>`
	padding: 0.3rem 2rem;
	display: flex;
	align-items: center;
	background-color: ${(props) => (props.active ? "white" : "#2d2d2d")};
	color: ${(props) => (props.active ? "#2d2d2d" : "white")};
	${(props) => (!props.active ? `&:hover {background-color: #626567;cursor: pointer;}` : ``)};
	transition: all 0.15s ease-in;
`;

const NavigationOptionText = styled.span`
	text-transform: uppercase;
	font-size: 20px;
	font-family: "Segoe UI";
	margin-left: 1rem;
`;

export default function NavigationSection() {
	const { page, setPage } = useContext(NavigationContext);

	function handleOnClick(page: "about" | "portfolio" | "contact") {
		setPage(page);
	}

	return (
		<>
			<SideBarNavigationSection id="sidebarNavigationSection">
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
					<AssignmentIcon />
					<NavigationOptionText>Contact</NavigationOptionText>
					<ArrowForwardIosIcon className="ml-auto" />
				</NavigationOption>
			</SideBarNavigationSection>
		</>
	);
}
