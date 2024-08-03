import React, { useState } from "react";
import { makePayment } from "../../feature/stripe";

const Level2 = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [selectedBox, setSelectedBox] = useState({
        type: "combo",
        price: 60.0,
        index: 0,
    });
    const handleRentNowClick = () => {
        if (email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
            setError("");
            makePayment(email, selectedBox.type);
        } else {
            setError("Please enter a valid email");
            return;
        }
    };
    return (
        <>
            <section className="mid-section">
                <h1 className="main-heading red-text-heading">
                    Level II - The Community
                </h1>
                <h4>
                    Subscribe Now: Unlock, Transform, and Ascend Your Star*
                    Potential!{" "}
                </h4>
                <div className="level-content">
                    <p>
                        Join our dynamic forum, dive into deep discussions, and
                        expand your insights. Your path to becoming a Star*
                        begins here-fully commit to all levels to unlock your
                        true potential.
                    </p>
                </div>
                {/*level-content*/}
                <div className="level-content">
                    <h5 className="white-text-heading">
                        {" "}
                        Why Join the Community?{" "}
                    </h5>
                    <ul className="blue-checkmark red-check">
                        <li>
                            <strong>Focused Discussions:</strong>Boost your
                            growth with targeted conversations.{" "}
                        </li>
                        <li>
                            <strong>Maximized Insights:</strong>Gain from
                            impactful and meaningful exchanges.
                        </li>
                        <li>
                            <strong>Privacy Assured:</strong>Secure interactions
                            with anonymous protection.
                        </li>
                        <li>
                            <strong>Intellectual Trust:</strong>Connect and gain
                            transformative perspectives.{" "}
                        </li>
                    </ul>
                </div>
                {/*level-content*/}
                <div className="level-content">
                    <div className="offer-boxes">
                        <div className="row">
                            <div className="col-sm-4 col-12 mob-full-width cursor-p">
                                <div
                                    className="year-box"
                                    onClick={() =>
                                        setSelectedBox({
                                            type: "combo",
                                            price: 60.0,
                                            index: 0,
                                        })
                                    }
                                >
                                    <h4>Save 30% Yearly</h4>
                                    <h3>$60.00</h3>
                                    <h5>Just $0.16 per day</h5>
                                    <h6>
                                        Level I &amp; Level II{" "}
                                        <a
                                            href=""
                                            data-bs-toggle="modal"
                                            data-bs-target="#myModal"
                                        >
                                            {" "}
                                            <span className="yearly-combo-popup">
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 13 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M6.5 1.13043C3.53447 1.13043 1.13043 3.53447 1.13043 6.5C1.13043 9.46553 3.53447 11.8696 6.5 11.8696C9.46553 11.8696 11.8696 9.46553 11.8696 6.5C11.8696 3.53447 9.46553 1.13043 6.5 1.13043ZM0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5Z"
                                                        fill="#8C8C8C"
                                                    />
                                                    <path
                                                        d="M6.39713 4.77835C6.78733 4.77835 7.10365 4.46203 7.10365 4.07183C7.10365 3.68162 6.78733 3.3653 6.39713 3.3653C6.00693 3.3653 5.69061 3.68162 5.69061 4.07183C5.69061 4.46203 6.00693 4.77835 6.39713 4.77835Z"
                                                        fill="#8C8C8C"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.12539 9.19722C5.12539 8.88506 5.37845 8.632 5.69061 8.632H7.30883C7.62099 8.632 7.87404 8.88506 7.87404 9.19722C7.87404 9.50938 7.62099 9.76243 7.30883 9.76243H5.69061C5.37845 9.76243 5.12539 9.50938 5.12539 9.19722Z"
                                                        fill="#8C8C8C"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.12539 5.96022C5.12539 5.64806 5.37845 5.395 5.69061 5.395H6.49943C6.8116 5.395 7.06465 5.64806 7.06465 5.96022V9.19722C7.06465 9.50938 6.8116 9.76243 6.49943 9.76243C6.18727 9.76243 5.93422 9.50938 5.93422 9.19722V6.52543H5.69061C5.37845 6.52543 5.12539 6.27238 5.12539 5.96022Z"
                                                        fill="#8C8C8C"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                        {/* The Modal */}
                                        <div
                                            className="modal free-trial-modal fade"
                                            id="myModal"
                                        >
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    {/* Modal Header */}
                                                    <div className="modal-header">
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            {" "}
                                                            <svg
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M11.9994 12L7 16.9999M11.9994 12L17 17.0005M11.9994 12L7 7.00071M11.9994 12L17 6.99951"
                                                                    stroke="white"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    strokeLinecap="square"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    {/*modal-header*/}
                                                    {/* Modal body */}
                                                    <div className="modal-body">
                                                        <h3>
                                                            How your free <br />{" "}
                                                            trial works
                                                        </h3>
                                                        <div className="popup-content">
                                                            <h4>Today</h4>
                                                            <p>
                                                                {" "}
                                                                Start your
                                                                journey with
                                                                instant access
                                                                and see how it
                                                                can be transform
                                                                your life.{" "}
                                                            </p>
                                                        </div>
                                                        {/*popup-content*/}
                                                        <div className="popup-content">
                                                            <h4>In 5 days</h4>
                                                            <p>
                                                                {" "}
                                                                You will receive
                                                                an email from
                                                                our gateway as
                                                                your trial ends.{" "}
                                                            </p>
                                                        </div>
                                                        {/*popup-content*/}
                                                        <div className="popup-content">
                                                            <h4>In 7 days</h4>
                                                            <p>
                                                                {" "}
                                                                You'll be
                                                                charged on
                                                                [Month] [Date].
                                                                Cancel anytime
                                                                before.
                                                            </p>
                                                        </div>
                                                        {/*popup-content*/}
                                                        <div className="unlimited-para">
                                                            <p>
                                                                Unlimited free
                                                                access for 7
                                                                days then $0.11
                                                                per day, billed
                                                                annually.{" "}
                                                            </p>
                                                        </div>
                                                        <button className="btn-link">
                                                            View all plans
                                                        </button>
                                                        <div className="cancel-plan-sec">
                                                            <h6>
                                                                How can I
                                                                cancel?
                                                            </h6>
                                                            <p>
                                                                Visit
                                                                salssky.com, go
                                                                to Settings,
                                                                then select
                                                                'Billing' and
                                                                'Cancel Trial'.
                                                            </p>
                                                        </div>
                                                        {/*cancel-plan-sec*/}
                                                        <div className="start-free-trial-btn">
                                                            <a href="#">
                                                                <p>
                                                                    <strong>
                                                                        Start my
                                                                        free
                                                                        trial
                                                                    </strong>
                                                                    2 taps to
                                                                    start, super
                                                                    easy to
                                                                    cancel
                                                                </p>
                                                            </a>
                                                        </div>
                                                        {/*start-free-trial-btn*/}
                                                    </div>
                                                    {/*modal-body*/}
                                                </div>
                                                {/*modal-content*/}
                                            </div>
                                            {/*modal-dialog*/}
                                        </div>
                                        {/*modal fade*/}
                                    </h6>
                                    {selectedBox.index === 0 ? (
                                        <div className="badge">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M6.88889 12L6.08888 12.6C6.28361 12.8597 6.59222 13.0087 6.91663 12.9997C7.24104 12.9907 7.54091 12.8248 7.72094 12.5547L6.88889 12ZM4.8 7.54819C4.46863 7.10636 3.84183 7.01682 3.4 7.34819C2.95817 7.67956 2.86863 8.30636 3.2 8.74819L4.8 7.54819ZM13.4987 3.88807C13.8051 3.42855 13.6809 2.80768 13.2214 2.50132C12.7618 2.19497 12.141 2.31915 11.8346 2.77867L13.4987 3.88807ZM7.68889 11.4L4.8 7.54819L3.2 8.74819L6.08888 12.6L7.68889 11.4ZM11.8346 2.77867L6.05683 11.4453L7.72094 12.5547L13.4987 3.88807L11.8346 2.77867Z" />
                                            </svg>
                                        </div>
                                    ) : null}
                                    <div className="combo-offer-img">
                                        <svg
                                            width={72}
                                            height={39}
                                            viewBox="0 0 72 39"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.0733 19.953H70.0632L65.4368 29.4737L70.0632 39H10.0733L15.0701 29.4737L10.0733 19.953Z"
                                                fill="#32CD32"
                                            />
                                            <path
                                                d="M0 6.44967L69.6245 0L64.2688 9.19021L71.2198 17.2352L1.59532 23.6735L6.95106 14.5004L0 6.44967Z"
                                                fill="#FFD700"
                                            />
                                        </svg>
                                    </div>
                                    <div className="combo-text">
                                        <p>Combo</p>
                                    </div>
                                    {/*combo-text*/}
                                    <div className="offer-text">
                                        <p>Offer</p>
                                    </div>
                                    {/*offer-text*/}
                                </div>
                                {/*year-box*/}
                            </div>
                            {/*col-sm-12*/}
                            <div className="col-sm-4 col-6 cursor-p">
                                <div
                                    className="monthly-box red-box"
                                    onClick={() =>
                                        setSelectedBox({
                                            type: "monthly",
                                            price: 4.0,
                                            index: 1,
                                        })
                                    }
                                >
                                    <h4 className="text-text-heading">
                                        Monthly
                                    </h4>
                                    <h3>$4.00</h3>
                                    <h5>Just $0.13 per day</h5>
                                    <h6>Break Through Fear</h6>
                                    {selectedBox.index === 1 ? (
                                        <div className="badge">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M6.88889 12L6.08888 12.6C6.28361 12.8597 6.59222 13.0087 6.91663 12.9997C7.24104 12.9907 7.54091 12.8248 7.72094 12.5547L6.88889 12ZM4.8 7.54819C4.46863 7.10636 3.84183 7.01682 3.4 7.34819C2.95817 7.67956 2.86863 8.30636 3.2 8.74819L4.8 7.54819ZM13.4987 3.88807C13.8051 3.42855 13.6809 2.80768 13.2214 2.50132C12.7618 2.19497 12.141 2.31915 11.8346 2.77867L13.4987 3.88807ZM7.68889 11.4L4.8 7.54819L3.2 8.74819L6.08888 12.6L7.68889 11.4ZM11.8346 2.77867L6.05683 11.4453L7.72094 12.5547L13.4987 3.88807L11.8346 2.77867Z" />
                                            </svg>
                                        </div>
                                    ) : null}
                                </div>
                                {/*monthly-box blue-box*/}
                            </div>
                            {/*col-4*/}
                            <div className="col-sm-4 col-6 cursor-p">
                                <div
                                    className="weekly-box yellow-box"
                                    onClick={() =>
                                        setSelectedBox({
                                            type: "yearly",
                                            price: 38.4,
                                            index: 2,
                                        })
                                    }
                                >
                                    <h4>Save 30% Yearly</h4>
                                    <h3>$38.40</h3>
                                    <h5>Just $0.11 per day</h5>
                                    <h6>Free 1 Week Trial</h6>
                                    {selectedBox.index === 2 ? (
                                        <div className="badge">
                                            <svg
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M6.88889 12L6.08888 12.6C6.28361 12.8597 6.59222 13.0087 6.91663 12.9997C7.24104 12.9907 7.54091 12.8248 7.72094 12.5547L6.88889 12ZM4.8 7.54819C4.46863 7.10636 3.84183 7.01682 3.4 7.34819C2.95817 7.67956 2.86863 8.30636 3.2 8.74819L4.8 7.54819ZM13.4987 3.88807C13.8051 3.42855 13.6809 2.80768 13.2214 2.50132C12.7618 2.19497 12.141 2.31915 11.8346 2.77867L13.4987 3.88807ZM7.68889 11.4L4.8 7.54819L3.2 8.74819L6.08888 12.6L7.68889 11.4ZM11.8346 2.77867L6.05683 11.4453L7.72094 12.5547L13.4987 3.88807L11.8346 2.77867Z" />
                                            </svg>
                                        </div>
                                    ) : null}
                                </div>
                                {/*monthly-box blue-box*/}
                            </div>
                            {/*col-4*/}
                        </div>
                    </div>
                    {/*offer-boxes*/}
                </div>
                {/*level-content*/}
            </section>
            <section className="newsletter-sec">
                <form>
                    <div className="input-group">
                        <input
                            type="text"
                            className=""
                            placeholder="Enter your registered email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span
                            className="input-group-text cursor-p"
                            onClick={handleRentNowClick}
                        >
                            Join Now
                        </span>
                    </div>
                    {error && (
                        <div style={{ color: "red" }}>
                            {"Please enter a valid email address"}
                        </div>
                    )}
                </form>
            </section>
        </>
    );
};

export default Level2;
