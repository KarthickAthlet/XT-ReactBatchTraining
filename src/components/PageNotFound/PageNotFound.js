import React from "react";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
    <div>
      Page Not found.!!!
      <Link to='/' >Click here to go back to homepage</Link>
    </div>);
}

export default PageNotFound;
