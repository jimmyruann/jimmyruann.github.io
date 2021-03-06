import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import MyImageFile from "../../assets/images/me.jpg";

import JavascriptIcon from "../../assets/images/icon/javascript.png";
import TypescriptIcon from "../../assets/images/icon/ts.png";
import HTML5Icon from "../../assets/images/icon/html5.png";
import NodeJSIcon from "../../assets/images/icon/nodejs.png";
import ReactIcon from "../../assets/images/icon/react.png";
// import BootstrapIcon from "../../assets/images/icon/bootstrap.png";
import GraphlQLIcon from "../../assets/images/icon/graphql.png";
import PythonIcon from "../../assets/images/icon/python.png";
import TailwindCSSIcon from "../../assets/images/icon/tailwind.svg";

import { IconListType } from "../../types";

const SideBarNavigationSection = styled.div``;

const ImageNoDragAndSelect = styled.img`
	user-select: none;
	-webkit-user-drag: none;
	pointer-events: none;
`;

const MyImage = styled(ImageNoDragAndSelect)`
	border-radius: 5%;
	max-width: 100%;
	max-height: 100%;
	margin-bottom: 1rem;
`;

const NameHeading = styled.h1`
	text-transform: uppercase;
	font-size: 21px;
	text-align: center;
`;

const NameSubHeading = styled(NameHeading)`
	color: #ffb74d;
	font-size: 17px;
	font-weight: 400;
	text-transform: capitalize;
	margin-bottom: 0.5rem;
`;

const SkillIcons = styled.div`
	width: 75%;
	margin: 0 auto;
`;

const SkillIcon = styled(ImageNoDragAndSelect)`
	width: 32px;
	height: 32px;
	display: block;
	margin: 0 auto;
`;

export default function TopSection() {
	const IconList: IconListType[] = [
		{
			name: "JavaScript",
			url: "",
			path: JavascriptIcon,
		},
		{
			name: "TypeScript",
			url: "",
			path: TypescriptIcon,
		},
		{
			name: "React JS",
			url: "",
			path: ReactIcon,
		},
		{
			name: "Tailwind CSS",
			url: "",
			path: TailwindCSSIcon,
		},
		{
			name: "GraphQL",
			url: "",
			path: GraphlQLIcon,
		},
		{
			name: "Node JS",
			url: "",
			path: NodeJSIcon,
		},
		{
			name: "Python",
			url: "",
			path: PythonIcon,
		},
		{
			name: "HTML5",
			url: "",
			path: HTML5Icon,
		},
	];

	return (
		<>
			<SideBarNavigationSection id="sidebarTopSection" className="p-4">
				<MyImage src={MyImageFile} alt="Jimmy Ruan" />
				<NameHeading>Jimmy Ruan</NameHeading>
				<NameSubHeading>University Student</NameSubHeading>
				<SkillIcons>
					<Row>
						{IconList.map((each, i) => {
							return (
								<Col xs={3} className="p-0 mt-2" key={i} title={each.name}>
									<SkillIcon src={each.path} alt="Skill Icons" />
								</Col>
							);
						})}
					</Row>
				</SkillIcons>
			</SideBarNavigationSection>
		</>
	);
}
