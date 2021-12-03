import { makeStyles } from '@material-ui/core';
import { PreviewVideo, Spinner } from 'components';

const useStyles = makeStyles({
  listContainer: {
    width: '100%',
    maxWidth: '700px',
    display: 'flex',
    flexDirection: 'column',
    gridGap: '30px',
  },
});



const ListContainer = ({ list }) => {
  const classes = useStyles();
  return list.length === 0 ? (
    <Spinner />
  ) : (
    <div className={classes.listContainer}>
      {list.map((element, index) => {
        return <PreviewVideo key={index} data={element} index={index} />;
      })}
    </div>
  );
};

export default ListContainer;
