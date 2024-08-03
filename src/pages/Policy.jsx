import React from "react";

const Policy = () => {
    return (
        <section className="mid-section terms-policy-page">
            <h1 className="main-heading white-text-heading">Privacy Policy</h1>
            <p>Last Updated: Aug 04,2024</p>
            <div className="terms-content">
                <p>
                    Welcome to Salssky.com! We value your privacy and more
                    committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you visit our website and
                    use our servcies (collectively, the "Servcies"). By
                    accessing or using Salssky.com, you agree to the practices
                    described in the Privacy Policy.{" "}
                </p>
            </div>
            {/*terms-content*/}
            <div className="terms-content">
                <h5 className="white-text-heading">
                    {" "}
                    1. Information We Collect{" "}
                </h5>
                <p>
                    We collect information from you when you visit our website,
                    create an account, make a purchase, or otherwise interact
                    with our Services. The types of information we may collect
                    include:
                </p>
                <ul>
                    <li>
                        Personal Information: This includes your name, email
                        address, phone number, and any other infomation you
                        provide when creating an account or communicating with
                        us.
                    </li>
                    <li>
                        Payment Information: If you make a purchase, we collect
                        payment information such as credit card details. This
                        information is processed securely by our payment
                        processor.
                    </li>
                </ul>
            </div>
            {/*terms-content*/}
        </section>
    );
};

export default Policy;
