import { Main, NotFound, PlayerVideo } from './Views';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Header } from 'components';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/:videoId" element={<PlayerVideo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
