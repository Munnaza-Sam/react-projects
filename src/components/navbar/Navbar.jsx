import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className={styles.navbar}>
            <img onClick={()=>navigate("/")} className={styles.logo} src="/icon.png" width={70} />
            <div className={styles.nav_link}>
                <NavLink to="/" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.actived}` : styles.nav_link}
                    >Weather
                </NavLink >
                <NavLink to="/quiz" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.actived}` : styles.nav_link}>Quiz</NavLink >
                <NavLink to="/todo" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.actived}` : styles.nav_link}>ToDo List</NavLink >
                <NavLink to="/food" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.actived}` : styles.nav_link}>Food</NavLink >
                <NavLink to="/disney" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.actived}` : styles.nav_link}>Disney Land</NavLink >
            </div>
        </nav>
    );
};

export default Navbar;

