import React, {useState, useRef} from 'react';
import {Form, Col, Button} from 'react-bootstrap/'
import * as EmailValidator from 'email-validator';


function SubscribeForm({data}) {

	const InputRef = useRef(null);
	const [error, setError] = useState(false)

	const onSubmit = (e) => {
		e.preventDefault();
		const data = InputRef.current.value;
		setError(EmailValidator.validate(data) ? false : true)
	}


	return (

		<Form onSubmit={onSubmit}>
		  <Form.Row>
		    <Col md={8} className="my-1">
		      <Form.Label htmlFor="subscribe-input" srOnly>
		        Email
		      </Form.Label>
		      <Form.Control ref={InputRef} id="subscribe-input" placeholder="Enter your email address" isInvalid={error}/>
		      {error && <div className="invalid-feedback">Whoops, make sure it's' an email</div>}
		    </Col>
		    <Col md={4} className="my-1">
		      <Button variant='info' type="submit">Submit</Button>
		    </Col>
		  </Form.Row>
		</Form>

		)

	}

export default SubscribeForm;