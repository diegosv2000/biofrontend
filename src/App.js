import { makeStyles } from '@mui/styles';
import Header from 'components/Header';

const useStyles = makeStyles({
  app: {
    background: 'red',
    height: '100vh',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
};

export default App;
