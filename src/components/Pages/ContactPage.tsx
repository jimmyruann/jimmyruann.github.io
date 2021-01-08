import React from "react";
import styled from "styled-components";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import GithubIcon from "../../assets/images/icon/github.png";
import LinkedInIcon from "../../assets/images/icon/linkedin_mark.png";
import TwitterIcon from "../../assets/images/icon/twitter.png";

import IPhoneBackground from "../../assets/images/iphone_background.png";

import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import SubjectIcon from "@material-ui/icons/Subject";
import NoteIcon from "@material-ui/icons/Note";
import SendIcon from "@material-ui/icons/Send";

type CustomColProps = {
	hoverColor: string;
};

const ContactFormBox = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 500px;
	background-image: url(${IPhoneBackground});
	background-repeat: no-repeat;
	background-size: cover;
`;

const CustomCol = styled(Col)<CustomColProps>`
	border: 1px solid #ced4da;
	border-radius: 3px;
	padding: 0.5rem 0.5rem;
	margin-bottom: 0.5rem;
	color: #6c757d;
	cursor: pointer;
	transition: all 0.15s ease-in-out;
	&:hover {
		color: #f8f9fa;
		border-color: #85c1e9;
		background-color: ${(props) => props.hoverColor};
	}
`;

const BigHeading = styled.h1`
	text-align: center;
	font-weight: 400;
	color: #2ecc71;
`;

const IconImage = styled.img`
	width: 32px;
	height: 32px;
`;

const IconText = styled.span`
	margin-left: 1rem;
	text-transform: uppercase;
	font-weight: 500;
`;

const HorizontalLine = styled.h1`
	width: 100%;
	text-align: center;
	border-bottom: 1px solid#99A3A4;
	line-height: 0.1em;
	margin: 10px 0 20px;
`;

const HorizontalLineText = styled.span`
	color: #99a3a4;
	background: #fff;
	padding: 0 10px;
	font-family: var(--font-family-monospace);
	font-size: 1.2rem;
	font-weight: 600;
	text-transform: uppercase;
`;

const Content = styled.div`
	padding: 5rem 4.5rem;
	@media (max-width: 767.98px) {
		padding: 4rem 3rem 2.5rem 3rem;
	}
`;

export default function ContactPage() {
	return (
		<Container fluid className="mt-4 d-flex align-items-center h-100">
			<ContactFormBox>
				<Content>
					<BigHeading className="display-4 mb-4">Let's Chat</BigHeading>
					<Row className="m-0 p-0">
						<a href="https://github.com/jimmyruann" className="w-100 h-auto">
							<CustomCol lg={12} hoverColor="#221f20">
								<IconImage src={GithubIcon} alt="github icon" />
								<IconText>Find me on Github</IconText>
							</CustomCol>
						</a>
						<a href="https://www.linkedin.com/in/jimmyruann/" className="w-100 h-auto">
							<CustomCol lg={12} hoverColor="#2867b2">
								<IconImage src={LinkedInIcon} alt="linkedin icon" />
								<IconText>Find me on LinkedIn</IconText>
							</CustomCol>
						</a>
						<a href="https://twitter.com/jimmyruann" className="w-100 h-auto">
							<CustomCol lg={12} hoverColor="#1da1f2">
								<IconImage src={TwitterIcon} alt="linkedin icon" />
								<IconText>Find me on Twitter</IconText>
							</CustomCol>
						</a>
					</Row>

					<HorizontalLine>
						<HorizontalLineText>OR</HorizontalLineText>
					</HorizontalLine>

					<Form>
						<Form.Group>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>
										<PersonIcon />
									</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control type="text" placeholder="Full Name" />
							</InputGroup>
						</Form.Group>
						<Form.Group>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>
										<EmailIcon />
									</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control type="email" placeholder="Email" />
							</InputGroup>
						</Form.Group>
						<Form.Group>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>
										<SubjectIcon />
									</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control type="text" placeholder="Subject" />
							</InputGroup>
						</Form.Group>
						<Form.Group>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>
										<NoteIcon />
									</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control as="textarea" rows={3} placeholder="Message" />
							</InputGroup>
						</Form.Group>
						<Button variant="info" className="w-100 d-block">
							<SendIcon />
						</Button>
					</Form>
				</Content>
			</ContactFormBox>
		</Container>
	);
}
