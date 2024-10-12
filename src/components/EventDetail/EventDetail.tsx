import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {events} from "../../Data/data";
import styles from '../EventList/EventList.module.css'

const EventDetail: React.FC<{ setNotification: (message: string) => void }> = ({setNotification}) => {
    const {id} = useParams();
    const event = events.find(event => event.id === parseInt(id!));
    const [selectedOdds, setSelectedOdds] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleBet = () => {
        if (event) {
            setNotification(`Спасибо, ваша ставка ${event.team1} vs ${event.team2}, ставка ${event.odds && event.odds[selectedOdds!]} принята`);
            navigate('/');
            setTimeout(() => {
                setNotification('')
            }, 3000)
        }
    };
    if (!event) return <p>Событие не найдено</p>;

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{event.team1} vs {event.team2}</div>
            <div className={styles.logoBlock}>
                <img src={event.logo1} alt={event.team1}/>
                <img src={event.logo2} alt={event.team2}/>
            </div>
            <p>Дата: {event.date}</p>
            <div className={styles.labelBlock}>
                {event.odds && event.odds.map((odd, index) => (
                    <label className={styles.label} key={index}>
                        <input className={styles.input}
                            type="radio"
                            name="odds"
                            value={index}
                            onChange={() => setSelectedOdds(index)}
                        />
                        {index === 0 ? 'На победу хозяев' : index === 1 ? 'На ничью' : 'На победу гостей'} (Коэффициент: {odd})
                    </label>
                ))}
            </div>
            <button onClick={handleBet} disabled={selectedOdds === null}>Сделать ставку</button>
        </div>
    );
};

export default EventDetail;
