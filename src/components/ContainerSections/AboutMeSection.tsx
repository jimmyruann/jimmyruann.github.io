import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import FrontEndIcon from "../../assets/images/svg/multiPlatform.svg";
import BackendIcon from "../../assets/images/svg/database.svg";
import NetworkingIcon from "../../assets/images/svg/network.svg";
import SecurityIcon from "../../assets/images/svg/security.svg";
import { AboutMeListType } from "../../types";

const HeadingStyles = styled.h1`
	font-family: "Roboto", sans-serif;
	font-weight: 600;
`;

const Heading = styled(HeadingStyles)`
	font-size: 3rem;
`;

const SubHeading = styled(HeadingStyles)`
	font-size: 1.2rem;
	width: 100%;
	max-width: 800px;
	display: block;
	margin: 0 auto;
	@media (max-width: 767.98px) {
		max-width: 100%;
	}
`;

const TextHeading = styled(HeadingStyles)`
	font-size: 1.3rem;
	@media (max-width: 576px) {
		text-align: center;
	}
`;

const Text = styled(HeadingStyles)`
	font-size: 1rem;
	font-weight: 400;
	text-align: left;
	@media (max-width: 576px) {
		text-align: center;
	}
`;

const IconHolder = styled.img`
	width: 100%;
	display: block;
	@media (max-width: 767.98px) {
		max-width: 40%;
		margin: 0 auto;
	}
`;

export default function AboutMeSection() {
	return (
		<Container className="px-sm-0 px-md-5 py-5">
			<div className="text-center mb-5">
				<Heading className="mb-4">What I Do</Heading>
				{/* <SubHeading>
					I advise and help individuals and small businesses with their profit making websites and
					cybersecurity.
				</SubHeading> */}
				<SubHeading>I do a lot of things :)</SubHeading>
			</div>
			<Row className="m-0">
				<Col sm={12} lg={6} className="mb-5">
					<AboutMeListItem
						iconSrc={FrontEndIcon}
						heading="Front-End Development"
						content="I build stunning websites using popular front-end frameworks (React, Bootstrap, Material-UI, Tailwind and more)."
						headingProps={{
							style: { color: "#f16529" },
						}}
					/>
				</Col>
				<Col sm={12} lg={6} className="mb-5">
					<AboutMeListItem
						iconSrc={BackendIcon}
						heading="Back-End Development"
						content="I specialise in building REST API and GraphQL servers for commercial businesses. JavaScript, Python, Java."
						headingProps={{
							style: { color: "#F1C40F" },
						}}
					/>
				</Col>
				<Col sm={12} lg={6} className="mb-5">
					<AboutMeListItem
						iconSrc={NetworkingIcon}
						heading="Networking / Cloud Computing"
						content="I help identify network security flaws and setup commercial and personal network servers, routers and switches."
						headingProps={{
							style: { color: "#009EDC" },
						}}
					/>
				</Col>
				<Col sm={12} lg={6} className="mb-5">
					<AboutMeListItem
						iconSrc={SecurityIcon}
						heading="Cybersecurity Measures"
						content="I offer cybersecurity measures to protect business data against malware, ransomware and phishing attacks."
						headingProps={{
							style: { color: "#515A5A" },
						}}
					/>
				</Col>
			</Row>
		</Container>
	);
}

const AboutMeListItem = (props: AboutMeListType) => {
	return (
		<Row className="m-0">
			<Col sm={4} md={2} className="p-0">
				<IconHolder src={props.iconSrc} alt="https://freeicons.io/icon-list/geometric-ui-icons" />
			</Col>
			<Col sm={8} md={10} className="px-4">
				<TextHeading className="mb-2" {...props.headingProps}>
					{props.heading}
				</TextHeading>
				<Text>{props.content}</Text>
			</Col>
		</Row>
	);
};
