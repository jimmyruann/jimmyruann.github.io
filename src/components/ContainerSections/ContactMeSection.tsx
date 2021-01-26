import React from "react";
import styled from "styled-components";
import { Col, Container, Row, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import SendMailIcon from "../../assets/images/svg/sendMail.svg";
import PersonIcon from "@material-ui/icons/Person";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import MessageIcon from "@material-ui/icons/Message";
import SendIcon from "@material-ui/icons/Send";

const ContactMeContainer = styled(Container)`
	background: #009bff;
	background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
	color: #000;
`;

const HeadingStyles = styled.h1`
	font-family: "Roboto", sans-serif;
	font-weight: 600;
`;

const Heading = styled(HeadingStyles)`
	font-size: 1.8rem;
	color: #04acfc;
`;

const ContactFormBox = styled(Container)`
	background-color: #fff;
	border-radius: 0.5rem;
`;

const SendEmailImg = styled.img`
	max-width: 200px;
	display: block;
	margin: 0 auto;
`;

const SubmitButton = styled(Button)`
	display: flex;
	text-transform: uppercase;
	font-weight: 600;
	padding: 0.5rem 2rem;
	margin-top: 1rem;
	margin-left: auto;
	margin-right: auto;
	background-color: #00c6ff;
	border-color: #00c6ff;
	border-radius: 2px;
	&:hover {
		background-color: #009bff;
		border-color: #009bff;
	}
`;

export default function ContactMeSection() {
	return (
		<ContactMeContainer fluid className="py-5">
			<ContactFormBox>
				<Row>
					<Col md={4} lg={6} className="d-flex">
						<SendEmailImg src={SendMailIcon} alt="https://freeicons.io/icon-list/geometric-ui-icons" />
					</Col>
					<Col md={8} lg={6} className="px-sm-5 px-md-4 px-lg-5 py-4">
						<Heading className="mb-4">Let's Have a Chat</Heading>
						<Form>
							<InputForm icon={PersonIcon} placeholder="Your Name (required)" />
							<InputForm icon={AlternateEmailIcon} placeholder="Your Email (required)" />
							<InputForm icon={MessageIcon} placeholder="Message" textarea />
							<SubmitButton>
								<span className="mr-3">Submit</span>
								<SendIcon />
							</SubmitButton>
						</Form>
					</Col>
				</Row>
			</ContactFormBox>
		</ContactMeContainer>
	);
}

type InputFormProps = {
	placeholder: string;
	icon: any;
	textarea?: boolean;
};

const InputForm = (props: InputFormProps) => {
	const styleForInputGroup = {
		backgroundColor: "#009bff",
		color: "#fff",
		borderColor: "#009bff",
		borderRadius: 0,
	};
	const styleForInput = {
		borderColor: "#009bff",
		borderRadius: 0,
	};

	return (
		<Form.Group>
			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text style={styleForInputGroup}>
						<props.icon />
					</InputGroup.Text>
				</InputGroup.Prepend>

				{props.textarea ? (
					<Form.Control placeholder={props.placeholder} as="textarea" style={styleForInput} />
				) : (
					<Form.Control placeholder={props.placeholder} type="text" style={styleForInput} />
				)}
			</InputGroup>
		</Form.Group>
	);
};
