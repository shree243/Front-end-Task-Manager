import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div>
            <h1>Stylish Calendar</h1>
            <div className="calendar-container">
                <Calendar
                    onChange={onChange}
                    value={date}
                />
            </div>
        </div>
    );
};

export default MyCalendar;
