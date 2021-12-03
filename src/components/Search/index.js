import { makeStyles } from '@mui/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const useStyles = makeStyles({
  searchContainer: {
    width: '100%',
    maxWidth: '700px',
    position: 'relative',
    '& .icon-container': {
      position: 'absolute',
      width: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: '50%',
      left: '.5rem',
      transform: 'translateY(-50%)',
    },
    '& input': {
      padding: '.7rem 1rem .7rem 3rem',
      width: '100%',
      fontSize: '1rem',
      borderRadius: '15px',
      transition: '.4s',
      border: 'none',
      background: '#F8F8F8',
      boxShadow: '4px 4px 8px rgba(172, 172, 172, 0)',
      '&:focus': {
        paddingLeft: '3.5rem',
        background: 'white',
        boxShadow: '4px 4px 8px rgba(172, 172, 172, 0.2)',
      },
      "&::placeholder":{
        color:'#ADAEBB'
      }
    },
  },
});

const Search = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.searchContainer}>
      <div className="icon-container">
        <SearchOutlinedIcon sx={{ color: '#ADAEBB', fontSize: 25 }} />
      </div>
      <input placeholder={props.placeholder} onKeyUp={props.onChange} />
    </div>
  );
};

export default Search;
