// ./src/components/MovieShow.js
import React from 'react';

const MovieShow = ({match, movies}) => {

  return (
    <div>
      <h3>Movies Show Component!</h3>
      {/* // And here we access the `movieId` stored in match.params to render
      // information about the selected movie */}
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}

export default MovieShow;