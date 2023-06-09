import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"

export default function Register() {

    const [isLoading, setisLoading] = useState(false)

    const navigate = useNavigate()

    async function handleRegister(values) {
        setisLoading(true)
        let { data } = await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup", values)
        if (data.message === "success") {
            setisLoading(false)
            navigate("/login")
        }
    }

    let validationSchema = yup.object({
        name: yup.string().required('Name is required').min(5, "Name must be more than 5 characters").max(20, "Name must be less than 20 characters"),
        email: yup.string().required('Email is required').email('Invalid email'),
        phone: yup.string().required('Phone number is required').matches(/^(010|011|012|015)[0-9]{8}/, "Invalid Phone number"),
        password: yup.string().required('Password is required').matches(/^[A-Z][A-Za-z0-9-_.]{10,16}/, 'Invalid Password'),
        rePassword: yup.string().required().oneOf([yup.ref("password", "Password didn't match")]),

    })

    let formik = useFormik({
        initialValues: { name: "", email: "", phone: "", password: "", rePassword: "" },
        onSubmit: handleRegister,
        validationSchema
    })

    return <> 
        <div className="container">
            <div className="row">
                <div className='col-6 d-flex align-items-center '>
                    <form onSubmit={formik.handleSubmit} className='d-flex flex-wrap'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control mb-2' type="name" name='name' id='name' value={formik.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.name && formik.touched.name ? <div className="alert alert-danger">{formik.errors.name}</div> : null}

                        <label htmlFor='name'>Email</label>
                        <input className='form-control mb-2' type="email" name='email' id='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.email && formik.touched.email ? <div className="alert alert-danger"> {formik.errors.email} </div> : null}

                        <label htmlFor='name'>Phone</label>
                        <input className='form-control mb-2' type="tel" name='phone' id='phone' value={formik.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger">{formik.errors.phone}</div> : null}


                        <label htmlFor='name'>Password</label>
                        <input className='form-control mb-2' type="password" name='password' id='password' value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}


                        <label htmlFor='name'>Re Password</label>
                        <input className='form-control mb-3' type="password" name='rePassword' id='rePassword' value={formik.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger">{formik.errors.rePassword}</div> : null}

                        {isLoading ? <button type='button' className='btn btn-success w-100'><i className='fas fa-spinner fa-spin'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} type="submit" className="btn btn-success w-100">Register</button>}

                    </form>
                </div>
                <div className='col-6'>
                    <img className='w-100' src="images/Register.jpg"  alt="" />
                </div>
            </div>
        </div >
    </>
}