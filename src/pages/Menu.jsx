import React, { useEffect, useState } from "react";
import Level4 from "./star/Level4";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSelectedRecitation,
    selectSize,
    selectSpeed,
    setSelectedRecitation,
    setSpeed,
} from "../feature/voice-controls/controlsSlice";
import { setSelectedVoice } from "../feature/util";

const Menu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const selectedRecitation = useSelector(selectSelectedRecitation);
    const speed = useSelector(selectSpeed);
    const size = useSelector(selectSize);
    useEffect(() => {
        window.scroll(0, 300);
    }, []);
    const handlePrivacyClick = () => {
        navigate("/policy");
    };
    const handleRecitationClick = (selection) => {
        dispatch(setSelectedRecitation(selection));
        if (selection === "US English (Male)")
            dispatch(
                setSelectedVoice({
                    languageCode: "en-US",
                    name: "en-US-Casual-K",
                    ssmlGender: "MALE",
                })
            );
        else if (selection === "US English (Female)")
            dispatch(
                setSelectedVoice({
                    languageCode: "en-US",
                    name: "en-US-Journey-F",
                    ssmlGender: "FEMALE",
                })
            );
        else if (selection === "IND English (Male)") {
            dispatch(
                setSelectedVoice({
                    languageCode: "en-IN",
                    name: "en-IN-Neural2-B",
                    ssmlGender: "MALE",
                })
            );
        } else if (selection === "IND English (Female)") {
            dispatch(
                setSelectedVoice({
                    languageCode: "en-IN",
                    name: "en-IN-Neural2-A",
                    ssmlGender: "FEMALE",
                })
            );
        } else if (selection === "UK English (Male)") {
            dispatch(
                setSelectedVoice({
                    languageCode: "en-GB",
                    name: "en-GB-Neural2-B",
                    ssmlGender: "MALE",
                })
            );
        } else if (selection === "UK English (Female)") {
            dispatch(
                setSelectedVoice({
                    languageCode: "en-GB",
                    name: "en-GB-Neural2-A",
                    ssmlGender: "FEMALE",
                })
            );
        }
    };
    const handleSpeedClick = (selection) => {
        dispatch(setSpeed(selection));
    };
    return (
        <section className="mid-section menu-page-section">
            <div
                className="my-account-content"
                style={{ visibility: isAuthenticated ? "visible" : "hidden" }}
            >
                <h5>My Account</h5>
                <ul className="list-group list-group-horizontal profile-account">
                    <li className="list-group-item">Profile</li>
                    <li className="list-group-item">Active</li>
                </ul>
                <ul className="list-group list-group-horizontal billing-account">
                    <li className="list-group-item">Billing</li>
                    <li className="list-group-item">Upgrade</li>
                </ul>
                <ul className="list-group list-group-horizontal password-account">
                    <li className="list-group-item">Password</li>
                    <li className="list-group-item">Change</li>
                </ul>
            </div>
            {/*my-account-content*/}
            <div className="setting-account-content">
                <h5>Settings</h5>
                <ul className="list-group list-group-horizontal recitation-account">
                    <li className="list-group-item">Recitation</li>
                    <li className="list-group-item">
                        <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            style={{ color: "#c7c7c7", padding: "0px" }}
                        >
                            {selectedRecitation}
                        </button>
                        <ul
                            className="dropdown-menu"
                            style={{ cursor: "pointer" }}
                        >
                            <li
                                style={{ padding: "6px" }}
                                onClick={() =>
                                    handleRecitationClick("US English (Male)")
                                }
                            >
                                US English (Male)
                            </li>
                            <li
                                style={{ padding: "6px" }}
                                onClick={() =>
                                    handleRecitationClick("US English (Female)")
                                }
                            >
                                US English (Female)
                            </li>
                            <li
                                style={{ padding: "6px" }}
                                onClick={() =>
                                    handleRecitationClick("UK English (Male)")
                                }
                            >
                                UK English (Male)
                            </li>
                            <li
                                style={{ padding: "6px" }}
                                onClick={() =>
                                    handleRecitationClick("UK English (Female)")
                                }
                            >
                                UK English (Female)
                            </li>
                            <li
                                style={{ padding: "6px" }}
                                onClick={() =>
                                    handleRecitationClick("IND English (Male)")
                                }
                            >
                                IND English (Male)
                            </li>
                            <li
                                style={{ padding: "6px" }}
                                onClick={() =>
                                    handleRecitationClick(
                                        "IND English (Female)"
                                    )
                                }
                            >
                                IND English (Female)
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-group list-group-horizontal speed-account">
                    <li className="list-group-item">Speed</li>
                    <li className="list-group-item">
                        <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            style={{ color: "#c7c7c7", padding: "0px" }}
                        >
                            {speed}x
                        </button>
                        <ul
                            className="dropdown-menu"
                            style={{ cursor: "pointer" }}
                        >
                            <li
                                style={{ padding: "6px" }}
                                onClick={() => handleSpeedClick(0.5)}
                            >
                                0.5
                            </li>
                            <li
                                style={{ padding: "6px" }}
                                onClick={() => handleSpeedClick(1.0)}
                            >
                                1.0
                            </li>
                            <li
                                style={{ padding: "6px" }}
                                onClick={() => handleSpeedClick(1.5)}
                            >
                                1.5
                            </li>
                            <li
                                style={{ padding: "6px" }}
                                onClick={() => handleSpeedClick(2.0)}
                            >
                                2.0
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="list-group list-group-horizontal size-account">
                    <li className="list-group-item">Size</li>
                    <li className="list-group-item">{size}%</li>
                </ul>
                <ul className="list-group list-group-horizontal font-account">
                    <li className="list-group-item">Font</li>
                    <li className="list-group-item">Default</li>
                </ul>
                <ul className="list-group list-group-horizontal dark-account">
                    <li className="list-group-item">Dark Account</li>
                    <li className="list-group-item">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                            />
                        </div>
                    </li>
                </ul>
                <ul className="list-group list-group-horizontal speed-account">
                    <li className="list-group-item">
                        {isAuthenticated ? "Logout" : "Login"}
                    </li>
                    <li className="list-group-item">
                        <div
                            className="form-check form-switch"
                            style={{
                                display: "flex",
                                justifyContent: "end",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/login")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-box-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                                />
                            </svg>
                        </div>
                    </li>
                </ul>
            </div>
            {/*my-account-content*/}
            <ul className="list-group list-group-horizontal privacy-terms-help">
                <li className="list-group-item" onClick={handlePrivacyClick}>
                    <span style={{ color: "#8c8c8c", cursor: "pointer" }}>
                        {" "}
                        Privacy{" "}
                    </span>
                </li>
                <li
                    className="list-group-item"
                    onClick={() => navigate("/terms")}
                >
                    <span style={{ color: "#8c8c8c", cursor: "pointer" }}>
                        {" "}
                        Terms{" "}
                    </span>
                </li>
                <li
                    className="list-group-item"
                    onClick={() => navigate("/help")}
                >
                    <span style={{ color: "#8c8c8c", cursor: "pointer" }}>
                        Help
                    </span>
                </li>
            </ul>
        </section>
    );
};

export default Menu;
