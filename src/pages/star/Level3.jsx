import React, { useState } from "react";
import { makePayment } from "../../feature/stripe";

const Level3 = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const handleRentNowClick = () => {
        if (email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
            setError("");
            makePayment(email);
        } else {
            setError("Please enter a valid email");
            return;
        }
    };
    return (
        <>
            <section className="mid-section">
                <h1 className="main-heading yellow-text-heading">
                    Level III - Talk to Star*
                </h1>
                <h4>
                    The Challenge Within-Unlock Your Star* Piece to Advance and
                    Illuminate Your Path!{" "}
                </h4>
                <div className="level-content">
                    <p>
                        Play the game by matching principles and tackling
                        true/false questions to gain access to exclusive "Talk
                        to Star*" sessions. Dive in, break through barriers, and
                        achieve new levels of enlightment and self-transcedence.
                    </p>
                </div>
                {/*level-content*/}
                <div className="level-content">
                    <h5 className="white-text-heading"> Benefits! </h5>
                    <ul className="blue-checkmark yellow-check">
                        <li>
                            <strong>Interactive Game:</strong>Match principles
                            and answer questions to advance.{" "}
                        </li>
                        <li>
                            <strong>Inspiring Talks:</strong>Choose topics that
                            resonate with your journey.
                        </li>
                        <li>
                            <strong>Easy Access:</strong>Secure your spot as a
                            participant or audience member.
                        </li>
                        <li>
                            <strong>Deep Insights:</strong>Gain wisdom on fear,
                            ego, desire, and power.
                        </li>
                    </ul>
                </div>
                {/*level-content*/}
                <h4 className="yellow-text-heading">
                    Become a Star*-Awaken Your Self-Transcedence and Radiance
                    Before Time Runs Out!
                </h4>
                <p>
                    Unlock the next level of your journey and experience
                    profound transformation!
                </p>
                <div className="tip-content">
                    <p>*Self-Transcedence Awakened Radiance</p>
                </div>
                {/*tip-content*/}
            </section>
            <section className="newsletter-sec">
                <form>
                    <div className="input-group">
                        <input
                            type="text"
                            className=""
                            placeholder="Enter your registered email"
                            aria-describedby="basic-addon2"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                            title="Please enter a valid email address"
                        />
                        <span
                            className="input-group-text cursor-p"
                            onClick={handleRentNowClick}
                        >
                            Rent Now Start Trial
                        </span>
                    </div>
                    {error && (
                        <div style={{ color: "red" }}>
                            {"Please enter a valid email address"}
                        </div>
                    )}
                </form>
                <div className="error-content">
                    <p>
                        Error: You're in the 40-day engagement period for Level
                        III. Stay active to address key challenges and progress
                        to the next levels of Desire and Power.
                    </p>
                </div>
                {/*error-content*/}
            </section>
        </>
    );
};

export default Level3;
