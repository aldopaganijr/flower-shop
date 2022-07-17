import "./signin.scss"
import {signInWithGooglePopup} from  "../../../utils/firebase/firebase";


const signIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response)
  }


  return (
    <div>
        <h1>Sign in</h1>
        <button onClick={logGoogleUser}>Log in with google</button>
    </div>
  )
}

export default signIn