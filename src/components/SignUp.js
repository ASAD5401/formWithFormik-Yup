import React from 'react'
import { Formik, Form } from 'formik'
import { TextField } from './TextField'
import * as Yup from 'yup'

export const SignUp = () => {
    const validate=Yup.object({
        firstName:Yup.string()
        .max(15,'Must be 15 Chracters or less')
        .required('First Name is required'),
        lastName:Yup.string()
        .max(20,'Must be 20 Chracters or less')
        .required('Last Name is required'),
        email:Yup.string()
        .email('Email is Invalid')
        .required('Email is required'),
        password:Yup.string()
        .min(8,'Password must be at least 8 characters long')
        .required('Password is required'),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password'),null],'Password must match')
        .required('Confirm Password is required'),

    })
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''

            }}
            validationSchema={validate}
            onSubmit={values=>{
                console.log(values)
            }}
            >
            {formik => (
                <div>

                    <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                <Form>
                    <TextField label="First Name" name="firstName" type="text"></TextField>
                    <TextField label="Last Name" name="lastName" type="text"></TextField>
                    <TextField label="Email" name="email" type="text"></TextField>
                    <TextField label="Password" name="password" type="password"></TextField>
                    <TextField label="Confirm Password" name="confirmPassword" type="password"></TextField>
                    <button className="btn btn-dark mt-3 mr-3" type="submit">Submit</button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>

                </Form>
                </div>
            )}
        </Formik>

    )
}
