import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  notFoundContainer: {
    color: 'black',
    textAlign:'center'
  },
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.notFoundContainer}>
      <h1>404</h1>
      <h2>Not Found</h2>
    </div>
  );
};

export default NotFound;
