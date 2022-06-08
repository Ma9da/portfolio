import { ErrorMessage, Field, FieldArray, Formik } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import FormikField from "../../shared/FormikField";

const RegistrationForm = () => {
	return (
		<div className="container">
			<div className="row justify-content-center my-5 align-items-center">
				<div className="col-8">
					<Formik
						initialValues={{
							firstName: "",
							lastName: "",
							email: "",
							gender: "",
							password: "",
							confirmPassword: "",
							active: false,
							hoppies: [""],
						}}
						validationSchema={Yup.object().shape({
							gender: Yup.string().required("Gender is required"),
							firstName: Yup.string().required(
								"First Name is required"
							),
							lastName: Yup.string().required(
								"Last Name is required"
							),
							email: Yup.string()
								.email("Email is invalid")
								.required("Email is required"),
							password: Yup.string()
								.min(
									6,
									"Password must be at least 6 characters"
								)
								.required("Password is required"),
							confirmPassword: Yup.string()
								.oneOf(
									[Yup.ref("password"), null],
									"Passwords must match"
								)
								.required("Confirm Password is required"),
							active: Yup.bool().oneOf(
								[true],
								"active is required"
							),
						})}
						onSubmit={(fields) => {
							console.log(fields);
						}}
					>
						{({ errors, status, touched, values }) => (
							<Form.Group>
								<div className="form-row">
									<div className="form-group">
										<FormikField
											label="first name"
											name="firstName"
											type="text"
											className={
												"form-control" +
												(errors.firstName &&
												touched.firstName
													? " is-invalid"
													: "")
											}
										/>
										<ErrorMessage
											name="firstName"
											component="div"
											className="invalid-feedback"
										/>
									</div>
									<div className="form-group">
										<FormikField
											label="Last Name"
											name="lastName"
											type="text"
										/>
									</div>
								</div>
								<div className="form-group">
									<FormikField
										label="Email"
										name="email"
										type="email"
									/>
								</div>
								<div className="form-group">
									<FormikField
										label="gender"
										name="gender"
										type="select"
										as="select"
										value={["female", "male"]}
										className={
											"form-control" +
											(errors.gender && touched.gender
												? " is-invalid"
												: "")
										}
									>
										{/* <option value="defaulte"></option>
										<option value="Male">Male</option>
										<option value="Female">Female</option> */}
									</FormikField>
									<ErrorMessage
										name="gender"
										component="div"
										className="invalid-feedback"
									/>
								</div>
								<div className="form-row">
									<div className="form-group">
										<FormikField
											label="password"
											name="password"
											type="password"
										/>
									</div>
									<div className="form-group ">
										<FormikField
											label="confirmPassword"
											name="confirmPassword"
											type="password"
										/>
									</div>
								</div>
								<div className="form-group">
									<Form.Label className="me-2">
										active
									</Form.Label>
									<Field
										label="active"
										name="active"
										type="checkbox"
									/>
								</div>
								<FieldArray
									className="py-1"
									name="hobbies"
									render={(arrayHelpers) => {
										const hobbies = values.hobbies;
										return (
											<div>
												{hobbies && hobbies.length > 0
													? hobbies.map(
															(hobby, index) => (
																<div
																	key={index}
																>
																	<Field
																		placeholder="Hobby"
																		name={`hobbies.${index}`}
																	/>
																	<ErrorMessage
																		name={`hobbies.${index}`}
																	/>
																	<button
																		className="btn btn-danger my-1"
																		type="button"
																		onClick={() =>
																			arrayHelpers.remove(
																				index
																			)
																		}
																	>
																		delete
																	</button>
																</div>
															)
													  )
													: null}
												<button
													className="btn btn-dark text-capitalize"
													type="button"
													onClick={() =>
														arrayHelpers.push("")
													}
												>
													add a Hobby
												</button>
											</div>
										);
									}}
								/>
								<div className="form-group">
									<button
										type="submit"
										className="btn btn-primary me-2"
									>
										Register
									</button>
								</div>
							</Form.Group>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};
export default RegistrationForm;
