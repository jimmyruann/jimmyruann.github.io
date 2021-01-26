import React from "react";
import styled from "styled-components";
import { Col, Container, Row, CardDeck, Card } from "react-bootstrap";
import PottsPointLaundry from "../../assets/images/pottspointlaundry.png";
import JimmyRuannSite from "../../assets/images/jimmyruann.png";
import StaticBackgroundImage from "../../assets/images/background2.jpg";

const ExampleWorkContainer = styled(Container)`
	background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(175, 96, 26, 0.8)), url(${StaticBackgroundImage});
`;

const HeadingStyles = styled.h1`
	font-family: "Roboto", sans-serif;
	font-weight: 600;
	color: #fff;
	text-align: center;
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
`;

const CustomCol = styled(Col)`
	padding: 0;
`;

type ExampleWorkImageProps = {
	src: string;
};

const ExampleWorkImageText = styled(HeadingStyles)`
	text-align: center;
	font-size: 1.8rem;
	display: none;
`;

export default function ExampleWorkSection() {
	return (
		<ExampleWorkContainer fluid className="px-5">
			<Heading className="pt-5">Example Works</Heading>
			<SubHeading className="mt-4 mb-5">Some of my most noticable work for my client and myself.</SubHeading>
			<Container className="px-5">
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</Container>
		</ExampleWorkContainer>
	);
}
