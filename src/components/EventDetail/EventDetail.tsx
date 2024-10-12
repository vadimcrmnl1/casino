import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {events} from "../../Data/data";


const EventDetail: React.FC<{ setNotification: (message: string) => void }> = ({setNotification}) => {
    const {id} = useParams();
    const event = events.find(event => event.id === parseInt(id!));
    const [selectedOdds, setSelectedOdds] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleBet = () => {
        if (event) {
            setNotification(`Спасибо, ваша ставка ${event.team1} vs ${event.team2}, ставка ${event.odds && event.odds[selectedOdds!]} принята`);
            navigate('/');
        }
    };
    if (!event) return <p>Событие не найдено</p>;

    return (
        <div>
            <h1>{event.team1} vs {event.team2}</h1>
            <p>Дата: {event.date}</p>
            <div>
                {event.odds && event.odds.map((odd, index) => (
                    <label key={index}>
                        <input
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
