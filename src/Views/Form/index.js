import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import SignIn from './Signin';
import SignUp from './SignUp';

const Form = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  return showSignIn ? (
    <SignIn setShowSignIn={setShowSignIn} />
  ) : (
    <SignUp setShowSignIn={setShowSignIn} />
  );
};

export default Form;
