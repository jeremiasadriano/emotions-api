import { useState } from "react"
import '../../assets/css/style.css'
import '../../assets/fonts/material-icon/css/material-design-iconic-font.css'
import SigninImage from '../../assets/images/signin-image.jpg'
import { Link } from "react-router-dom";
export default function Login() {
    const [messageError, setMessageError] = useState("");
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
                            <form method="POST" className="register-form" id="login-form" action="">
                                <div className="form-group">
                                    <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="email" name="email" id="your_name" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="your_pass" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <h3 style={{ "color": "red" }}>{messageError}</h3>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
