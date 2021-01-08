import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";

import Sketch from "react-p5";
import p5Types from "p5";

import { ReactComponent as FrontendSVG } from "../../assets/images/frontend.svg";
import { ReactComponent as BackendSVG } from "../../assets/images/backend.svg";
import { ReactComponent as DatabaseSVG } from "../../assets/images/database.svg";

const LargeHeading = styled.h1`
	/* font-family: "Roboto", sans-serif; */
	font-weight: 500;
	color: #17a589;
	font-size: 2rem;
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
		<Container className="py-4 px-5 w-75 mw-100">
			<LargeHeading className="display-4">Biography</LargeHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis ac ligula ac tempus. Nunc
				libero nibh, egestas quis nisl non, dapibus fermentum nibh. Suspendisse sagittis justo tempus tristique
				lobortis. Ut hendrerit blandit enim in tincidunt. Fusce facilisis elit non dictum sollicitudin. Nullam
				at dui molestie, vehicula nisl sed, tristique turpis. Aliquam erat volutpat. Aliquam semper velit
				tortor, nec condimentum purus tempor vel.
			</p>
			<LargeHeading className="display-4">I Like</LargeHeading>
			<Row className="mt-3">
				<Col lg={12}>
					<Row>
						<Col lg={5}>
							<FrontendSVG className="w-100 h-auto" />
						</Col>
						<Col lg={6}>Fontend</Col>
					</Row>
				</Col>
				<Col lg={12}>
					<Row className="d-flex flex-row-reverse">
						<Col lg={5}>
							<BackendSVG className="w-100 h-auto" />
						</Col>
						<Col lg={6}>Backend</Col>
					</Row>
				</Col>

				<Col lg={12}>
					<Row>
						<Col lg={5}>
							<DatabaseSVG className="w-100 h-auto" />
						</Col>
						<Col lg={6}>Database</Col>
					</Row>
				</Col>
			</Row>
			{/* <LargeHeading>Hello</LargeHeading>
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
			</Row> */}
		</Container>
	);
}

// interface ComponentProps {}

// const BackgroundAnimationComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
// 	let x = 50;
// 	const y = 50;

// 	//See annotations in JS for more information
// 	const setup = (p5: p5Types, canvasParentRef: Element) => {
// 		const canvas = p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
// 		canvas.position(0, 0);
// 		canvas.style("z-index", "-100");
// 	};

// 	const draw = (p5: p5Types) => {
// 		p5.background("white");
// 		p5.ellipse(x, y, 70, 70);
// 		x++;
// 	};

// 	return <Sketch setup={setup} draw={draw} />;
// };
