import { makeStyles } from '@material-ui/core';
import { Main, NotFound, PlayerVideo } from './views';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from 'components';

const useStyles = makeStyles({
  app: {
    background: 'white',
    height: 'calc(100vh - 6rem)',
    paddingTop: '5.53rem',
  },
  container: {
    width: '100%',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/:videoId" element={<PlayerVideo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
