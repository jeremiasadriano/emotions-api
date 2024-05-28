import { Link, useNavigate } from "react-router-dom"
import { useAxios } from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { IPerson } from "../types/IPerson";
import '../assets/css/style.css'
import '../assets/fonts/material-icon/css/material-design-iconic-font.css'
import SigninImage from '../assets/images/signin-image.jpg'
import Cookies from 'js-cookie'

export default function LoginForm() {
    const [person, setPerson] = useState<IPerson | null>()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [messageError, setMessageError] = useState("")
    const navigate = useNavigate()

    async function login() {
        try {
            const response = await useAxios.post("/login", person)
            const { id } = await response.data
            Cookies.remove("id")
            Cookies.set("id", id)
            navigate("/")
        } catch (error) {
            setMessageError("Email or password is incorrect")
        }
    }

    function formFill(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setPerson({ email: email, password: password })
        login()
    }
    return (

        <div className="main">
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <figure><img src={SigninImage} alt="sing up image" /></figure>
                            <Link to={'/register'} className="signup-image-link">Create an account</Link>
                        </div>
                        <div className="signin-form">
                            <h2 className="form-title">Login</h2>
                            <form className="register-form" id="login-form" onSubmit={(e) => formFill(e)}>
                                <div className="form-group">
                                    <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="email" name="email" id="your_name" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="your_pass" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <h3 style={{ color: "red" }}>{messageError}</h3>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}
