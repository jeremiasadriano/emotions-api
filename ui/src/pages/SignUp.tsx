import { useState } from "react";
import '../assets/css/style.css'
import '../assets/fonts/material-icon/css/material-design-iconic-font.css'
import SignUpImage from '../assets/images/signup-image.jpg'
import { Link, useNavigate } from "react-router-dom";
import { IPerson } from "../types/IPerson";
import { useAxios } from "../hooks/useAxios";
import Cookies from 'js-cookie'

export default function SignUp() {
    const [person, setPerson] = useState<IPerson | null>()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [messageError, setMessageError] = useState("");
    const navigate = useNavigate()

    async function register() {
        try {
            const response = await useAxios.post("/register", person)
            const { id } = await response.data
            Cookies.remove("id")
            Cookies.set("id", id)
            navigate("/")
        } catch (error) {
            console.log(error)
            setMessageError("Email or password is incorrect")
        }
    }

    function formFill(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setPerson({ firstName: firstName, lastName: lastName, email: email, password: password })
        register()
    }
    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>

                            <form className="register-form" id="register-form" onSubmit={(e) => formFill(e)}>
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="firstName" id="name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="pass" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>

                            <div className="form-group">
                                <h3 style={{ "color": "red" }}>{messageError}</h3>
                            </div>
                        </div>
                        <div className="signup-image">
                            <figure><img src={SignUpImage} alt="sing up image" /></figure>
                            <Link to={'/login'} className="signup-image-link">I am already have account</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
