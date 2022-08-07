import React, { useState, useEffect } from "react";
import "./login.css";
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginInitiate } from "../redux/actions";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const { user } = useSelector((state) => state.data);
  
    let dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
      if (user) {
        navigate('/');
      }
    }, [user, dispatch, navigate]);
  
    const signIn = (e) => {
      e.preventDefault();
      dispatch(loginInitiate(email, password));
      navigate('/dashboard');
    };

    return (
        <div className="login">
            <div className="login__form">
                <div className="login__formTop">
                    <Link to="/">
                        <img src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" alt="logo" />
                    </Link>
                    <h4>Welcome Back</h4>
                    <img
                        // onClick={signInGoogle}
                        src="https://pngimage.net/wp-content/uploads/2018/06/login-with-google-png-4.png"
                        alt="login"
                    />
                </div>
                <h4> OR </h4>
                <div className="login__formMiddle">
                    <input type="email" placeholder="Email or Username" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <h5>
                        <Checkbox
                            color="primary"
                            // onClick={handleChange}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />
                    Remember Me
                    <span className="login__formMiddle-space">
                            <Link to="/">Forgot Password?</Link>
                        </span>
                    </h5>
                    <button onClick={signIn} type="submit" className="login__signInButton"> Log In</button>
                </div>
                <div className="login__formBottom">
                    <hr />
                    <h5>
                        Don't have an account?
                        <Link to="/signup"> Sign Up</Link>
                    </h5>
                    <img src="https://www.teleware.com/wp-content/uploads/2018/08/Google-play-and-istore-badges-300x104.jpg" alt="apple" />
                </div>
            </div>

        </div>
    )
}

export default Login;