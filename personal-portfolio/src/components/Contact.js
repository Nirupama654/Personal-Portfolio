import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/phone-1439841_1280.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useForm, ValidationError } from '@formspree/react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone No. is required'),
    message: Yup.string().required('Message is required'),
  });
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setButtonText("Sending...");
    
    try {
      const response = await fetch('https://formspree.io/f/mbjverkv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        resetForm();
        setButtonText("Send");
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    }

    setSubmitting(false);
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact Me</h2>
                  <Formik
                    initialValues={formInitialDetails}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <Row>
                          <Col size={12} sm={6} className="px-1 inputHeight">
                            <Field type="text" name="firstName" placeholder="First Name" />
                            <ErrorMessage name="firstName" component="div" className="error danger" />
                          </Col>
                          <Col size={12} sm={6} className="px-1 inputHeight">
                            <Field type="text" name="lastName" placeholder="Last Name" />
                            <ErrorMessage name="lastName" component="div" className="error" />
                          </Col>
                          <Col size={12} sm={6} className="px-1 inputHeight">
                            <Field type="email" name="email" placeholder="Email Address" />
                            <ErrorMessage name="email" component="div" className="error" />
                          </Col>
                          <Col size={12} sm={6} className="px-1 inputHeight">
                            <Field type="tel" name="phone" placeholder="Phone No." />
                            <ErrorMessage name="phone" component="div" className="error" />
                          </Col>
                          <Col size={12} className="px-1">
                            <Field as="textarea" name="message" rows="6" placeholder="Message" />
                            <ErrorMessage name="message" component="div" className="error" />
                            <button type="submit" disabled={isSubmitting}><span>{buttonText}</span></button>
                          </Col>
                          {status.message && (
                            <Col>
                              <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                          )}
                        </Row>
                      </Form>
                    )}
                  </Formik>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
