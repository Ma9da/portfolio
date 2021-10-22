import { ErrorMessage, Field, FieldArray, Formik } from "formik"
import { Form } from "react-bootstrap"
import * as Yup from "yup";

const RegistrationForm = () => {
    return (
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-8">
                    <Formik
                        initialValues={{
                            gender: '',
                            firstName: '',
                            lastName: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                            active: false,
                            hoppies: ['']
                        }}
                        validationSchema={Yup.object().shape({
                            gender: Yup.string()
                                .required('Gender is required'),
                            firstName: Yup.string()
                                .required('First Name is required'),
                            lastName: Yup.string()
                                .required('Last Name is required'),
                            email: Yup.string()
                                .email('Email is invalid')
                                .required('Email is required'),
                            password: Yup.string()
                                .min(6, 'Password must be at least 6 characters')
                                .required('Password is required'),
                            confirmPassword: Yup.string()
                                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                .required('Confirm Password is required'),
                            active: Yup.bool()
                                .oneOf([true], 'active is required')
                        })}
                        onSubmit={fields => {
                            JSON.stringify(fields, null, 4)
                        }}
                    >
                        {({ errors, status, touched, values }) => (
                            <Form>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label>Gender</label>
                                        <Field name="gender" as="select" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')}>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Field>
                                        <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group col-5">
                                        <label htmlFor="firstName">First Name</label>
                                        <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group col-5">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                        <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <label htmlFor="password">Password</label>
                                        <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group col">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                        <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                    </div>
                                </div>
                                <div className="form-group form-check">
                                    <Field type="checkbox" name="active" className={'form-check-input ' + (errors.active && touched.active ? ' is-invalid' : '')} />
                                    <label htmlFor="active" className="form-check-label">Active</label>
                                    <ErrorMessage name="active" component="div" className="invalid-feedback" />
                                </div>
                                {/* 88888888888888888888888888888888888888888888888888 */}
                                <FieldArray
                                    className="py-1"
                                    name="hobbies"
                                    render={(arrayHelpers) => {
                                        const hobbies = values.hobbies;
                                        return (
                                            <div>
                                                {hobbies && hobbies.length > 0
                                                    ? hobbies.map((hobby, index) => (
                                                        <div key={index}>
                                                            <Field
                                                                placeholder="Hobby"
                                                                name={`hobbies.${index}`}
                                                            />
                                                            <ErrorMessage name={`hobbies.${index}`} />
                                                            <br />
                                                            <button
                                                                className="btn btn-danger my-1"
                                                                type="button"
                                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                            >
                                                                delete
                                                            </button>
                                                            <br />
                                                            <br />
                                                        </div>
                                                    ))
                                                    : null}
                                                <button
                                                className="btn btn-dark"
                                                    type="button"
                                                    onClick={() => arrayHelpers.push("")} // insert an empty string at a position
                                                >
                                                    add a Hobby
                                                </button>
                                                <br />
                                                <br />
                                                <br />
                                            </div>
                                        );
                                    }}
                                />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary me-2">Register</button>
                                    <button type="reset" className="btn btn-secondary">Reset</button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default RegistrationForm