import React from "react";

const BottomControls = () => {
    return (
        <div className="main-controls">
            <div
                style={{
                    display: "flex",
                    gap: "4px",
                    justifyContent: "flex-end",
                    paddingRight: "10px",
                    fontSize: "12px",
                    color: "#737373",
                }}
            >
                <div>
                    <div className="readmode">
                        Read mode
                        <img src="./images/mute.svg" alt="" />
                    </div>
                    <div className="playmode">
                        <div
                            style={{
                                height: "16px",
                                width: "16px",
                                borderRadius: "50%",
                                background: "#737373",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img src="./images/left.svg" alt="" />
                        </div>
                        Play mode
                        <div
                            style={{
                                height: "16px",
                                width: "16px",
                                borderRadius: "50%",
                                background: "#737373",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <img src="./images/right.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomControls;
