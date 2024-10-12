import React from 'react';
import {Link} from 'react-router-dom';
import {events} from "../../Data/data";
import styles from './EventList.module.css'

const EventList: React.FC<{ setNotification: (message: string) => void }> = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Матчи</div>
            <ul className={styles.container}>
                {events.map(event => (
                    <li key={event.id}>
                        <Link className={styles.link} to={`/event/${event.id}`}>
                            <div className={styles.team}>
                                <img className={styles.logo}
                                     src={event.logo1}
                                     alt={event.team1}/> {event.team1}
                            </div>
                            vs
                            <div className={styles.team}>
                                <img
                                    className={styles.logo} src={event.logo2}
                                    alt={event.team2}/>{event.team2} - {event.date}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
