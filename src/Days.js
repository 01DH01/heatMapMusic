import React from 'react';
import './Days.css';

function Days({ daysInMonth, dayStats, month }) {
    const renderDays = () => {
        const days = [];
        for (let i = 1; i <= daysInMonth; i++) {
            // Retrieve stats for the current day
            const stats = dayStats[month]?.[i] || { 
                date: "No data", 
                plays: 0, 
                mostPlayedSong: "No data" 
            };
            const colorClass = getColor(stats.plays);

            // Add day box with all the information
            days.push(
                <div className="day-box" key={i} style={getColor(stats.plays)}>
                    <div className="day-number">{i}</div>
                    <div className="day-info">
                        <p>Date: {stats.date}</p>
                        <p>Plays: {stats.plays}</p>
                        <p>Most Played Song: {stats.mostPlayedSong}</p>
                    </div>
                </div>
            );
        }
        return days;
    };
    const getColor = (plays) => {
        if (plays > 50) return { backgroundColor: "#001a00" };  
        if (plays >= 30 && plays <=49) return { backgroundColor: "#004d00" }; 
        if (plays >= 1 && plays <= 29) return { backgroundColor: "#80ff80" };  
        if (plays === 0) return { backgroundColor: "#808080" }; 
        return { backgroundColor: "#013220" }; 
    };
    
    return <div className="days-container">{renderDays()}</div>;
}


export default Days;

  