import React, { useEffect, useState } from 'react';
import styles from './TransitionToHome.module.css'; 
import { useNavigate } from 'react-router-dom';

const TransitionToHome: React.FC = () => {
    const [isLeaving, setIsLeaving] = useState(false);
    const navigate = useNavigate()

    // useEffect(() => {
    //     const timeOut = setTimeout(() => {
    //         setIsLeaving(true);
    //         navigate('/home');
    //     }, 3000);

    //     return () => clearTimeout(timeOut);
    // }, [navigate])

    return (
        <div className={styles.TransitionToHomeContainer}>
            <div className={`${styles.TransitionToHomeImage} ${styles.slideInRight} ${isLeaving ? styles.slideOutLeft : ''}`}></div>
        </div>
    )
}

export default TransitionToHome;
