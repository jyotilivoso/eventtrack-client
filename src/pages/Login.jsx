import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Signin } from '../services/Service';
import { setCurrentAccessToken } from '../services/axiosClient';

// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    const payLoad={
        email: values.email,
        password: values.password,
    }
    Signin(payLoad).then((res) => {
        console.log("Login successful:", res);
        alert("Login successful!");
        setCurrentAccessToken(res?.data?.data?.accessToken);
         window.location.href = '/admin';
        setSubmitting(false);
        }
    ).catch((err) => {
        console.error("Login failed:", err);
        alert("Login failed. Please try again.");
        setSubmitting(false);
    }
    )
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
