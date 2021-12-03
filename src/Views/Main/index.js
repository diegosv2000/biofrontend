import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Form from 'views/Form';
import ListVideo from 'views/ListVideo';

const useStyles = makeStyles({
  mainContainer: {
    color: 'red',
  },
});

const Main = () => {
  const classes = useStyles();
  const [isLoged, setIsLoged] = useState(
    localStorage.getItem('isLoged') ? localStorage.getItem('isLoged') : false
  );

  useEffect(() => {}, [isLoged]);
  return isLoged ? <ListVideo /> : <Form />;
};

export default Main;
