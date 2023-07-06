import React from 'react'
import { Link } from 'react-router-dom'
import styles from './notfound.module.css'
const NotFound = () => {
  return (
    <>
    <section className={styles.NotFound}>
       <h1>Oops !  </h1>
       <h3>404 PAGE NOT FOUND </h3>
       <p>The page you are looking for might have been removed <br />
         had its changed or is temporarily unavaliable</p>
       <Link to="/">GO TO HOMEPAGE </Link>
    </section>
    </>
  )
}

export default NotFound