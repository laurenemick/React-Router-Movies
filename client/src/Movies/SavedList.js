import React from 'react';
import { useHistory, Link } from 'react-router-dom'

export default function SavedList(props) {
  const history = useHistory() 

  const routeToHome = () => {
    if (true) { 
      history.push('/')
    } else {
      history.push('null')
    }
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`./${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
        </Link>
      ))}
      <div  onClick={routeToHome}className="home-button">Home</div>
    </div>
  )
};

