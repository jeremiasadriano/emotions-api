import { useState } from "react";
import '../assets/css/style.css'
import '../assets/fonts/material-icon/css/material-design-iconic-font.css'
import SignUpImage from '../assets/images/signup-image.jpg'
import { Link } from "react-router-dom";

export default function SignUp() {
    const [messageError, setMessageError] = useState("");
    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="post" className="register-form" id="register-form" action="{% url 'register' %}">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="firstName" id="name" placeholder="First Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="lastName" id="name" placeholder="Last Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="pass" placeholder="Password" required />
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
