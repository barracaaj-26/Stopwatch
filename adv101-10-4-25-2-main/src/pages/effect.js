import { useEffect, useState } from "react"

export default function Effect() {
    const [time, setTime] = useState(0); 
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;
        const interval = setInterval(() => {
            setTime(prev => prev + 10);
        }, 10);

        return () => clearInterval(interval);
    }, [running]);

    function handleStart() {
        setRunning(true);
    }

    function handleStop() {
        setRunning(false);
    }

    function handleReset() {
        setTime(0);
        setRunning(false);
    }

    const totalMs = time;
    const hours = Math.floor(totalMs / 3600000);
    const minutes = Math.floor((totalMs % 3600000) / 60000);
    const seconds = Math.floor((totalMs % 60000) / 1000);
    const cs = Math.floor((totalMs % 1000) / 10);

    const display = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(cs).padStart(2, "0")}`;

    return (
        <body style={{backgroundColor: "skyblue", color: "black"}}>
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Times new roman", fontSize: "26px"}}>
            <h1>⏱ STOPWATCH</h1>
            <h2>{display}</h2>
            <div>
            <button
                onClick={handleStart} disabled={running} style ={{ marginRight: "10px", fontSize: "12px", backgroundColor: "Green", color: "white"}}
                className="mt-2 border-1 p-2">
                    START
            </button>

            <button
                onClick={handleStop} disabled={!running} style ={{ marginRight: "10px", fontSize: "12px", backgroundColor: "red", color: "white"}}
                className="mt-2 border-1 p-2">
                    STOP
            </button>
            <button onClick={handleReset} style={{ fontSize: "12px", backgroundColor: "gray", color: "white"}}
                className="mt-2 border-1 p-2">RESET</button>
            </div>
        </div>
        </body>
    )
}