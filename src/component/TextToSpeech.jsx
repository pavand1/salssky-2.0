import { useState, useEffect } from "react";
import Main from "./main";
import { text } from "./main/text";

const TextToSpeech = () => {
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState(null);
    const [voice, setVoice] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        setUtterance(u);

        synth.addEventListener("voiceschanged", () => {
            const voices = synth.getVoices();
            setVoice(voices[0]);
        });

        return () => {
            synth.cancel();
            synth.removeEventListener("voiceschanged", () => {
                setVoice(null);
            });
        };
    }, [text]);

    const handleFileLoad = (file, content) => {
        setFileName(file.name);
        setFile(file);
        // setText(content);
    };
    const handlePlay = () => {
        const synth = window.speechSynthesis;

        if (isPaused) {
            synth.resume();
        } else {
            utterance.voice = voice;
            utterance.pitch = pitch;
            utterance.rate = rate;
            utterance.volume = volume;
            synth.speak(utterance);
        }

        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;
        setIsPaused(true);
        synth.pause();
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;
        setIsPaused(false);
        synth.cancel();
    };

    const handleVoiceChange = (event) => {
        const voices = window.speechSynthesis.getVoices();
        setVoice(voices.find((v) => v.name === event.target.value));
    };

    const handlePitchChange = (event) => {
        const targetValue = parseFloat(event.target.value);
        setPitch(targetValue);
        const synth = window.speechSynthesis;
        utterance.pitch = targetValue;
        synth.speak(utterance);
    };

    const handleRateChange = (event) => {
        const targetValue = parseFloat(event.target.value);
        setRate(targetValue);
        const synth = window.speechSynthesis;
        utterance.rate = targetValue;
        synth.speak(utterance);
    };

    const handleVolumeChange = (event) => {
        const targetValue = parseFloat(event.target.value);
        setVolume(targetValue);
        const synth = window.speechSynthesis;
        utterance.volume = targetValue;
        synth.speak(utterance);
    };

    return (
        <section className="mid-section">
            {utterance && <Main playBook={() => handlePlay()} />}
            {/* <label>
                Voice:
                <select
                    value={voice?.name}
                    onChange={handleVoiceChange}
                    style={{ width: "100px", padding: "4px" }}
                >
                    {window.speechSynthesis
                        .getVoices()
                        .slice(1, 5)
                        .map((voice) => (
                            <option key={voice.name} value={voice.name}>
                                {voice.name.split(" ")[1]}
                            </option>
                        ))}
                </select>
            </label>

            <br />

            <label>
                Pitch: {pitch}
                <br />
                <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={pitch}
                    onChange={handlePitchChange}
                />
            </label>

            <br />

            <label>
                Speed: {rate}
                <br />
                <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={rate}
                    onChange={handleRateChange}
                />
            </label>
            <br />
            <label>
                Volume: {volume}
                <br />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </label>

            <br />

            <div
                style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                }}
            >
                <button onClick={handlePlay}>
                    {isPaused ? "Resume" : "Play"}
                </button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleStop}>Stop</button>
            </div> */}
        </section>
    );
};

export default TextToSpeech;
