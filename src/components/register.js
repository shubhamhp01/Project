import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import ItemService from '../service/ItemService'
import { Route, Routes } from 'react-router-dom'
import Login from './login';
import validator from 'validator'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function Form() {
 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_no, setPhone] = useState('');
  const [password, setPassword] = useState('');
 
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState()
  const [passError, setPasswordError] = useState('')

  const [registerModal, setRegisterModal] = useState(false)
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
// Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
      let email = e.target.value
      setEmail(email);
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
        
      } else {

        setEmailError('Enter valid Email!')
      }
    
    setSubmitted(false);
  };

//   Handling the phone no change
  const handlePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
    if(validator.isMobilePhone(phone,['en-IN']))
    {
        setPhoneError("Is Valid")
    }
    else{
        setPhoneError("Enter valid Phone number!")
    }
    // const isValidPhoneNumber = validator.isMobilePhone(number)
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    
    const password = e.target.value;
    setPassword(password);
    if(validator.isStrongPassword(password))
    {
        setPasswordError("Is Valid")
    }
    else{
        setPasswordError("Minimum => (8 characters, 1LowerCase, 1UpperCase, 1Number) required!")
    }
    // isStrongPassword
    setSubmitted(false);
  };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || phone_no === '' || password === '') {
          setError(true);
        } else {
          setSubmitted(true);
          const propUserInfo = {name_user:name,email_id:email,phone_no:phone_no,password:password}
          ItemService.setUserInfo("userinfo",propUserInfo)
        //   getUserId();
          setError(false);
          setRegisterModal(true);

        }
      };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <Dialog open={registerModal} onClose={() => setRegisterModal(false)}>

          <DialogTitle>Registration</DialogTitle>

          <DialogContent>
              <DialogContentText>User {name} has been Registered!</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setRegisterModal(false)} 
                color="primary" autoFocus>
                Close
            </Button>
          </DialogActions>

          </Dialog>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  const navigate = useNavigate();


  return (
    <div className = 'Register'>

      <div className='screen-register'>

        <div className="form">
          
 
          {/* Calling to the methods */}
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
 
          <form className='register'>
            <div className='title'>
              <h1>User Registration</h1>
            </div>

            <div className='login-field'>

              <label className="label">Name</label>
              <input onChange={handleName} className="login-input"
                value={name} type="text" />
            </div>

            <div className='login-field'>
              <label className="label" >Email</label>
              <input onChange={handleEmail} className="login-input" value={email} type="email" />
            
              <br></br> 
              <span style={{ color: 'white'}}>{emailError}</span>
            </div>
            <div className='login-field'>

            <label className="label">Phone number</label>
            <input onChange={handlePhone} className="login-input" value={phone_no} type="phoneno" />
             <br></br>

            <span style={{  color: 'white'}}>{phoneError}</span>
            </div>

            <div className='login-field'>
              <label className="label">Password</label>
              <input onChange={handlePassword} className="login-input"
                value={password} type="password" />
                <br></br>

              <span style={{color: 'white'}}>{passError}</span>
            </div>

            <button onClick={handleSubmit} className="login-submit" type="submit">
              Submit
            </button>

            <p>
                <Link to = '/' className='login-submit'>
                  Login Page
                </Link>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
}