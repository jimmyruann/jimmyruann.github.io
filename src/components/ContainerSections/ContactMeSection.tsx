import React, { useState } from "react";
import styled from "styled-components";
import validator from "validator";
import emailjs from "emailjs-com";
import { Col, Container, Row, Form, Button, InputGroup, Alert } from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import MessageIcon from "@material-ui/icons/Message";
import SendIcon from "@material-ui/icons/Send";
import CircularProgress from "@material-ui/core/CircularProgress";
import SendMailIcon from "../../assets/images/svg/sendMail.svg";

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
	height: auto;
	width: 70%;
`;

const SubmitButton = styled(Button)`
	display: flex;
	text-transform: uppercase;
	font-weight: 600;
	height: 40px;
	padding: 0 2rem;
	margin-top: 1rem;
	display: flex;
	align-items: center;
	margin-left: auto;
	margin-right: auto;
	background-color: #00c6ff;
	border-color: #00c6ff;
	border-radius: 2px;
	transition: all 1s ease-in-out;
	&:hover {
		background-color: #009bff;
		border-color: #009bff;
	}
`;

export default function ContactMeSection() {
	const name = useFormInput("");
	const email = useFormInput("");
	const message = useFormInput("");
	const [isSending, setIsSending] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	function useFormInput(initialValue: string) {
		const [value, setValue] = useState(initialValue);

		function handleChange(e: any) {
			setValue(e.target.value);
		}

		return { value, onChange: handleChange };
	}

	function handleSubmit() {
		setSuccess("");
		setError("");
		if (validator.isEmpty(name.value)) return setError("Your Name?");
		if (!validator.isEmail(email.value)) return setError("Invaild Email.");

		setIsSending(true);

		emailjs
			.send(
				"service_ia981xr",
				"template_ob4g09e",
				{
					from_name: name.value,
					message: message.value,
					reply_to: email.value,
				},
				"user_K1sMN7Kmb1kyDG0ilBSyI"
			)
			.then((response) => {
				name.onChange({ target: { value: "" } });
				email.onChange({ target: { value: "" } });
				message.onChange({ target: { value: "" } });
				setIsSending(false);
				setSuccess("We'll be in touch soon!");
			})
			.catch((error) => {
				setIsSending(false);
				setError("Something went wrong. Please end email to jimmyruan@hotmail.com.");
			});
	}

	return (
		<ContactMeContainer fluid className="py-5" id="contact">
			<ContactFormBox>
				<Row>
					<Col md={4} lg={5} className="d-flex justify-content-center align-items-center">
						<SendEmailImg src={SendMailIcon} alt="https://freeicons.io/icon-list/geometric-ui-icons" />
					</Col>
					<Col md={8} lg={7} className="px-sm-5 px-md-4 px-lg-5 py-4">
						<Heading className="mb-4">Let's Have a Chat</Heading>
						{error && <Alert variant="danger">{error}</Alert>}
						{success && <Alert variant="success">{success}</Alert>}
						<Form>
							<InputForm icon={PersonIcon} placeholder="Your Name (required)" {...name} />
							<InputForm icon={AlternateEmailIcon} placeholder="Your Email (required)" {...email} />
							<InputForm icon={MessageIcon} placeholder="Message" textarea {...message} />
							<SubmitButton onClick={handleSubmit} disabled={isSending}>
								{!isSending ? (
									<>
										<span className="mr-3">Submit</span>
										<SendIcon />
									</>
								) : (
									<CircularProgress size="1.5rem" />
								)}
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
	value: string;
	onChange: any;
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
					<Form.Control
						placeholder={props.placeholder}
						as="textarea"
						style={styleForInput}
						value={props.value}
						onChange={props.onChange}
					/>
				) : (
					<Form.Control
						placeholder={props.placeholder}
						type="text"
						style={styleForInput}
						value={props.value}
						onChange={props.onChange}
					/>
				)}
			</InputGroup>
		</Form.Group>
	);
};
