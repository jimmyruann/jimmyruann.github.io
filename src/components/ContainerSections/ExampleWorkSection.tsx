import React from "react";
import styled from "styled-components";
import { Col, Row, Container, Card } from "react-bootstrap";
import PottsPointLaundry from "../../assets/images/example_work/potts-point-laundry.jpg";
import JimmyRuannSite from "../../assets/images/example_work/jimmyruan-portfolio.jpg";
import StaticBackgroundImage from "../../assets/images/background2-min.jpg";

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

// Image must be 1366 x 768

export default function ExampleWorkSection() {
	return (
		<ExampleWorkContainer fluid className="p-5">
			<Heading className="mb-4">My Projects</Heading>
			<SubHeading>Some of my most noticable projects for myself and others.</SubHeading>
			<Container className="px-0">
				<Row>
					<Col className="col-md-12 col-lg-6 py-4">
						<Card className="h-100">
							<Card.Img variant="top" src={JimmyRuannSite} />
							<Card.Body className="border-top">
								<Card.Title>Portfolio Website</Card.Title>

								<Card.Text>
									Personal portfolio website built with React.js and Bootstrap. The website is hosted
									on Github Page.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col className="col-md-12 col-lg-6 py-4">
						<Card className="h-100">
							<Card.Img variant="top" src={PottsPointLaundry} />
							<Card.Body className="border-top">
								<Card.Title>Potts Point Laundry</Card.Title>
								<Card.Text>
									Modern business website for{" "}
									<a href="https://www.pottspointlaundry.com/">Potts Point Laundry</a> built using
									React.js and Tailwind CSS.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				{/* <CardDeck>
					<Card>
						<CustomCardImage variant="top" src={JimmyRuannSite} />
						<Card.Body className="border-top">
							<a href="https://jimmyruann.github.io/">
								<Card.Title className="m-0">My Portfolio</Card.Title>
							</a>
						</Card.Body>
					</Card>
					<Card>
						<CustomCardImage variant="top" src={PottsPointLaundry} />
						<Card.Body className="border-top">
							<a href="https://www.pottspointlaundry.com/">
								<Card.Title className="m-0">Potts Point Laundry</Card.Title>
							</a>
						</Card.Body>
					</Card>
				</CardDeck> */}
			</Container>
		</ExampleWorkContainer>
	);
}
