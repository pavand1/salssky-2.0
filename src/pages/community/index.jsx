import React, { useEffect, useState } from "react";
import Level2 from "./Level2";
import { useDispatch, useSelector } from "react-redux";
// import { response } from "./json";
import { getBook } from "../book/helper";
import { setLoading } from "../../feature/loader/loader";

const CommunityChat = () => {
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [response, setResponse] = useState({ comments: [] });

    const fetchData = async () => {
        dispatch(setLoading(true));
        const book = await getBook();
        if (book?.comments) setResponse(book);
        else setResponse({ comments: [] });
        dispatch(setLoading(false));
    };
    useEffect(() => {
        if (isAuthenticated) {
            fetchData();
        }
    }, [isAuthenticated]);
    return (
        <>
            {!isAuthenticated ? (
                <Level2 />
            ) : (
                <>
                    <section className="mid-section community-chat-sec">
                        <div className="search-content">
                            <div className="row">
                                <div className="col-9">
                                    <div className="search-input">
                                        <div className="input-group">
                                            <span
                                                className="input-group-text"
                                                id="basic-addon1"
                                            >
                                                <svg
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 16 16"
                                                >
                                                    <g clipPath="url(#clip0_432_287)">
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M7.33331 12C9.91064 12 12 9.91064 12 7.33331C12 4.75598 9.91064 2.66665 7.33331 2.66665C4.75598 2.66665 2.66665 4.75598 2.66665 7.33331C2.66665 9.91064 4.75598 12 7.33331 12ZM7.33331 13.3333C8.7425 13.3333 10.0382 12.8475 11.0621 12.0342C11.4427 11.732 11.7856 11.3845 12.0829 11C12.8669 9.98602 13.3333 8.71414 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z"
                                                            fill="#737373"
                                                        />
                                                        <path
                                                            d="M14.5506 13.7826C14.615 13.7183 14.6158 13.6142 14.5525 13.5488L12.0829 11C11.7856 11.3845 11.4427 11.732 11.0621 12.0342L13.5488 14.5475C13.6138 14.6132 13.7198 14.6135 13.7851 14.5482L14.5506 13.7826Z"
                                                            fill="#737373"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_432_287">
                                                            <rect
                                                                width={16}
                                                                height={16}
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <input
                                                type="text"
                                                className=""
                                                placeholder="Serach"
                                            />
                                            <a href="#">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon2"
                                                >
                                                    <svg
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <rect
                                                            width={16}
                                                            height={16}
                                                            rx={8}
                                                            fill="#737373"
                                                        />
                                                        <path
                                                            d="M5 11L8 8L11 5M5 5L11 11"
                                                            stroke="#292929"
                                                            strokeWidth={2}
                                                        />
                                                    </svg>
                                                </span>{" "}
                                            </a>
                                        </div>
                                    </div>
                                    {/*search-input*/}
                                </div>
                                {/*col-9*/}
                                <div className="col-3">
                                    <div className="sort-dropdown">
                                        <div className="dropdown">
                                            <button
                                                type="button"
                                                className="btn dropdown-toggle flex-center-item"
                                                data-bs-toggle="dropdown"
                                            >
                                                Recent{" "}
                                                <span className="caret">
                                                    <svg
                                                        width={11}
                                                        height={9}
                                                        viewBox="0 0 11 9"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z"
                                                            fill="#C7C7C7"
                                                            fillOpacity="0.7"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Popular
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Following
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*dropdown*/}
                                    </div>
                                    {/*sort-dropdown*/}
                                </div>
                                {/*col-3*/}
                            </div>
                            {/*row*/}
                        </div>
                        {/*search-content*/}
                    </section>
                    <section className="profile-name-number">
                        <p>
                            <a href="#" className="flex-center-item">
                                {" "}
                                <span className="caret">
                                    <svg
                                        width={11}
                                        height={9}
                                        viewBox="0 0 11 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.5 9L0.736861 0.749999L10.2631 0.75L5.5 9Z"
                                            fill="#C7C7C7"
                                            fillOpacity="0.7"
                                        />
                                    </svg>
                                </span>{" "}
                                #0123456sxy
                            </a>
                        </p>
                    </section>
                    <section className="newsletter-sec profile-start-convo">
                        <form>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className=""
                                    placeholder="Have questions or insights to share?"
                                />
                                <span className="input-group-text">
                                    Start Convo
                                </span>
                            </div>
                        </form>
                    </section>
                    <section className="chat-content">
                        {response.comments.map((data) => (
                            <div className="chat-box" key={data._id}>
                                <div className="row">
                                    <div className="col-11">
                                        <div className="profile-posted-content">
                                            <h5
                                                className="flex-center-item"
                                                style={{ gap: "6px" }}
                                            >
                                                <img
                                                    src="images/Avatar.png"
                                                    alt="image"
                                                />{" "}
                                                {response.bookname} /
                                                <span className="posted-by">
                                                    {" "}
                                                    Posted by{" "}
                                                    <a href="#">
                                                        #
                                                        {data?.customerShortId ||
                                                            ""}{" "}
                                                    </a>
                                                </span>{" "}
                                            </h5>
                                        </div>
                                        {/*profile-posted-content*/}
                                    </div>
                                    {/*col-11*/}
                                    <div className="col-1 text-end">
                                        <div className="save-post">
                                            <a href="#">
                                                <svg
                                                    width={15}
                                                    height={19}
                                                    viewBox="0 0 15 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M1.12 18.84C0.813333 18.84 0.55 18.7333 0.33 18.52C0.11 18.3067 0 18.04 0 17.72V1.11999C0 0.813318 0.11 0.549986 0.33 0.329987C0.55 0.109985 0.813333 -1.33514e-05 1.12 -1.33514e-05H13.12C13.4267 -1.33514e-05 13.69 0.109985 13.91 0.329987C14.13 0.549986 14.24 0.813318 14.24 1.11999V17.72C14.24 17.9333 14.19 18.1267 14.09 18.3C13.99 18.4733 13.85 18.61 13.67 18.71C13.49 18.81 13.3 18.8567 13.1 18.85C12.9 18.8433 12.7133 18.7867 12.54 18.68L7.12 15.36L1.72 18.68C1.53333 18.7867 1.33333 18.8467 1.12 18.86V18.84ZM1.24 1.23999V17.5L7.12 13.88L13 17.5V1.23999H1.24Z"
                                                        fill="#8C8C8C"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                        {/*save-post*/}
                                    </div>
                                    {/*col-1*/}
                                </div>
                                {/*row*/}
                                <div className="question-answer-content">
                                    <h4>{data?.text || ""}</h4>
                                    <p>
                                        {/* It's easily Stewie. He went from a top
                                        character to a fledgling dingbat. Stewie
                                        was able to outwit and out cool pretty
                                        much everyone he met, then all of a
                                        sudden I'm supposed to believe some
                                        chump ... <a href="#"> show more</a>{" "} */}
                                        {data?.replies[0]?.text || ""}
                                    </p>
                                </div>
                                {/*question-answer-content*/}
                                <div className="row align-items-center">
                                    <div className="col-7">
                                        <div className="comment-icon">
                                            <a
                                                href="#"
                                                className="flex-center-item"
                                            >
                                                <svg
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_47_480)">
                                                        <path
                                                            d="M6.72 20.91C6.52 20.91 6.35 20.84 6.21 20.7C6.07 20.56 6 20.39 6 20.19V17.03H3.62C2.96667 17.03 2.36333 16.8667 1.81 16.54C1.25667 16.2134 0.816667 15.7734 0.49 15.22C0.163333 14.6667 0 14.0634 0 13.41V5.41003C0 4.7567 0.163333 4.15337 0.49 3.60003C0.816667 3.0467 1.25667 2.6067 1.81 2.28004C2.36333 1.95337 2.96667 1.79004 3.62 1.79004H14.62C15.2733 1.79004 15.8767 1.95337 16.43 2.28004C16.9833 2.6067 17.4233 3.0467 17.75 3.60003C18.0767 4.15337 18.24 4.7567 18.24 5.41003V13.41C18.24 14.0634 18.0767 14.6667 17.75 15.22C17.4233 15.7734 16.9833 16.2134 16.43 16.54C15.8767 16.8667 15.2733 17.03 14.62 17.03H11.36L7.2 20.73C7.06667 20.85 6.90667 20.91 6.72 20.91ZM3.62 3.03004C3.19333 3.03004 2.79667 3.1367 2.43 3.35003C2.06333 3.56337 1.77333 3.85337 1.56 4.22003C1.34667 4.5867 1.24 4.98337 1.24 5.41003V13.41C1.24 13.8367 1.34667 14.2334 1.56 14.6C1.77333 14.9667 2.06333 15.2567 2.43 15.47C2.79667 15.6834 3.19333 15.79 3.62 15.79H7.24V19.01L10.88 15.79H14.62C15.0467 15.79 15.4433 15.6834 15.81 15.47C16.1767 15.2567 16.4667 14.9667 16.68 14.6C16.8933 14.2334 17 13.8367 17 13.41V5.41003C17 4.98337 16.8933 4.5867 16.68 4.22003C16.4667 3.85337 16.1767 3.56337 15.81 3.35003C15.4433 3.1367 15.0467 3.03004 14.62 3.03004H3.62Z"
                                                            fill="#8C8C8C"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_47_480">
                                                            <rect
                                                                width={20}
                                                                height={20}
                                                                fill="white"
                                                                transform="matrix(1 0 0 -1 0 20.91)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span className="comment-count">
                                                    <strong>
                                                        {" "}
                                                        {
                                                            data?.replies
                                                                ?.length
                                                        }{" "}
                                                    </strong>{" "}
                                                    Thoughts
                                                </span>
                                            </a>
                                        </div>
                                        {/*comment-icon*/}
                                    </div>
                                    {/*col-7*/}
                                    <div className="col-5">
                                        <div className="comment-time text-end">
                                            <p>23 hours ago</p>
                                        </div>
                                        {/*comment-time*/}
                                    </div>
                                    {/*col-5*/}
                                </div>
                                {/*row*/}
                                <div className="reply-content">
                                    <div className="profile-reply-content">
                                        <h5
                                            className="flex-center-item"
                                            style={{ gap: "6px" }}
                                        >
                                            <img
                                                src="images/user-icon.svg"
                                                alt="image"
                                            />{" "}
                                            <a
                                                href="#"
                                                style={{ margin: "0px" }}
                                            >
                                                #{user?.customId || "345294mse"}
                                            </a>
                                        </h5>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Share your thoughts..."
                                            />
                                            <button
                                                className="btn"
                                                type="submit"
                                            >
                                                <svg
                                                    width={20}
                                                    height={19}
                                                    viewBox="0 0 20 19"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M19.9777 9.50001C19.9777 9.96876 19.6652 10.4375 19.1965 10.6328L1.73553 18.1719C1.57928 18.25 1.42303 18.25 1.26678 18.25C0.915222 18.25 0.563659 18.1328 0.329284 17.8594C-0.0222781 17.5078 -0.100403 16.9219 0.133972 16.4531L3.0246 10.7109L12.4777 9.53907L3.0246 8.32813L0.133972 2.58595C-0.100403 2.1172 -0.0222781 1.53126 0.329284 1.1797C0.680847 0.78907 1.26678 0.671883 1.73553 0.867195L19.2355 8.3672C19.7043 8.56251 19.9777 9.03126 19.9777 9.50001Z"
                                                        fill="#F4F4F4"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    {/*profile-reply-content*/}
                                    {/* <div className="profile-reply-content">
                                        <h5
                                            className="flex-center-item"
                                            style={{ gap: "6px" }}
                                        >
                                            <img
                                                src="images/user-icon.svg"
                                                alt="image"
                                            />{" "}
                                            <a
                                                href="#"
                                                style={{ margin: "0px" }}
                                            >
                                                #345294mse{" "}
                                            </a>
                                        </h5>
                                        <p>
                                            It's easily Stewie. He went from a
                                            top character to a fledgling
                                            dingbat. Stewie was able to outwit
                                            and out cool pretty much everyone he
                                            met, then all of a sudden I'm
                                            supposed to believe some chump ...{" "}
                                            <a href="#"> show more</a>{" "}
                                        </p>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="comment-reply">
                                                    <a href="#"> Reply</a>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="comment-reply text-end">
                                                    <div className="dropup">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            ...
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    Edit
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    Delete
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    {" "}
                                                                    Report
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </section>
                </>
            )}
        </>
    );
};

export default CommunityChat;
