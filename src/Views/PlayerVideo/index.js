import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { Button, Spinner } from 'components';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams, useNavigate } from 'react-router-dom';
import { NotFound } from 'Views';

const useStyles = makeStyles((theme) => ({
  playerVideoContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gridGap: '30px',
    padding: '3rem',
    alignItems: 'center',
  },
  informationContainer: {
    width: '100%',
    maxWidth: '700px',
    '& h1': {
      textAlign: 'center',
      margin: '2rem auto',
    },
  },
  playerContainer: {
    width: '100%',
    maxWidth: '700px',
    margin: '1rem',
    '& p': {
      fontFamily: 'inter',
      fontSize: '20px',
      fontWeight: '600',
      margin: '10px 0',
    },
  },
  video: {
    width: '100%',
  },
  caracteristica: {
    fontSize: 'inter',
    '& h2': {
      margin: '10px 0',
    },
    '& h3': {
      margin: '10px 0',
    },
    '& ul': {
      marginLeft: '2rem',
    },
    '& p': {
      margin: '10px 0',
      fontWeight: '500',
    },
  },
  planosEjes: {},
  ejes: {
    margin: '25px 0',
    '& h3': {
      margin: '5px 0',
    },
    '& ul': {
      marginLeft: '2rem',
    },
  },
  artrocinematica: {
    fontSize: 'inter',
    '& div': {
      margin: '1.5rem 0',
    },
  },
  leyConcavoConvexo: {
    '& h2': {
      margin: '10px 0',
    },
  },
  ligamentos: {
    margin: '1rem 0',
    '& ul': {
      marginLeft: '2rem',
    },
  },
  musculos: {
    margin: '3rem 0',
    '& div': {
      margin: '1rem 0 1.5rem 0',
    },
    '& ul': {
      marginLeft: '2rem',
    },
  },
}));

const PlayerVideo = () => {
  const classes = useStyles();
  const { videoId } = useParams();
  const [information, setInformation] = useState(null);
  const navigate = useNavigate();
  const [isLoged, setIsLoged] = useState(localStorage.getItem('isLoged'));
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    var data = JSON.stringify({
      urlId: 'glenohumeral',
    });

    var config = {
      method: 'get',
      url: 'https://us-central1-bioarticular.cloudfunctions.net/app/api/videoInformation',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setInformation(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if (information) {
      setSelected(information.filter((doc) => doc.urlId === videoId)[0]);
    }
  }, [information]);

  if (!isLoged) {
    return <NotFound />;
  }
  return selected ? (
    <div className={classes.playerVideoContainer}>
      <div className={classes.informationContainer}>
        <h1>{selected.nombre}</h1>
        <section className={classes.caracteristica}>
          <h2>Características</h2>
          <h3>Tipo: {selected.caracteristicas.tipo}</h3>
          <ul>
            {selected.caracteristicas.conformantes.map((element, index) => {
              return <li key={index}>{element}</li>;
            })}
          </ul>
          {selected.caracteristicas.tipo_articulacion !== '' && (
            <p>Articulación: {selected.caracteristicas.tipo_articulacion}</p>
          )}
        </section>
        <section className={classes.planosEjes}>
          {selected.planos_ejes.map((e1, index) => {
            return (
              <div key={index} className={classes.ejes}>
                <h3>{e1.plano}</h3>
                <h3>Eje: {e1.eje}</h3>
                <div>
                  <h3>Movimientos</h3>
                  {e1.movimiento.length !== 0 ? (
                    <ul>
                      {e1.movimiento.map((e2, index2) => {
                        return <li key={index2}>{e2}</li>;
                      })}
                    </ul>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            );
          })}
        </section>
        <section className={classes.artrocinematica}>
          <h2>{selected.artrocinematica.titulo}</h2>
          <p>{selected.artrocinematica.descripcion}</p>

          {selected.artrocinematica.subtitulos.map((element, index) => {
            return (
              <div key={index}>
                <h3>{element.subtitulo}</h3>
                <p>{element.descripcion}</p>
              </div>
            );
          })}
        </section>
        <section className={classes.leyConcavoConvexo}>
          <h2 className="title">LEY CONCAVO-CONVEXO</h2>
          {selected.ley_concavo_convexo.ley.map((ley, index) => {
            return (
              <div key={index}>
                <h3>{ley.titulo}</h3>
                <p>{ley.descripcion}</p>
                {ley.componentes.length !== 0 && (
                  <div className="componentes">
                    <h4>Componentes:</h4>
                    <ul>
                      {ley.componentes.map((component, index2) => {
                        <li key={index2}>{component}</li>;
                      })}
                    </ul>
                  </div>
                )}
                {ley.movimiento.length !== 0 && (
                  <div className="movimientos">
                    <h4>Movimientos:</h4>
                    <ul>
                      {ley.componentes.map((mov, index2) => {
                        <li key={index2}>{mov}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </section>
        <section className={classes.ligamentos}>
          <h2>Ligamentos</h2>
          <ul>
            {selected.ligamentos.map((ligamento, index) => {
              return <li key={index}>{ligamento}</li>;
            })}
          </ul>
        </section>
        <section className={classes.musculos}>
          <h2>Músculos</h2>
          {selected.musculos.map((musculo, index) => {
            return (
              <div key={index}>
                <h4>{musculo.titulo}</h4>
                <ul>
                  {musculo.componentes.map((e, index2) => {
                    return <li key={index2}>{e}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </section>
      </div>
      {selected.osteocinematica.map((element, index) => {
        return (
          <div key={index} className={classes.playerContainer}>
            <p>{element.titulo}</p>
            <div className={classes.video}>
              <ReactPlayer
                url={element.link}
                className="react-player"
                playing={false}
                width="100%"
                controls={true}
              />
            </div>
          </div>
        );
      })}
      <Button
        typeButton="outline"
        label="Regresar"
        onClick={() => navigate(-1)}
      />
    </div>
  ) : (
    <Spinner />
  );
};

export default PlayerVideo;
