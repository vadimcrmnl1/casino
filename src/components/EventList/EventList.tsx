import React from 'react';
import { Link } from 'react-router-dom';
import {events} from "../../../Data/data";

const EventList: React.FC<{setNotification: (message: string) => void}> = ({ setNotification }) => {
    return (
        <div>
            <h1>События</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <Link to={`/event/${event.id}`}>{event.team1} vs {event.team2} - {event.date}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
