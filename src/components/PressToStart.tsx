import { useState } from 'react';
import styles from './PressToStart.module.css'; 
import { useNavigate } from 'react-router-dom';

const PressToStart: React.FC = () => {
    const [isLeaving, setIsLeaving] = useState(false);

    const navigate = useNavigate()

    const handleClick = () => {
        setIsLeaving(true);
        const timeOut = setTimeout(() => {
            navigate('/transitionToHome');
        }, 2000);

        return () => clearTimeout(timeOut);
    }

    return (
        <div className={`${styles.backgroundImageContainer} ${isLeaving ? styles.flash : ''}`}>
            <div className={styles.startTextContainer}>
                <h1>WELCOME!</h1>
                <a className={styles.clickToStart} onClick={handleClick}>Click here to start</a>
            </div>
        </div>
    )
}

export default PressToStart;
