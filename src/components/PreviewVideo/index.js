import { makeStyles } from '@mui/styles';
import { Spinner } from 'components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import transformUrl from './utils/transformUrl';

const useStyles = makeStyles({
  previewVideoContainer: {
    width: '100%',
    height: '150px',
    display: 'flex',
    background: 'white',
    transition: '.5s',
    cursor: 'pointer',
    '& :hover': {
      background: '#FBFBFB',
    },
    '& img': {
      width: '200px',
      borderRadius: '5px',
      border: '1px solid #c4c4c4',
    },
  },
  informationContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 0 5px 1rem',
    '& h3': {
      // whiteSpace: 'nowrap',
      // textOverflow: 'ellipsis',
      // overflow: 'hidden',
      fontSize: '2rem',
      fontWeight: '500',
      width: '100%',
    },
  },
  secondaryInfoContainer: {
    color: '#5E5E5E',
    '& p': {
      fontSize: '20px',
    },
  },
});

const PreviewVideo = ({ data, index }) => {
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
          <p>3 feb. 2016</p>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default PreviewVideo;
