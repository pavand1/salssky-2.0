const Cookie = ({ setShowCookie }) => {
    const handleAgree = () => {
        setShowCookie(false);
    };
    return (
        <section
            className="coockie-policy"
            style={{ position: "absolute", top: "30%", zIndex: "10" }}
        >
            <div className="close-coockie text-end">
                <a
                    href="#"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                    }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}
                        onClick={() => setShowCookie(false)}
                    >
                        <path
                            d="M11.9994 12L7 16.9999M11.9994 12L17 17.0005M11.9994 12L7 7.00071M11.9994 12L17 6.99951"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                        />
                    </svg>
                </a>
            </div>
            <div className="coockie-content">
                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                        />{" "}
                        Coockies are used solely to enhance your experience.
                    </label>
                    <label className="form-check-label">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                        />{" "}
                        By clicking [I Agree], you consent to our{" "}
                        <a href="#"> Terms of Service</a>,{" "}
                        <a href="#"> Privacy Policy</a>, and{" "}
                        <a href="#"> Coockies Policy</a>.
                    </label>
                </div>
                {/*form-check*/}
            </div>
            {/*coockie-content*/}
            <div className="coockie-btn text-end">
                <button className="btn" onClick={handleAgree}>
                    I Agree
                </button>
            </div>
        </section>
    );
};

export default Cookie;
