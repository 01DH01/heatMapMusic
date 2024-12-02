import React, { useEffect, useState } from 'react';
import Days from './Days';
import './Grid.css';

function Grid() {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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

    // Organize stats into a nested object by month and day
    const dayStats = stats.reduce((acc, curr) => {
        const date = new Date(curr.date);
        const month = date.getUTCMonth() +1; // Months are zero-based
        const day = date.getUTCDate();

        if (!acc[month]) {
            acc[month] = {};
        }
        acc[month][day] = curr; // Store current entry
        return acc;
    }, {});

    return (
        <div className="container">
            <div className="box">
                <h1>January</h1>
                <Days daysInMonth={31} dayStats={dayStats} month={1}/>
            </div>
            <div className="box">
                <h1>February</h1>
                <Days daysInMonth={28} dayStats={dayStats} month={2}/>
            </div>
            <div className="box">
                <h1>March</h1>
                <Days daysInMonth={31} dayStats={dayStats} month={3}/>
            </div>
            <div className="box">
                <h1>April</h1>
                <Days daysInMonth={30} dayStats={dayStats} month={4}/>
            </div>
            <div className="box">
                <h1>May</h1>
                <Days daysInMonth={31} dayStats={dayStats} month={5}/>
            </div>
            <div className="box">
                <h1>June</h1>
                <Days daysInMonth={30} dayStats={dayStats} month={6}/>
            </div>
            <div className="box">
                <h1>July</h1>
                <Days daysInMonth={31} dayStats={dayStats} month={7}/>
            </div>
            <div className="box">
                <h1>August</h1>
                <Days daysInMonth={31} dayStats={dayStats} month={8}/>
            </div>
            <div className="box">
                <h1>September</h1>
                <Days daysInMonth={30} dayStats={dayStats} month={9}/>
            </div>
            <div className="box">
                <h1>October</h1>
                <Days daysInMonth={31} dayStats={dayStats} month={10}/>
            </div>
            <div className="box">
                <h1>November</h1>
                <Days daysInMonth={30} dayStats={dayStats} month={11}/>
            </div>
            <div className="box">
                <h1>December</h1>
                <Days daysInMonth={31} dayStats={dayStats} month={12}/>
            </div>
        </div>
    );
}

export default Grid;

