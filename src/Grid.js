import React, { useEffect, useState } from 'react';
import Days from './Days';
import './Grid.css';

function Grid() {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the JSON data from the public folder
        fetch('/music_plays_2024.json')
          .then((response) => response.json())  
          .then((data) => {
            setStats(data);       
            setLoading(false);    
          })
          .catch((error) => {
            console.error('Error fetching data:', error); 
            setLoading(false);    
          });
    }, []); 
    
    // Map the statistics data into an object where the key is the day of the month
    const dayStats = stats.reduce((acc, curr) => {
        const day = new Date(curr.date).getDate();  //
        acc[day] = curr;  
        return acc;
    }, {});

    return (
        <div className="container">
            <div className="box">
                <h1>January</h1>
                <Days daysInMonth={31} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>February</h1>
                <Days daysInMonth={28} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>March</h1>
                <Days daysInMonth={31} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>April</h1>
                <Days daysInMonth={30} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>May</h1>
                <Days daysInMonth={31} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>June</h1>
                <Days daysInMonth={30} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>July</h1>
                <Days daysInMonth={31} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>August</h1>
                <Days daysInMonth={31} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>September</h1>
                <Days daysInMonth={30} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>October</h1>
                <Days daysInMonth={31} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>November</h1>
                <Days daysInMonth={30} dayStats={dayStats}/>
            </div>
            <div className="box">
                <h1>December</h1>
                <Days daysInMonth={31} dayStats={dayStats}/>
            </div>
        </div>
    );
}

export default Grid;

