import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import "./App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import Book from "./pages/Book.jsx";
import Home from "./pages/Home.jsx";
import Star from "./pages/Star.jsx";
import Community from "./pages/Community.jsx";
import Menu from "./pages/Menu.jsx";
import Policy from "./pages/Policy.jsx";
import Login from "./pages/Login.jsx";
import Help from "./pages/Help.jsx";
import Terms from "./pages/Terms.jsx";
import Profile from "./pages/Profile.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "./feature/auth/authSlice.js";
import { selectIsLoading } from "./feature/loader/loader.js";
import Cookie from "./pages/Cookie.jsx";

function App() {
    const isLoading = useSelector(selectIsLoading);
    const [showCookie, setShowCookie] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const isUser = localStorage.getItem("isUser");
        if (isUser) dispatch(setLogin(JSON.parse(isUser)));
    }, []);
    return (
        <Router>
            <Header />
            {showCookie && <Cookie setShowCookie={setShowCookie} />}
            <Routes>
                <Route path="/book" element={<Book />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/star" element={<Star />} />
                <Route path="/community" element={<Community />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/policy" element={<Policy />} />
                <Route path="/login" element={<Login />} />
                <Route path="/help" element={<Help />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
            <div
                className="dark-background"
                style={{ display: isLoading ? "block" : "none" }}
            >
                <LoadingOverlay
                    active={true}
                    spinner={true}
                    text="Loading your content..."
                />
            </div>
        </Router>
    );
}

export default App;
