import React from 'react'
import { withFormik } from 'formik'
import Yup from 'yup'

const Login = ({
    values,
    handleChange
}) => {
    return (
        <div>
            <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />

        </div>
    )
}

const FormikLogin = withFormik({
    mapPropsToValues({ email }) {
        return {
            email: email || ''
        }
    }
})(Login)

export default FormikLogin