import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );

    if (response.ok) {
      const json = await response.json();
      setMovie(json.data.movie);
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  return <div>{loading ? <h2>loading...</h2> : <h2>{movie.title}</h2>}</div>;
}
export default Detail;
