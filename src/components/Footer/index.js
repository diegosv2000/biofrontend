import { makeStyles } from '@material-ui/core';
import Logo from 'assets/fondo.png';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem 0',
    '& img': {
      height: '50px',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return <div className={classes.footerContainer}>Powered by Codesty</div>;
};

export default Footer;
