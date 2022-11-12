import React from 'react'
import SearchBar from './SearchBar/SearchBar';
import Filtrado from './Filtrado/Filtrado';

import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <nav>   
            <div className={styles.container}>
                <SearchBar/>
                <Filtrado/>
                <Link to='/createProduct'> <button> Create Product </button></Link>
                <Link to='/about'> <button> ABOUT </button></Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;