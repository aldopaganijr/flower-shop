import './Authentication.scss'
import SignUpForm from "../../sign-up-form/SignUpForm";
import SignInForm from "../../sign-in-form/SignInForm"



const Authentication = () => {

  return (
    <div className='authentication-container'>
        <SignInForm />
        <SignUpForm/>
    </div>
  )
}

export default Authentication