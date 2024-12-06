import SignUpForm from "../../components/sign-up/sign-up";
import { signInWithGooglePopup, userDocumentFirebasedb } from "../../util/firebase/firebase";

const Authentication = () => {
  const usersignin = async () => {
    const {user} = await signInWithGooglePopup();
    console.log(user)
    userDocumentFirebasedb(user)
   
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={usersignin}>Google Signup</button>
      <SignUpForm/>
    </div>
  );
};

export default Authentication;
