import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  buttonPrimary: {
    border: 'none',
    background: '#8D36FC',
    boxShadow: '0px 12.7273px 24.1818px -1.27273px rgba(141, 54, 252, 0.3)',
    padding: '10px 20px',
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: '.4s',
    '&:hover': {
      boxShadow: '0px 12.7273px 24.1818px -1.27273px rgba(141, 54, 252, 0)',
    },
  },
  buttonText: {
    color: '#8D36FC',
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    fontFamily: '14px',
    cursor: 'pointer',
    fontWeight: '600',
  },
  buttonOutline: {
    border: '1px solid #C4DFFF',
    color: '#3C72FF',
    background: 'none',
    fontSize: '1rem',
    padding: '.75rem 1.5rem',
    cursor: 'pointer',
    transition: '.4s',
    '&:hover': {
      border: '1px solid #3C72FF',
    },
  },
});

const Button = (props) => {
  const classes = useStyles();

  if (props.typeButton === 'outline') {
    return (
      <button onClick={props.onClick} className={classes.buttonOutline}>
        {props.label}
      </button>
    );
  } else if (props.typeButton === 'text') {
    return (
      <button onClick={props.onClick} className={classes.buttonText}>
        {props.label}
      </button>
    );
  } else {
    return (
      <button onClick={props.onClick} className={classes.buttonPrimary}>
        {props.label}
      </button>
    );
  }
};

export default Button;
