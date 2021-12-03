import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { Input, Button } from 'components';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const useStyles = makeStyles({
  signInContainer: {
    width: '100%',
    padding: '7rem 0 3rem',
    display: 'flex',
    justifyContent: 'center',
  },
  signInForm: {
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

const SignIn = ({ setShowSignIn }) => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [isSignIn, setIsSignIn] = useState(false);
  const [dataReturned, setDataReturned] = useState(null);
  const [verifCredential, setVerifCredential] = useState(null);
  const [isLoged, setIsLoged] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const changeView = () => {
    setShowSignIn(false);
  };

  const writeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const credentials = JSON.stringify(data);

    const config = {
      method: 'get',
      url: 'http://localhost:5000/bioarticular/us-central1/app/api/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: credentials,
    };

    axios(config)
      .then(function (response) {
        setDataReturned(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (dataReturned) {
      setVerifCredential(
        dataReturned.filter(
          (doc) => doc.email === data.email && doc.password === data.password
        )
      );
    }
  }, [dataReturned]);
  useEffect(() => {
    if (verifCredential) {
      if (verifCredential.length === 0) {
        setIsLoged('NOTFOUND');
        setShowAlert(!showAlert);
        Swal.fire(
          'Ha ocurrido un error!',
          'Revisa que los datos ingresados sean los correctos.',
          'warning'
        );
      } else {
        setIsLoged('LOGED');
        localStorage.setItem('isLoged', true);
        window.location.reload();
      }
    }
  }, [verifCredential]);
  return (
    <div className={classes.signInContainer}>
      <form className={classes.signInForm} onSubmit={sendData}>
        <h2>Iniciar Sesion</h2>
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
          <Button type="submit" label="INGRESAR" />
        </div>
        <div className={classes.textContainer}>
          <p>¿Aún no tienes una cuenta?</p>
          <Button onClick={changeView} label="Regístrate" typeButton="text" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
