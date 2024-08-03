import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";
import { login } from "./book/helper";
import { useDispatch } from "react-redux";
import { setLogin } from "../feature/auth/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLoginClick = async () => {
        if (EmailValidator.validate(email) && password) {
            setError("");
            try {
                const result = await login({ email, password });
                if (!result?.data) {
                    setError("Something went wrong. Please try again");
                    return;
                } else {
                    const { data, accessToken } = result;
                    localStorage.setItem("customer", JSON.stringify(data));
                    localStorage.setItem("userToken", accessToken || "");
                    dispatch(setLogin(data));
                    navigate("/");
                }
            } catch (error) {
                setError("Something went wrong. Please try again");
            }
        } else {
            setError("Please enter a valid email");
            return;
        }
    };
    return (
        <section className="mid-section login-sec">
            <div className="login-content">
                <div className="sign-in-tip text-center">
                    <h4>
                        ---- Sign in with your registered email and password
                        ----
                    </h4>
                </div>
                {/*sign-in-tip*/}
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            name="pswd"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="remember"
                            />{" "}
                            Remember Me
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        onClick={handleLoginClick}
                    >
                        Login
                    </button>
                    <h6 className="forget-passord text-end">
                        {" "}
                        <a href="#"> Forget Password</a>
                    </h6>
                    {error && <div style={{ color: "#d22f26" }}>{error}</div>}
                </form>
                <div className="new-sign-in text-center">
                    <h6>
                        Are you a Newbie?{" "}
                        <span
                            style={{
                                color: "#d22f26",
                                fontWeight: "bold",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/book")}
                        >
                            {" "}
                            Get Started{" "}
                        </span>{" "}
                    </h6>
                </div>
                {/*new-sign-in*/}
            </div>
            {/*login-content*/}
        </section>
    );
};

export default Login;
