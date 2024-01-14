import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="component-outline" style={{ textAlign: 'center', marginTop: '50px'}} >
      <h1>404: Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p><br />
      <Link to={`/`}>
        <button style={{ fontSize: '15px', padding: '10px' }}>Return Home</button>
      </Link>
    </div>
  );
};

export default NotFound;