import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { Button, Search, Spinner } from 'components';
import { useEffect, useState } from 'react';
import ListContainer from './components/ListContainer';

const useStyles = makeStyles({
  listVideoContainer: {
    width: '100%',
    padding: '3rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gridGap: '2rem',
  },
});

const config = {
  method: 'get',
  url: 'http://localhost:5000/bioarticular/us-central1/app/api/listVideos',
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
    setList(
      auxList.filter((element) =>
        element.title.stringValue
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ).length !== 0
        ? auxList.filter((element) =>
            element.title.stringValue
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
        : auxList
    );
    if (e.target.value === '') {
      setList(auxList);
    }
  };
  return (
    <div className={classes.listVideoContainer}>
      <Search placeholder="Busca un video" onChange={searchVideo} />
      {list === null ? <Spinner /> : <ListContainer list={list} />}
    </div>
  );
};

export default ListVideo;
