import { makeStyles } from '@mui/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactComponent as Bioarticular } from 'assets/icons/bioarticular.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  headerContainer: {
    borderBottom: '1px solid #E9E9E9',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2.5rem',
    width: '100%',
    top: '0',
    left: '0',
  },
  logo: {
    background: 'none',
    display: 'flex',
    flexDirection: 'row',
    height: '3.5rem',
    '& >*': {
      height: '100%',
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
}));

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [isloged, setIsLoged] = useState(
    localStorage.getItem('isLoged') ? localStorage.getItem('isLoged') : false
  );
  const signOut = () => {
    localStorage.removeItem('isLoged');
    navigate(-1);
    setIsLoged(false);
  };

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logo} onClick={() => navigate('')}>
        <Bioarticular />
      </div>
      {isloged && (
        <button className={classes.logoutButton} onClick={signOut}>
          <LogoutIcon /> <p>Salir</p>
        </button>
      )}
    </div>
  );
};

export default Header;
