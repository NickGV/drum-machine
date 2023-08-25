import { useState } from "react";
import "./App.css";

function App() {
    const sounds = {
        q: "Heater-1",
        w: "Heater-2",
        e: "Heater-3",
        a: "Heater-4_1",
        s: "Heater-6",
        d: "Dsc_Oh",
        z: "Kick_n_Hat",
        x: "RP4_KICK_1",
        c: "Cev_H2",
    };
    const [soundsMap] = useState(sounds);
    const [soundDisplay, setSoundDisplay] = useState("");

    const playSound = (sound) => {
        setSoundDisplay(sound);
        const audio = new Audio(
            `https://s3.amazonaws.com/freecodecamp/drums/${sound}.mp3`
        );
        console.log(audio);
        audio.play();
    };
    return (
        <>
            <div className="container">
                <h1 className="title">Drum Machine</h1>
                <div className="machine">
                    <button onClick={() => playSound(soundsMap.q)}>Q</button>
                    <button onClick={() => playSound(soundsMap.w)}>W</button>
                    <button onClick={() => playSound(soundsMap.e)}>E</button>
                    <button onClick={() => playSound(soundsMap.a)}>A</button>
                    <button onClick={() => playSound(soundsMap.s)}>S</button>
                    <button onClick={() => playSound(soundsMap.d)}>D</button>
                    <button onClick={() => playSound(soundsMap.z)}>Z</button>
                    <button onClick={() => playSound(soundsMap.x)}>X</button>
                    <button onClick={() => playSound(soundsMap.c)}>C</button>
                </div>
                <p className="sound-display">{soundDisplay}</p>
            </div>
            <footer className="attribution">
                <a
                    href="https://github.com/NickGV"
                    target="_blank"
                    rel="noreferrer"
                >
                    by NickGV
                </a>
                <br />
                <a
                    href="https://github.com/NickGV/markdown-previewer"
                    target="_blank"
                    rel="noreferrer"
                >
                    repository
                </a>
            </footer>
        </>
    );
}

export default App;
