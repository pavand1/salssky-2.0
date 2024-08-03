import React from "react";

const Help = () => {
    return (
        <>
            <section className="mid-section faq-sec">
                <div className="search-content">
                    <div className="row">
                        <div className="col-12">
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
                    </div>
                    {/*row*/}
                </div>
                {/*search-content*/}
            </section>
            <section className="faq-content">
                <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                This is a question
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    This is just a dummy text that has been
                                    inserted as a placeholder for future
                                    content. While it may seem insignificant at
                                    first glance, the use of dummy text is a
                                    common practice in the design and publishing
                                    industry, as it allows designers and
                                    developers to visualize the layout and
                                    overall aesthetic of a project without being
                                    distracted by the actual content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                This is a question
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    This is just a dummy text that has been
                                    inserted as a placeholder for future
                                    content. While it may seem insignificant at
                                    first glance, the use of dummy text is a
                                    common practice in the design and publishing
                                    industry, as it allows designers and
                                    developers to visualize the layout and
                                    overall aesthetic of a project without being
                                    distracted by the actual content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                This is a question
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    This is just a dummy text that has been
                                    inserted as a placeholder for future
                                    content. While it may seem insignificant at
                                    first glance, the use of dummy text is a
                                    common practice in the design and publishing
                                    industry, as it allows designers and
                                    developers to visualize the layout and
                                    overall aesthetic of a project without being
                                    distracted by the actual content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Help;
