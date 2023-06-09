import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { DataContext } from '../../Context/Data'

export default function Login() {

    const { saveUserData } = useContext(DataContext)

    const [isLoading, setisLoading] = useState(false)

    const navigate = useNavigate()

    async function handleLogin(values) {
        setisLoading(true)
        let { data } = await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin", values)
        if (data.message === "success") {
            setisLoading(false)
            localStorage.setItem("userToken", data.token)
            saveUserData()
            navigate("/")
        }
    }

    let validationSchema = yup.object({
        email: yup.string().required('Email is required').email('Invalid email'),
        password: yup.string().required('Password is required').matches(/^[A-Z][A-Za-z0-9-_.]{10,16}/, 'Invalid Password'),
    })

    let formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: handleLogin,
        validationSchema
    })

    return <>
        <div className="container">
            <div className="row">
                <div className='col-6 d-flex align-items-center'>
                <form onSubmit={formik.handleSubmit} className='d-flex flex-wrap'>

                    <label htmlFor='name'>Email</label>
                    <input className='form-control mb-2' type="email" name='email' id='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.email && formik.touched.email ? <div className="alert alert-danger"> {formik.errors.email} </div> : null}

                    <label htmlFor='name'>Password</label>
                    <input className='form-control mb-3' type="password" name='password' id='password' value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}

                    {isLoading ? <button type='button' className='btn btn-success'><i className='fas fa-spinner fa-spin'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn btn-success">Login</button>}

                    </form>
                </div>
                <div className='d-sm-block col-md-6'>
                    <img src="/images/login.jpg" alt="" className='w-100 d-sm-block ' />
                </div>
            </div>
        </div >
    </>
}