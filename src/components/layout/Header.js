import React, { StrictMode } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header=(props)=>{
  const branding=props;
  return(
   < nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
     <div className="container">
<a href="/" className="navbar">{branding}</a>
<ul className="navbar-nav mr-auto">
<li className="nav-item">
<Link href="/" className="nav-link"><i className="fas fa-home"></i>
  Home
</Link>
</li>
<li className="nav-item">
<Link href="/contact/add" className="nav-link"><i className="fas fa-plus"></i>
  Add
</Link>
</li>
<li className="nav-item">
<Link href="/about" className="nav-link"><i className="fas fa-question"></i>
  About
</Link>
</li>


</ul>
     </div>
     </nav>

  );
  };
  Header.defaultProps={
    branding:'My App'
  };
  Header.PropTypes={
    branding:PropTypes.string.isRequired
  };
  // const headingStyle={
  //   color:'red',fontSize:'50px'
  // };
export default Header;