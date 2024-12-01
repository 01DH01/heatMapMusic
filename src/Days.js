import React from 'react';
import './Days.css';

function Days({ daysInMonth, dayStats }) {
    const renderDays = () => {
        const days = [];
        for (let i = 1; i <= daysInMonth; i++) {
            // Get stats for the day, or use default stats if no data exists
            const stats = dayStats[i] || { plays: 0, mostPlayedSong: "No data" };
    
            // Push day box with relevant stats into the array
            days.push(
                <div className="day-box" key={i}>
                    {i}
                    <div className="day-info">
                        <span>Plays: {stats.plays}</span>
                        <span>Most Played Song: {stats.mostPlayedSong}</span>
                    </div>
                </div>
            );
        }
        return days;
    };

    return (
        <div className="days-container">
            {renderDays()}
        </div>
    );
}

export default Days;

  