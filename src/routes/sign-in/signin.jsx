import { signInWithGooglePopup, userDocumentFirebasedb } from "../../util/firebase/firebase";

const SignIn = () => {
  const usersignin = async () => {
    const {user} = await signInWithGooglePopup();
    console.log(user)
    userDocumentFirebasedb(user)
   
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={usersignin}>SignIn</button>
    </div>
  );
};

export default SignIn;
