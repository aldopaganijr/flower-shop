import "./signin.scss"

import {signInWithGooglePopup, createUserDocumentFromAuth} from  "../../../utils/firebase/firebase";
import SignUpForm from "../../sign-up-form/SignUpForm";


const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }




  return (
    <div>
        <h1>Sign in</h1>
        <button onClick={logGoogleUser}>Log in with google</button>
        <SignUpForm />
    </div>
  )
}

export default SignIn