import { makeStyles } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Form from 'Views/Form';
import ListVideo from 'Views/ListVideo';

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
