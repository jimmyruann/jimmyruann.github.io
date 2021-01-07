import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

import Sketch from "react-p5";
import p5Types from "p5";

import { ReactComponent as FrontendSVG } from "../../assets/images/frontend.svg";
import { ReactComponent as BackendSVG } from "../../assets/images/backend.svg";
import { ReactComponent as DatabaseSVG } from "../../assets/images/database.svg";

const LargeHeading = styled.h1`
	font-family: "Roboto", sans-serif;
	font-size: 7vw;
	color: #17a589;
`;

const SubHeading = styled(LargeHeading)`
	font-size: 2.5vw;
	color: #0a0a0a;
`;

const SubHeadingText = styled(SubHeading)`
	font-size: 1.5vw;
	font-style: italic;
`;

const ImageText = styled.h1`
	font-family: "Open Sans";
	text-transform: uppercase;
	font-size: 2vw;
	text-align: center;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;

const VerticalAlign = styled(Container)`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`;

export default function AboutMePage() {
	return (
		<VerticalAlign id="aboutMePage" fluid>
			<BackgroundAnimationComponent />

			<div>
				<LargeHeading>Hello</LargeHeading>
				<SubHeading>I'm Manjue Jimmy Ruan.</SubHeading>
				<SubHeadingText>JavaScript Full Stack Web Develope, University Student</SubHeadingText>
				<Row className="mt-5">
					<Col lg={4}>
						<FrontendSVG className="w-100" />
						<ImageText
							style={{
								color: "#3178C6",
							}}
						>
							Frontend
						</ImageText>
					</Col>
					<Col lg={4}>
						<BackendSVG className="w-100" />
						<ImageText
							style={{
								color: "#272822",
							}}
						>
							Backend
						</ImageText>
					</Col>
					<Col lg={4}>
						<DatabaseSVG className="w-100" />
						<ImageText
							style={{
								color: "#10AA50",
							}}
						>
							Database
						</ImageText>
					</Col>
				</Row>
			</div>
		</VerticalAlign>
	);
}

interface ComponentProps {}

const BackgroundAnimationComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
	let x = 50;
	const y = 50;

	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		const canvas = p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
		canvas.position(0, 0);
		canvas.style("z-index", "-100");
	};

	const draw = (p5: p5Types) => {
		p5.background("white");
		p5.ellipse(x, y, 70, 70);
		x++;
	};

	return <Sketch setup={setup} draw={draw} />;
};
