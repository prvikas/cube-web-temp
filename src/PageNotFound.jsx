import React from 'react';


const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  )
  
function NotFound() {
   
    return (
<div id="notfound">
<div className="notfound">
    <div className="notfound-404">
        <h1 >404</h1>
    </div>
    <h2>Oops! This Page Could Not Be Found</h2>
    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
    <a href="#" alt="Not valid">Go To Homepage</a>
</div>
</div>
    );
  }

export default NotFound;

