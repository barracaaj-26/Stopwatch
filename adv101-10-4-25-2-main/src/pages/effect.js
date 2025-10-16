import { useEffect, useState } from "react"

export default function Effect() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if(running) {
            let interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);

            return () => {
                clearInterval(interval);
            }
        }
    }, [running, time]);

    function handleStartStop() {
        setRunning(!running);

    } [setRunning, setTime];

    function handleReset() {
        setTime(0);
        setRunning(false);
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Times new roman", fontSize: "26px"}}>
            <h1>⏱ STOPWATCH</h1>
            <h2>{time}</h2>
            <div>
            <button 
                onClick={handleStartStop} style ={{ marginRight: "10px", fontSize: "12px" }}
                className="mt-2 border-1 p-2">
                    {running ? 'STOP' :  'START'}
            </button>
            <button onClick={handleReset} style={{ fontSize: "12px"}}
                className="mt-2 border-1 p-2">RESET</button>
            </div>
        </div>
    )
}