import React from 'react';
import styles from './../EventList/EventList.module.css'

const Notification: React.FC<{ message: string }> = ({message}) => {
    return (
        message ? <div className={styles.notification}>{message}</div> : null
    );
};

export default Notification;
