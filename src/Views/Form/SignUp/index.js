import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { Input, Button } from 'components';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  signUpContainer: {
    width: '100%',
    padding: '7rem 0 3rem',
    display: 'flex',
    justifyContent: 'center',
  },
  signUpForm: {
    width: '100%',
    maxWidth: '500px',
    border: '1px solid #E9E9E9',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    gridGap: '2rem',
    padding: ' 2rem',
    '& h2': {
      textAlign: 'center',
      fontSize: '2rem',
    },
    '&>div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gridGap: '2rem',
    },
  },
});

const SignUp = ({ setShowSignIn }) => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [message, setMessage] = useState(null);

  const changeView = () => {
    setShowSignIn(true);
  };
  const writeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    const credentials = JSON.stringify(data);

    const config = {
      method: 'post',
      url: 'http://localhost:5000/bioarticular/us-central1/app/api/users/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: credentials,
    };

    axios(config)
      .then(function (response) {
        setMessage(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (message !== null) {
      if (message === 'created') {
        localStorage.setItem('isLoged', true);
        window.location.reload();
      }
    }
  }, [message]);
  return (
    <div className={classes.signUpContainer}>
      <form className={classes.signUpForm} onSubmit={sendData}>
        <h2>Registrarse</h2>
        <div className={classes.inputContainer}>
          <Input
            onChange={writeData}
            type="email"
            placeholder="Email"
            name="email"
          />
          <Input
            onChange={writeData}
            type="password"
            placeholder="Contraseña"
            iconType="password"
            name="password"
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button label="REGISTRAR" />
        </div>
        <div className={classes.textContainer}>
          <p>¿Ya tienes una cuenta?</p>
          <Button
            onClick={changeView}
            label="Iniciar sesión"
            typeButton="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
