import './Authentication.scss'
import SignUpForm from "../../sign-up-form/SignUpForm";
import SignInForm from "../../sign-in-form/SignInForm"



const Authentication = () => {

  return (
    <div>
        <h1>Sign-in</h1>
        <SignInForm />
        <SignUpForm/>
    </div>
  )
}

export default Authentication