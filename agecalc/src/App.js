import { useState } from 'react';
import './App.css';

function App() {

    let [date, setdate] = useState("");
    let [date1, setdate1] = useState("");
    let [mill, setmill] = useState("");
    let [sec, setsec] = useState("");
    let [min, setmin] = useState("");
    let [hour, sethour] = useState("");
    let [day, setday] = useState("");
    let [week, setweek] = useState("");
    let [mon, setmon] = useState("");
    let [year, setyear] = useState("");

    const calcudata = () => {
        mill = Date.parse(date1) - Date.parse(date);
        sec = mill / 1000;
        min = sec / 60;
        hour = min / 60;
        day = hour / 24;
        week = parseInt(day / 7);
        mon = parseInt(day / 30);
        year = parseInt(day / 365);

        setmill(mill);
        setsec(sec);
        setmin(min);
        sethour(hour);
        setday(day);
        setweek(week);
        setmon(mon);
        setyear(year);
    }

    return (
        <>
            <div className="ag-calc">
                <div className="age">
                    <div>
                        USER DATE:- <br></br>
                        <input type="date" onChange={(e) => setdate(e.target.value)} /><br></br>
                        TODAY DATE:-<br></br>
                        <input type="date" onChange={(e) => setdate1(e.target.value)} />
                    </div>
                </div>
                <div className="calcu">
                    <input type="button" value="Click Here" onClick={calcudata} />
                </div>
                <div className="disp flex">
                    <p>Millsecond:- {mill}</p>
                    <p>Second:- {sec}</p>
                    <p>Minutes:-{min}</p>
                    <p>Hours:- {hour}</p>
                    <p>Day:- {day}</p>
                    <p>Week:- {week}</p>
                    <p>Months:- {mon}</p>
                    <p>Years:- {year}</p>
                </div>
            </div>

        </>
    )
}

export default App;