import React from "react";
import { ErrorMessage } from "formik";
import { Alert } from "react-bootstrap";

const FormikErrorMessage = ({ name }) => {
	return (
		<ErrorMessage name={name}>
			{(errMessage) => {
				return <Alert variant="danger">{errMessage}</Alert>;
			}}
		</ErrorMessage>
	);
};

export default FormikErrorMessage;
