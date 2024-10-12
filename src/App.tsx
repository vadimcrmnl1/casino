import React, {useState} from 'react';
import './App.module.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import EventList from "./components/EventList/EventList";
import EventDetail from "./components/EventDetail/EventDetail";
import Notification from "./components/Notification/Notification";
import styles from "./App.module.css";

function App() {
    const [notification, setNotification] = useState<string>('');
    return (
        <HashRouter>
            <div className={styles.wrapper}>
                <Notification message={notification}/>

                <Routes>
                    <Route path="/" element={<EventList setNotification={setNotification}/>}/>
                    <Route path="/event/:id" element={<EventDetail setNotification={setNotification}/>}/>
                </Routes>
            </div>
        </HashRouter>

    );
}

export default App;
