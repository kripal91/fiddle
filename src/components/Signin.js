// SigninForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase'; // Assuming this is the Firebase configuration
import logo from "../images/logo.png"
import './Signup.scss';

const SigninForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const authInstance = getAuth();
      const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
      console.log('User signed in successfully!', userCredential.user);

      // Redirect to the home page after successful sign-in
      navigate('/Home');
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const authInstance = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(authInstance, provider);
      console.log('User signed in with Google:', userCredential.user);

      // Redirect to the home page after successful sign-in
      navigate('/Home');
    } catch (error) {
      console.error('Error during Google sign-in:', error.message);
    }
  };

  return (
    <div className='sign'>
      <div className='logo'>
        <img src={logo} alt="RowX"></img>
      </div>
    <div className="signup-container">
      <h2 className="signup-title">Sign In </h2>
      <div className="divider"></div>
      <form onSubmit={handleSignIn} className="signup-form">
        
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter registered mail id'
          />
        
        <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='enter your password'
          />
        <br />
        <button type="submit">Sign In</button>
      </form>

      <div className="or-divider">OR</div>

      <button onClick={handleGoogleSignIn} className="google-signup-btn">
        Sign In with Google
      </button>
    </div>
  </div>
  );
};

export default SigninForm;
