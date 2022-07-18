import "./signin.scss"
import {signInWithGooglePopup, createUserDocumentFromAuth} from  "../../../utils/firebase/firebase";


const signIn = () => {

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }


  return (
    <div>
        <h1>Sign in</h1>
        <button onClick={logGoogleUser}>Log in with google</button>
    </div>
  )
}

export default signIn