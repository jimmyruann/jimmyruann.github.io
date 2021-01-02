import React from "react";
import styled from "styled-components";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { Col, Row } from "react-bootstrap";

import LinkedinIcon from "../../assets/images/icon/linkedin.png";
import GithubIcon from "../../assets/images/icon/github.png";
import TwitterIcon from "../../assets/images/icon/twitter.png";
import { IconListType } from "../../types";

const SideBarNavigationSection = styled.div`
	padding: 1rem 2rem 2rem 2rem;
`;

const MyResumeButton = styled.button`
	background-color: #fff;
	border: 1px solid #707070;
	border-radius: 2px;
	width: 100%;
	height: 40px;
	text-transform: uppercase;
	font-family: "Lato";
	font-weight: 700;
	color: #797d7f;
	transition: all 0.1s ease-in;
	&:hover {
		background-color: #797d7f;
		color: #fff;
	}
`;

const ContactInfos = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
`;

const ContactInfo = styled.a`
	display: flex;
	align-items: center;
	color: #c9c9c9;
	margin-bottom: 0.25rem;
	&:hover {
		text-decoration: none;
		color: #fff;
	}
`;

const ContactInfoText = styled.span`
	text-transform: uppercase;
	font-size: 15px;
	font-family: "Segoe UI";
	margin-left: 1rem;
`;

const SkillIcon = styled.img`
	width: 32px;
	height: 32px;
	display: block;
`;

export default function BottomSection() {
	const IconList: IconListType[] = [
		{
			name: "Linkedin",
			url: "https://www.linkedin.com/in/jimmyruann/",
			path: LinkedinIcon,
		},
		{
			name: "Github",
			url: "https://github.com/jimmyruann",
			path: GithubIcon,
		},
		{
			name: "Twitter",
			url: "https://twitter.com/jimmyruann",
			path: TwitterIcon,
		},
	];

	return (
		<SideBarNavigationSection id="sidebarBottomSection">
			<a href="/Manjue%20Jimmy%20Ruan%20Resume.pdf" target="__blank">
				<MyResumeButton>Download Resume</MyResumeButton>
			</a>
			<ContactInfos>
				<ContactInfo href="#">
					<LocationCityIcon /> <ContactInfoText>Sydney, Australia</ContactInfoText>
				</ContactInfo>
				<ContactInfo href="tel:+61 412 088 009">
					<PhoneIcon /> <ContactInfoText>+61 412 088 009</ContactInfoText>
				</ContactInfo>
				<ContactInfo href="mailto:jimmyruan@hotmail.com">
					<EmailIcon /> <ContactInfoText>jimmyruan@hotmail.com</ContactInfoText>
				</ContactInfo>
			</ContactInfos>
			<Row className="m-0 p-0">
				{IconList.map((each, i) => {
					return (
						<Col xs={3} key={i} className="p-0 m-0" title={each.name}>
							<a href={each.url} target="__blank">
								<SkillIcon src={each.path} alt="Icons" />
							</a>
						</Col>
					);
				})}
			</Row>
		</SideBarNavigationSection>
	);
}
