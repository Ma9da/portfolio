import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "./FormikErrorMessage";
import { Form } from "react-bootstrap";

const FormikField = ({ name, type, label }) => {
	return (
		<Field name={name}>
			{(formikField) => {
				return (
					<>
						<Form.Label htmlFor={name} className="text-capitalize">
							{label}
						</Form.Label>
						<Form.Control
							type={type}
							id={name}
							{...formikField.field}
							defaultChecked={formikField.field.value}
						></Form.Control>
						<FormikErrorMessage name={name} />
					</>
				);
			}}
		</Field>
	);
};

export default FormikField;
