import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import StaticBackgroundImage from "../../assets/images/background.jpg";

const IntroductionWrapper = styled.div`
	color: #f7f9f9;
	background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(52, 152, 219, 0.4)), url(${StaticBackgroundImage});
	background-position: center top;
	background-repeat: no-repeat;
	background-size: cover;
	height: 75vh;
`;

const CustomButton = styled(Button)`
	border-radius: 2px;
	color: #ecf0f1;
	background-color: #3498db;
	border-color: #5dade2;
	&:hover {
		background-color: #2e86c1;
		border-color: #2e86c1;
	}
	font-weight: 600;
`;

const ScaledableText = styled.h1`
	font-size: 1.6rem;
`;

export default function IntroductionSection() {
	return (
		<IntroductionWrapper className="d-flex align-items-center">
			<div className="w-100 text-center">
				<h1 className="display-3" style={{ fontWeight: 400 }}>
					Hello, I'm Jimmy!
				</h1>
				<ScaledableText className="display-4">
					<span style={{ color: "#F1A07D" }}>Front-End</span> /{" "}
					<span style={{ color: "#F4D03F" }}>Back-End</span> Developer |{" "}
					<span style={{ color: "#F5CBA7" }}>Human</span> | <span style={{ color: "#ABEBC6" }}>Earth</span>
				</ScaledableText>
				<a href="#contact"><CustomButton className="mt-3 px-5 py-2">Let's Talk</CustomButton></a>
			</div>
		</IntroductionWrapper>
	);
}
