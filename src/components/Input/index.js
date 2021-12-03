import { makeStyles } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '46px',
    width: '100%',
    maxWidth: '280px',

    '& .icon-container': {
      background: '#F8F8F8',
      width: '46px',
      height: '46px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderRadius: '15px',
      transition: '.4s',
      top: '0',
      left: '0',
    },
    '& input': {
      height: '100%',
      padding: '5px 5px 5px 55px ',
      fontSize: '18px',
      border: 'none',
      background: '#F8F8F8',
      borderRadius: '15px',
      transition: '.4s',
      '&::placeholder': {
        color: '#94969B',
      },
    },
    '& input:focus': {
      padding: '5px 5px 5px 60px ',
    },
    '& input:focus~.icon-container': {
      background: 'white',
      top: '-10px',
      left: '-10px',
      boxShadow: '0px 0px 27px rgba(0, 0, 0, 0.12)',
      '&>*': {
        fill: '#717FFF',
      },
    },
  },
});

const Input = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <input
        onChange={props.onChange}
        onKeyUp={props.onChange}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      />
      <div className="icon-container">
        {props.iconType === 'password' ? (
          <LockIcon sx={{ color: '#171E29', fontSize: 18 }} />
        ) : (
          <PersonIcon sx={{ color: '#171E29', fontSize: 18 }} />
        )}
      </div>
    </div>
  );
};

export default Input;
