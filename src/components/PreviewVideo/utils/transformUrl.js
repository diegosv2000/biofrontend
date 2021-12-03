const transformUrl = (url) => {
  const results = url.match('[\\?&]v=([^&#]*)');
  const idVideo =
    results === null
      ? 'https://s1.eestatic.com/2017/05/11/actualidad/actualidad_215241178_129877067_1706x960.jpg'
      : results[1];
  const imgVideo = `https://img.youtube.com/vi/${idVideo}/hqdefault.jpg`;

  return imgVideo;
};

export default transformUrl;
