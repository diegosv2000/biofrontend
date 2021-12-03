import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { Button, Search, Spinner } from 'components';
import { useEffect, useState } from 'react';
import ListContainer from './components/ListContainer';

const useStyles = makeStyles((theme) => ({
  listVideoContainer: {
    width: '100%',
    padding: '3rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gridGap: '2rem',
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 1rem',
    },
  },
}));

const config = {
  method: 'get',
  url: 'https://us-central1-bioarticular.cloudfunctions.net/app/api/listVideos',
  headers: {
    'Content-Type': 'application/json',
  },
};

const ListVideo = () => {
  const classes = useStyles();
  const [list, setList] = useState(null);
  const [auxList, setAuxList] = useState(null);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setList(response.data);
        setAuxList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const searchVideo = (e) => {
    if (
      auxList.filter((element) =>
        element.title.stringValue
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ).length === 0
    ) {
      setList(auxList);
    } else {
      const filtered = auxList.filter((element) =>
        element.title.stringValue
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setList(filtered);
    }

    if (e.target.value === '') {
      setList(auxList);
    }
  };
  return (
    <div className={classes.listVideoContainer}>
      <Search placeholder="Busca una articulación" onChange={searchVideo} />
      {list === null ? <Spinner /> : <ListContainer list={list} />}
    </div>
  );
};

export default ListVideo;
