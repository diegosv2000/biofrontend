import { makeStyles } from '@material-ui/core';
import { Spinner } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import transformUrl from './utils/transformUrl';

const useStyles = makeStyles((theme) => ({
  previewVideoContainer: {
    width: '100%',
    height: '150px',
    display: 'flex',
    background: 'transparent',
    transition: '.2s',
    cursor: 'pointer',
    '&:hover': {
      background: 'rgb(0,0,0,0.05)',
    },
    '& img': {
      width: '200px',
      borderRadius: '5px',
      border: '1px solid #c4c4c4',
      [theme.breakpoints.down('xs')]: {
        width: '120px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      height: '90px',
    },
  },
  informationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 0 5px 1rem',
    '& h3': {
      fontSize: '25px',
      fontWeight: '500',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
  },
  secondaryInfoContainer: {
    color: '#5E5E5E',
    '& p': {
      fontSize: '20px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
      },
    },
  },
}));

const PreviewVideo = ({ data }) => {
  const classes = useStyles();
  const [urlImage, setUrlImage] = useState(null);
  const [information, setInformation] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (data && data.urlVideo && data.urlId && data.title) {
      setInformation({
        url: data.urlVideo.stringValue,
        urlId: data.urlId.stringValue,
        title: data.title.stringValue,
      });
    }
  }, []);

  useEffect(() => {
    if (information && information.urlVideo) {
      setUrlImage(transformUrl(information.urlVideo));
    }
  }, [information]);
  return data && information ? (
    <div
      className={classes.previewVideoContainer}
      onClick={() => navigate(`/${information.urlId}`)}
    >
      {urlImage ? (
        <img src={urlImage} alt="video-img" />
      ) : (
        <img
          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/10EFF/production/_109357396_gettyimages-1094643758.jpg"
          alt="video-img"
        />
      )}
      <div className={classes.informationContainer}>
        <h3>{information.title}</h3>

        <div className={classes.secondaryInfoContainer}>
          <p>YouTube • BioArticular</p>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default PreviewVideo;
