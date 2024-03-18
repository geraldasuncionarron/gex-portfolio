import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/Auth.provider";
import { useNavigate, useNavigation } from "react-router";
import axios from "axios";
import styled from "styled-components";
import * as yup from 'yup';
import { Formik, useFormik } from "formik";

const RegisterContainer = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
`
const RegisterImageContainer = styled.div`
    width: 100%; 
    justify-content: center; 
    display: flex; 
`

const schema = yup.object().shape({
    email: yup.string().email().required('No Email provided.'),
    password: yup.string().required('No password provided.') 
  });

function Login() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (values: { email: string, password: string }) => {
        try {
            const { data } = await axios.post(process.env.REACT_APP_HOST + "/auth/login", { 
              email: values.email,
              password: values.password
            });

            if(data.status === 200) {
                authContext.login({ access_token: data.data.access_token, config: data.data.config })
                navigate('/chatlink/dashboard')
                return;
            }

            throw data.message;        
        } catch (error) {
            alert(error);
        }

    };

    return(
        <RegisterContainer>
            <RegisterImageContainer>
                <img src="./assets/images/gex_logo_plain.png" style={{ width: 100 }}/>
            </RegisterImageContainer>
            <Container style={{ maxWidth: 400 }}>
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                    email: '',
                    password: ''
                }}
                >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="name@example.com" 
                            value={values.email}
                            isValid={touched.email && !errors.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        value={values.password}
                        isValid={touched.password && !errors.password}
                        onChange={handleChange}
                    />
                    <Form.Group>
                        <Button type="submit" style={{ width: "100%", marginTop: 50 }}>Login</Button>
                    </Form.Group>
                </Form>
                )}
                </Formik>
            </Container>
        </RegisterContainer>
    );
}

export default Login;