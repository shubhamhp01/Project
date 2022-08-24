import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import ItemService from '../service/ItemService';
import ItemsComponent from './ItemsComponent';
import Navbar from './Navbar';
export default function Login(){

    const propDict = {title : "Manage Products" ,index : "Code", productName :"Name", image :"Image", product_price: "Price", category :"Category", reviews : "Reviews", status : "Status" }
    let navigate = useNavigate();
    // const history = useHistory();
    
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');

 // States for checking the errors
 const [submitted, setSubmitted] = useState(false);
 const [error, setError] = useState(false);

 // Handling the userid change
 const handleUserid = (e) => {
    setUserid(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

// Handling the form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    if (userid === '' || password === '') {
      setError(true);
    } else {
      
     
      let userPresent = await ItemService.getUserInfo(userid,password)
      
    //   console.log(userPresent);
      if(!userPresent){
        
        setError(true);
      }
      else{
        localStorage.setItem('userid',userPresent.userid)
        setSubmitted(true);
        window.location.reload();
      }

    }
  };



// Showing success message
const successMessage = () => {
    // navigate('/items');
    
    return (
        
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        
        <h1>User {userid} successfully Loggedin!! </h1>
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
        <h1>Please enter all the fields/ Fields are incorrect</h1>
      </div>
    );
  };

  return(
    <>
    
    {localStorage.getItem('userid')!=null ? <Navbar propDict = {propDict}/>:
    
      <div className = 'Register'>
        <div className='screen-login'>
          <div className="form">
            

            {/* Calling to the methods */}
            <div className="messages">
              {errorMessage()}
              {successMessage()}
            </div>

            <form className='login'>
              <div className='title'>
              <h1>Login Page</h1>
              </div>

              <div className='login-field'>

                <label className="label">User Name</label>
               
                <input onChange={handleUserid} className="login-input"
                  value={userid} type="userid" />

              </div>

              <div className='login-field'>

                <label className="label">Password</label>
                <input onChange={handlePassword} className="login-input"
                  value={password} type="password" />

              </div>

              <button onClick={handleSubmit} className="login-submit" type="submit">
                Log in Now
              </button>

              <button onClick={() => navigate('/register')} className="login-submit" type="submit">
                New User? Register
              </button>
            
            </form>
          </div>
        </div>
      </div>
    }
    
    
    </>
  );

}