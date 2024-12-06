import { useState } from 'react';
import { signinEmailAuth ,userDocumentFirebasedb} from '../../util/firebase/firebase';
import FormInput from '../form-input/form-input';
import Button from '../Button/button-component';

import './sign-up.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event)=>{
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };

    event.preventDefault();
    if(formFields.confirmPassword !== formFields.password) {
      alert ("Password does not match")
      return;
    }
    try{
      const {user} = await signinEmailAuth(email , password)
      user.displayName = displayName;
      userDocumentFirebasedb(user)
      resetFormFields();
    }catch(error){
      console.log("Error : ", error.message)
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
