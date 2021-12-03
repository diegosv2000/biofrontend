import { makeStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { ReactComponent as Bioarticular } from 'assets/icons/bioarticular.svg';
import { ReactComponent as IsoBio } from 'assets/icons/isoBio.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    borderBottom: '1px solid #E9E9E9',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2.5rem',
    width: '100%',
    top: '0',
    left: '0',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
    },
  },
  logo: {
    background: 'none',
    display: 'flex',
    flexDirection: 'row',
    height: '3.5rem',
    '& >*': {
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  logo2: {
    background: 'none',
    display: 'none',
    height: '3.5rem',
    '& >*': {
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  logoutButton: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Inter',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    '& p': {
      fontSize: '1.2rem',
      marginLeft: '.5rem',
    },
  },
  headerContainerNL: {
    borderBottom: '1px solid #E9E9E9',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2.5rem',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [isloged, setIsLoged] = useState(
    localStorage.getItem('isLoged') ? localStorage.getItem('isLoged') : false
  );
  const signOut = () => {
    localStorage.removeItem('isLoged');
    navigate('');
    window.location.reload();
    setIsLoged(false);
  };

  return isloged ? (
    <div className={classes.headerContainer}>
      <div className={classes.logo} onClick={() => navigate('')}>
        <Bioarticular />
      </div>
      <div className={classes.logo2} onClick={() => navigate('')}>
        <IsoBio />
      </div>
      <button className={classes.logoutButton} onClick={signOut}>
        <ExitToAppIcon /> <p>Salir</p>
      </button>
    </div>
  ) : (
    <div className={classes.headerContainerNL}>
      <div>
        <Bioarticular />
      </div>
    </div>
  );
};

export default Header;
