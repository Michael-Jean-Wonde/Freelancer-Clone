import React, { useState, useEffect } from "react";
import './signup.css';
import { Link, useNavigate } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import {registerInitiate} from '../redux/actions';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const { user } = useSelector(state => state.data);
    const navigate = useNavigate();
  
   
    let dispatch = useDispatch();
    
    useEffect(() => {
      if (user) {
        navigate('/'); 
      }
    }, [user, dispatch, navigate]);
  
    const register = (e) => {
      e.preventDefault();
      dispatch(registerInitiate(email, password));
      setEmail('');
      setPassword('');
    };
    return (
        <div className="signup">
            <div className="signup__form">
                <div className="signup__formTop">
                    <Link to="/">
                        <img src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg" alt="logo" />
                    </Link>
                    <h4>Sign Up</h4>
                    <img
                        src="https://pngimage.net/wp-content/uploads/2018/06/login-with-google-png-4.png"
                        alt="login"
                    />
                </div>
                <h4> OR </h4>
                <div className="signup__formMiddle">
                    <input type="email" placeholder="Email or Username" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <h5>
                        <Checkbox
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        /> I agree to the Freelancer  and
                            <span> User Agreement </span> and
                            <span> Privacy Policy. </span>
                    </h5>
                    <button onClick={register} type="submit" className="login__signInButton"> Join Freelancer</button>
                </div>
                <div className="signup__formBottom">
                    <hr />
                    <h5>
                        Already have an account?
                        <Link to="/login"> Log in</Link>
                    </h5>
                </div>
            </div>


        </div >
    )
}

export default SignUp;