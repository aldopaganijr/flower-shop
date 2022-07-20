import "./SignUpForm.scss"
import { useState } from "react"
import FormInput from "../form-input/FormInput"
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase'
import Button from "../button/Button"


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;



  const clearFormField = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
      alert("Your passwords do not match, please try again!")
      return;
    }

    try{
      const {user} = await createAuthUserWithEmailAndPassword(
        email, 
        password,
      );

      await createUserDocumentFromAuth(user, {displayName})
      clearFormField();


    } catch (error){
      if(error.code === 'auth/email-already-in-use'){
        alert('Email is already in use, please try again!')
      }
      console.log("user encountered error", error)
    }

  }



  const handleChange = (event) => {
    const {name, value} = event.target

    setFormFields({...formFields, [name]: value})
  }

  return (

    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}> 
          <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

          <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

          <FormInput label="Password"  type="password" required onChange={handleChange} name="password" value={password}/>

          <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

          <Button id="sign-up-button" type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm