import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import IntroductionSection from "./ContainerSections/IntroductionSection";
import AboutMeSection from "./ContainerSections/AboutMeSection";
import ExampleWorkSection from "./ContainerSections/ExampleWorkSection";
import ContactMeSection from "./ContainerSections/ContactMeSection";

export default function ContentComponent() {
	return (
		<Container fluid className="p-0 h-100">
			<IntroductionSection />
			<AboutMeSection />
			<ExampleWorkSection />
			<ContactMeSection />
		</Container>
	);
}
