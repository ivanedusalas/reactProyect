import { useState } from "react"
import { Button, Form } from 'react-bootstrap';
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';


const SignIn = () => {


    const handleLogin = (values) => {
        const body = {
            email: values.mail,
            password: values.password
        }
        axios.post('http://challenge-react.alkemy.org/', body).then(response => {
        localStorage.setItem('token', response.data.token)
    })
    }

    


    const startValues = {
        mail: "",
        password: "",
    }

    return (
        <Formik

            initialValues={startValues}

            validationSchema={Yup.object().shape({
                mail: Yup.string().required('Campo Requerido'),
                password: Yup.string().min(5, 'minimo 5 caracteres').max(8, 'maximo 8 caracteres').required('Campo Requerido'),
            })}

            onSubmit={(values) => {
                handleLogin(values)
            }}

        >
            {({ errors, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Field type="email" placeholder="Enter email" name="mail" />
                        <ErrorMessage name="mail" component={() => (<div class="alert alert-danger" role="alert">{errors.mail}</div>)} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Field type="password" placeholder="Password" name="password" />
                        <ErrorMessage name="password" component={() => (<div class="alert alert-danger" role="alert">{errors.password}</div>)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Log In
                    </Button>
                </Form>
            )}
        </Formik>

    )
}

export default SignIn;