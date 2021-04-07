import React from "react";
import styled from "styled-components";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

import GitHubLogo from "../../assets/images/icon/github_mark_white.png";
import LinkedinLogo from "../../assets/images/icon/linkedin_mark.png";

const SideBarNavigationSection = styled.div`
	font-family: "Lato", sans-serif;
`;

const MyResumeButton = styled.button`
	background-color: #fff;
	border: 1px solid #707070;
	border-radius: 2px;
	width: 100%;
	height: 40px;
	text-transform: uppercase;
	font-weight: 700;
	color: #797d7f;
	transition: all 0.1s ease-in;
	&:hover {
		background-color: #797d7f;
		color: #fff;
	}
`;

const MyTranscriptButton = styled(MyResumeButton)`
	margin-top: 1rem;
	background-color: #5dade2;
	color: #fff;
	&:hover {
		background-color: #fff;
		color: #2874a6;
	}
`;

const ContactInfos = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0 0 0;
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
	font-size: 13px;
	margin-left: 0.8rem;
	font-weight: 400;
`;

const IconImage = styled.img`
	width: 32px;
	height: 32px;
	display: inline-block;
`;

export default function BottomSection() {
	return (
		<SideBarNavigationSection id="sidebarBottomSection" className="px-4 pt-2 pb-4">
			<a href="/Jimmy%20Ruan%20Resume.pdf" target="__blank">
				<MyResumeButton>Resume</MyResumeButton>
			</a>
			<a href="/Jimmy%20Ruan%20Transcript.pdf" target="__blank">
				<MyTranscriptButton>Transcript</MyTranscriptButton>
			</a>
			<div className="mt-4">
				<a href="https://github.com/jimmyruann">
					<IconImage src={GitHubLogo} alt="Github" className="mr-3" />
				</a>
				<a href="https://www.linkedin.com/in/jimmyruann/">
					<IconImage src={LinkedinLogo} alt="Linkedidn" />
				</a>
			</div>

			<ContactInfos>
				<ContactInfo href="https://www.google.com/maps/place/Sydney+NSW" target="__blank">
					<LocationCityIcon /> <ContactInfoText>Sydney, Australia</ContactInfoText>
				</ContactInfo>
				<ContactInfo href="tel:+61 412 088 009">
					<PhoneIcon /> <ContactInfoText>+61 412 088 009</ContactInfoText>
				</ContactInfo>
				<ContactInfo href="mailto:jimmyruan@hotmail.com">
					<EmailIcon /> <ContactInfoText>jimmyruan@hotmail.com</ContactInfoText>
				</ContactInfo>
			</ContactInfos>
		</SideBarNavigationSection>
	);
}
