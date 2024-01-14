import React from 'react';
import {Link} from 'react-router-dom'

const HttpError = ({res}) => {
    let resMsg; 
    if (res.code === 400){
      resMsg = 'The request is invalid or malformed. Please check your request and try again.'
    } else if (res.code === 404){
      resMsg = 'Sorry, the page you are looking for does not exist.'
    }

    return (
        <div className="component-outline" style={{ textAlign: 'center', marginTop: '50px'}} >
          <h1> {`${res.code}: ${res.msg}`} </h1>
          <p>{resMsg}</p><br />
          <Link to={`/`}>
            <button style={{ fontSize: '15px', padding: '10px' }}>Return Home</button>
          </Link>
        </div>
      );
}

export default HttpError;