import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './style.module.css';
import Grid from '@mui/material/Grid';
import logo from "../../assets/logo.png"
import { Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const isAuthenticated: Boolean = false;

const pages = [
  { path: '/', label: 'Home' },
  { path: '/cryptocurrency', label: 'Cryptocurrency' },
  { path: '/blogs', label: 'Blogs' },
  { path: '/write-blog', label: 'Write a blog' },
  { path: '/signup', label: 'Signup' },
];

const Navbar: React.FC = () => {

  return (
    <header>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={2}>
            <div className={style.header__logo}>
              <Link to="/" ><img src={logo} alt="logo" /></Link>
            </div>
          </Grid>
          <Grid item xs={8} sx={{ alignSelf: 'center' }}>
            <nav>
              {pages.map((page, index) => (
                <NavLink to={page.path} key={index} 
                  className={({ isActive }) => isActive ? style.active : style.inActive} >
                  {page.label}
                </NavLink>
              ))}
            </nav>
          </Grid>

          <Grid item xs={2} sx={{ alignSelf: 'center' }}>
            {isAuthenticated ?
              <NavLink to="/logout"
                className={({ isActive }) => isActive ? style.active : style.inActive} >
                <PersonIcon fontSize="large" /> Logout
              </NavLink>
              :
              <NavLink to="/login"
                className={({ isActive }) => isActive ? style.active : style.inActive} >
                <PersonIcon fontSize="large" /> Login
              </NavLink>
            }
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Navbar;
