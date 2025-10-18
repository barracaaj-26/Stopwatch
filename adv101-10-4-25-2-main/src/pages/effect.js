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
        <body style={{ backgroundColor: "#84a98c"}}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                padding: "20px",
            }}>
                <div style={{
                    backgroundColor: "#e7ecef",
                    color: "black",
                    borderRadius: "12px",
                    padding: "24px 32px",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                    maxWidth: "420px",
                    width: "100%",
                    textAlign: "center",
                    fontFamily: "Times New Roman, serif",
                }}>
                    <h1 style={{ margin: 0, fontSize: "28px" }}>⏱ STOPWATCH</h1>
                    <h2 style={{ margin: "12px 0 20px", fontSize: "28px" }}>{display}</h2>
                    <div>
                        <button
                            onClick={handleStart} disabled={running}
                            style ={{ marginRight: "10px", fontSize: "12px", backgroundColor: "Green", color: "white", borderRadius: "5px"}}
                            className="mt-2 border-1 p-2">
                                START
                        </button>

                        <button
                            onClick={handleStop} disabled={!running}
                            style ={{ marginRight: "10px", fontSize: "12px", backgroundColor: "red", color: "white", borderRadius: "5px"}}
                            className="mt-2 border-1 p-2">
                                STOP
                        </button>

                        <button onClick={handleReset}
                            style={{ fontSize: "12px", backgroundColor: "gray", color: "white", borderRadius: "5px"}}
                            className="mt-2 border-1 p-2">RESET</button>
                    </div>
                </div>
            </div>
        </body>
    )
}