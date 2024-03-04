// SignupForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase'; // Assuming this is the Firebase configuration
import logo from "../images/logo.png"
import './Signup.scss';

const SignupForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const authInstance = getAuth();
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
      console.log('User registered successfully!', userCredential.user);

      // Set success message and navigate to the home page after successful sign-up
      setSuccessMessage('Sign-up successful! Redirecting to the home page...');
      setTimeout(() => {
        navigate('/Home');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Error during registration:', error.message);
      setSuccessMessage(''); // Clear success message in case of an error
    }
  };

  const handleGoogleSignup = async () => {
    const authInstance = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(authInstance, provider);
      console.log('User signed up with Google:', userCredential.user);

      // Set success message and navigate to the home page after successful sign-up
      setSuccessMessage('Sign-up with Google successful! Redirecting to the home page...');
      setTimeout(() => {
        navigate('/Home');
      }, 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Error during Google sign-up:', error.message);
      setSuccessMessage(''); // Clear success message in case of an error
    }
  };

  return (
    <div className='sign'>
      <div className='logo'>
        <img src={logo} alt="RowX"></img>
      </div>
      <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <div className="divider"></div>

      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSignup} className="signup-form">
        
          <input
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='enter your college email id'
          />
        <br />
        
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='create password'
          />
        <br />
        <button type="submit">Sign Up</button>
      </form>

      <div className="or-divider">OR</div>

      <button onClick={handleGoogleSignup} className="google-signup-btn">
        Sign Up with Google
      </button>
    </div>
       </div>
  );
};

export default SignupForm;
