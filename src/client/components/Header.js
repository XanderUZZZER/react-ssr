import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {

  console.log('my auth status is: ', auth);

  const authButton = auth ? (
    <a href='/api/logout'>Logout</a>
  ) : (
      <a href='/api/auth/google'>Login</a>
    )

  return (
    <nav className='nav-wrapper'>
      <Link to='/' className='brand-logo'>React SSR</Link>
      <ul className='right'>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/admins'>Admins</Link></li>
        <li>{authButton}</li>
      </ul>
    </nav>
  )
};

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps)(Header);
