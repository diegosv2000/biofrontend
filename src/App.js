import { makeStyles } from '@material-ui/core';
import { Main, NotFound, PlayerVideo } from './views';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from 'components';

const App = () => {
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
