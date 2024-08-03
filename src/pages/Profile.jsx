import React, { useEffect, useState } from "react";
import { getCustomerDetails, updateCustomerDetails } from "./book/helper";
import { useDispatch } from "react-redux";
import { setLoading } from "../feature/loader/loader";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    const userToken = localStorage.getItem("userToken");
    const [level, setLevel] = useState("Reader");
    const [email, setEmail] = useState("abc@gmail.com");
    const [phone, setPhone] = useState("1234567890");
    const [location, setLocation] = useState("123432,567588");

    const dispatch = useDispatch();
    const loadProfile = async () => {
        try {
            dispatch(setLoading(true));
            const customerDetails = await getCustomerDetails(userToken);
            const { data } = customerDetails;
            if (!data) return;
            setProfile(data);
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleSave = async () => {
        try {
            dispatch(setLoading(true));
            const customerDetails = await updateCustomerDetails(
                { email, phone, location, level },
                userToken
            );
            const { data } = customerDetails;
            if (!data) return;
            setProfile(data);
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        loadProfile();
    }, []);
    return (
        <section className="mid-section profile-sec">
            <div className="profile-header">
                <div className="row align-items-center">
                    <div className="col-sm-2 col-2">
                        <div className="profile-photo"></div>
                        {/*profile-photo*/}
                    </div>
                    {/*col-2*/}
                    <div className="col-sm-7 col-7">
                        <div className="profile-name">
                            <h5>
                                <a href="#"> {profile?.name || ""} </a>
                                <span>ID: {profile?.customId || ""}</span>
                            </h5>
                        </div>
                        {/*profile-name*/}
                    </div>
                    {/*col-7*/}
                    <div className="col-sm-3 col-3">
                        <div className="edit-save-content">
                            <ul>
                                <li>
                                    {" "}
                                    <a href="#" onClick={() => setIsEdit(true)}>
                                        <svg
                                            width={16}
                                            height={18}
                                            viewBox="0 0 16 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.9687 12.1485L11.7878 3.32938L10.5583 2.09981L1.73913 10.9189V12.1485H2.9687ZM3.68957 13.8876H0V10.1981L9.94348 0.254597C10.1065 0.0915787 10.3277 0 10.5583 0C10.7888 0 11.01 0.0915787 11.173 0.254597L13.633 2.7146C13.7961 2.87766 13.8876 3.0988 13.8876 3.32938C13.8876 3.55996 13.7961 3.78109 13.633 3.94416L3.68957 13.8876ZM0 15.6268H15.6522V17.3659H0V15.6268Z"
                                                fill="#7C7C7C"
                                            />
                                        </svg>
                                        <span className="desk-show edit-pro">
                                            {" "}
                                            Edit{" "}
                                        </span>{" "}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={() => handleSave()}>
                                        {" "}
                                        <svg
                                            width={17}
                                            height={17}
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0 0V16.5H16.5V3.44531L16.2891 3.21094L13.2891 0.210938L13.0547 0H0ZM1.5 1.5H3.75V6H12.75V1.82812L15 4.07812V15H13.5V8.25H3V15H1.5V1.5ZM5.25 1.5H8.25V3H9.75V1.5H11.25V4.5H5.25V1.5ZM4.5 9.75H12V15H4.5V9.75Z"
                                                fill="#F4F4F4"
                                            />
                                        </svg>
                                        <span className="desk-show save">
                                            {" "}
                                            Save{" "}
                                        </span>{" "}
                                    </a>
                                </li>
                                <li className="mob-show">
                                    <span className="edit-pro">
                                        <a href="#"> Edit </a>{" "}
                                    </span>{" "}
                                    /{" "}
                                    <span className="save-pro">
                                        <a href="#"> Save </a>
                                    </span>{" "}
                                </li>
                            </ul>
                        </div>
                        {/*edit-save-content*/}
                    </div>
                    {/*col-3*/}
                </div>
                {/*row*/}
            </div>
            {/*profile-header*/}
            <div className="profile-tagline">
                <svg
                    width={360}
                    height={163}
                    viewBox="0 0 360 163"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M83.8633 26.1469C45.9193 50.2634 5.9621 33.4546 1.9698 92.6536C-2.03106 151.853 -6.02336 149.582 55.9086 158.355C117.841 167.128 167.779 166.468 193.746 159.889C219.713 153.309 207.727 154.774 261.666 159.889C289.852 162.562 328.156 158.741 342.652 155.656C362.896 151.356 361.405 137.708 357.91 129.244C356.162 125.012 339.55 120.651 341.144 116.033C349.094 93.0391 337.991 67.7575 330.58 64.1421C318.595 58.2994 277.644 61.949 263.662 48.7984C256.731 42.2788 242.347 36.3246 235.639 30.8674C220.758 18.7534 218.873 22.0689 177.048 19.3531C141.126 17.0143 104.879 13.853 83.8719 26.1469H83.8633Z"
                        fill="#1E1F1C"
                        fillOpacity="0.8"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M83.8026 9.61982C45.8861 35.4543 5.95778 17.4492 1.96838 80.8666C-2.02959 144.293 -6.019 138.809 55.8682 148.203C117.755 157.597 167.657 159.951 193.605 152.904C219.554 145.857 207.577 147.421 261.477 152.904C289.642 155.766 327.918 151.667 342.403 148.366C372.761 141.448 348.584 127.413 353.37 112.571C361.323 87.9312 337.746 54.1985 330.341 50.3225C318.364 44.0572 277.443 47.9762 263.471 33.8816C256.546 26.903 242.172 20.5174 235.469 14.6647C220.598 1.68728 218.715 5.23673 176.92 2.32326C141.015 -0.169093 104.794 -3.55525 83.8026 9.61982Z"
                        fill="#1E1F1C"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M195.502 159.435C215.189 154.269 211.702 154.414 245.431 158.261L244.001 147.8C214.264 146.121 215.463 145.761 200.839 147.775C198.895 151.407 196.881 156.856 195.502 159.435Z"
                        fill="#737373"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M34.5592 155.511C41.5757 156.153 42.5096 156.256 52.8758 157.927C64.2444 159.76 96.1914 164.883 95.4803 159.606L98.0333 153.215C84.7799 152.512 71.7407 148.195 56.9538 147.072C50.16 146.558 44.1716 146.13 38.8771 145.736C35.7501 149.42 36.7781 152.881 34.5507 155.511H34.5592Z"
                        fill="#737373"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M310.226 163.145C322.433 161.029 336.251 157.686 342.26 156.175C360.163 151.688 358.51 145.151 354.918 141.217C354.694 143.275 351.438 145.41 341.197 147.979C334.744 149.597 323.039 151.99 309.691 154.242C311.116 157.16 309.121 160.893 310.217 163.14L310.226 163.145Z"
                        fill="#737373"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M187.749 148.906C161.782 155.931 125.825 154.371 63.8932 145.008C46.4933 142.377 27.6113 139.096 19.5496 134.127C-1.08014 121.414 5.38807 112.984 6.96443 88.0275C7.94965 72.461 4.42855 47.0937 33.9339 29.531C16.7738 35.9992 4.12013 46.4683 1.96977 80.6083C0.676131 101.092 -0.617511 114.371 0.324877 123.273C1.98691 138.831 10.4941 141.05 37.8233 145.076C43.1093 145.856 49.1063 146.704 55.9001 147.732C70.687 149.968 84.78 151.801 98.0419 153.206C140.304 157.678 173.973 157.764 193.737 152.418C196.487 151.673 198.817 151.022 200.839 150.465C215.463 146.438 214.273 147.158 244.001 150.525C248.952 151.09 254.77 151.716 261.649 152.418C276.042 153.875 293.082 153.523 308.229 152.392C322.75 151.304 335.541 149.505 342.634 147.895C349.214 146.404 353.232 144.579 355.537 142.48C354.628 142.729 353.652 142.977 352.615 143.208C338.119 146.498 313.052 154.586 257.151 148.409C203.538 142.489 213.707 141.872 187.732 148.897L187.749 148.906Z"
                        fill="#EBEBEB"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M38.3887 52.9365C38.9199 57.8883 56.8167 56.509 49.7231 52.4996C46.6903 50.7862 40.2735 50.2636 38.3887 52.9365Z"
                        fill="#B9B6B9"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.8918 52.1225C38.4316 57.0744 56.3198 55.695 49.2262 51.6856C46.1934 49.9722 39.7766 49.4496 37.8918 52.1225Z"
                        fill="#6A666A"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37.8319 41.525C42.0641 50.1864 65.9579 47.779 53.2699 40.7625C47.8469 37.764 38.5601 36.8473 37.8319 41.525Z"
                        fill="#B9B6B9"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M41.3273 41.148C45.5594 49.8094 69.4533 47.402 56.7653 40.3856C51.3509 37.3871 42.0555 36.4704 41.3273 41.148Z"
                        fill="#6A666A"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M192.255 135.96C203.178 138.702 210.726 132.414 197.969 132.234C192.512 132.157 187.629 133.81 192.255 135.96Z"
                        fill="#B9B6B9"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M190.233 135.635C201.148 138.377 208.704 132.088 195.947 131.908C190.49 131.831 185.607 133.485 190.233 135.635Z"
                        fill="#6A666A"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M167.727 145.342C189.436 147.74 194.645 138.325 172.893 139.602C163.598 140.15 157.344 142.986 167.727 145.342Z"
                        fill="#B9B6B9"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M168.438 143.954C190.147 146.353 195.348 136.929 173.604 138.214C164.3 138.762 158.055 141.598 168.438 143.954Z"
                        fill="#6A666A"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M232.709 140.681C239.254 145.059 253.287 140.801 242.133 138.377C237.361 137.34 231.081 137.948 232.709 140.681Z"
                        fill="#B9B6B9"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M231.287 140.03C237.832 144.408 251.865 140.15 240.702 137.725C235.939 136.689 229.659 137.297 231.287 140.03Z"
                        fill="#6A666A"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.45811 131.942C2.45811 131.557 3.24629 131.249 4.22295 131.249C5.1996 131.249 5.99635 131.557 5.99635 131.942C5.99635 134.581 7.03298 136.577 13.0557 138.616C19.4382 140.775 31.2609 143.028 52.7731 146.13L55.9943 146.592C98.4189 152.692 147.38 159.743 181.315 153.951C194.088 151.775 200.36 150.028 204.583 148.854C212.628 146.618 213.921 146.258 233.437 148.46C248.079 150.113 263.971 151.81 279.666 152.538C295.198 153.258 310.508 153.018 324.172 150.833C325.072 150.687 326.1 150.859 326.468 151.21C326.837 151.561 326.408 151.964 325.509 152.11C311.201 154.406 295.301 154.654 279.246 153.917C263.354 153.18 247.282 151.458 232.461 149.796C214.572 147.783 213.476 148.092 206.614 149.993C202.27 151.201 195.819 152.992 182.703 155.228C147.466 161.242 97.7935 154.089 54.7606 147.903L51.5394 147.44C29.6074 144.288 17.4592 141.957 10.734 139.679C3.65752 137.28 2.44098 134.984 2.44098 131.96L2.45811 131.942Z"
                        fill="#575458"
                    />
                </svg>
                <div className="tagline-title">
                    <h3>
                        Who Am I, <br /> Whats My Purpose?
                    </h3>
                </div>
                {/*tagline-title*/}
            </div>
            {/*profile-tagline*/}
            <div className="unlock-btn login-content">
                <div className="row align-items-center">
                    <div className="col-2">
                        <div className="unlock-img text-end">
                            <svg
                                width={39}
                                height={50}
                                viewBox="0 0 39 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.2308 0C13.3939 0 8.48858 3.77855 6.49039 8.89423L10.0361 10.3365C11.4934 6.60307 15.0691 3.84615 19.2308 3.84615C24.5267 3.84615 28.8462 8.16557 28.8462 13.4615V19.2308H0V50H38.4615V19.2308H32.6923V13.4615C32.6923 6.06971 26.6226 0 19.2308 0ZM3.84615 23.0769H34.6154L19.2308 46.7949L3.84615 23.0769Z"
                                    fill="#D22F26"
                                />
                            </svg>
                        </div>
                        {/*unlock-img*/}
                    </div>
                    {/*col-2*/}
                    <div className="col-10">
                        <button type="submit" className="btn">
                            Unlock Your Star*Piece
                        </button>
                    </div>
                    {/*col-10*/}
                </div>
                {/*row*/}
            </div>
            {/*unlock-btn*/}
            <div className="unlock-register-form">
                <div className="row mb-4">
                    <div className="col-10">
                        <div
                            className="register-label"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <label> Level </label>
                            <div
                                className="info-field"
                                style={{ display: "flex" }}
                            >
                                <input
                                    type="text"
                                    defaultValue={
                                        profile?.customerType || "Reader"
                                    }
                                    className=""
                                    placeholder=""
                                    disabled={true}
                                />
                                <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#myModal1"
                                >
                                    <span className="" id="">
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
                                    </span>{" "}
                                </a>{" "}
                            </div>
                            {/*info-field*/}
                        </div>
                        {/*register-label*/}
                    </div>
                    {/*col-10*/}
                    <div className="col-2">
                        <div className="register-form-icon text-center">
                            <a
                                href="#"
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                }}
                            >
                                <svg
                                    width={19}
                                    height={22}
                                    viewBox="0 0 19 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.0833 0L9.42448 0.630208L1.63281 8.42188L2.95052 9.74137L9.16667 3.52344V20.1667H0V22H9.16667H11V3.52344L17.2161 9.73958L18.5339 8.42188L10.7422 0.630208L10.0833 0Z"
                                        fill="#32CD32"
                                    />
                                </svg>
                                <span>Upgrade</span>{" "}
                            </a>
                        </div>
                        {/*register-form-icon*/}
                    </div>
                    {/*col-2*/}
                </div>
                {/*row*/}
                <div className="row mb-5">
                    <div className="col-10">
                        <div className="register-label">
                            <label> Email </label>
                            <div className="info-field">
                                <input
                                    type="text"
                                    defaultValue={
                                        profile?.email || "abc@abc.com"
                                    }
                                    className=""
                                    placeholder=""
                                    disabled={!isEdit}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {/*info-field*/}
                        </div>
                        {/*register-label*/}
                    </div>
                    {/*col-10*/}
                    <div className="col-2">
                        <div className="register-form-icon text-center">
                            <a href="#">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 6C5.74805 6 0.9375 11.5078 0.9375 11.5078L0.492188 12L0.9375 12.4922C0.9375 12.4922 5.32324 17.4932 11.1562 17.9531C11.4346 17.9883 11.7129 18 12 18C12.2871 18 12.5654 17.9883 12.8438 17.9531C18.6768 17.4932 23.0625 12.4922 23.0625 12.4922L23.5078 12L23.0625 11.5078C23.0625 11.5078 18.252 6 12 6ZM12 7.5C13.6523 7.5 15.1758 7.95117 16.5 8.55469C16.9775 9.3457 17.25 10.2568 17.25 11.25C17.25 13.96 15.2168 16.1865 12.5859 16.4766C12.5713 16.4795 12.5537 16.4736 12.5391 16.4766C12.3604 16.4854 12.1816 16.5 12 16.5C11.8008 16.5 11.6074 16.4883 11.4141 16.4766C8.7832 16.1865 6.75 13.96 6.75 11.25C6.75 10.2715 7.01367 9.36035 7.47656 8.57812H7.45312C8.78906 7.96289 10.3301 7.5 12 7.5ZM12 9C10.7578 9 9.75 10.0078 9.75 11.25C9.75 12.4922 10.7578 13.5 12 13.5C13.2422 13.5 14.25 12.4922 14.25 11.25C14.25 10.0078 13.2422 9 12 9ZM5.4375 9.70312C5.32031 10.207 5.25 10.7139 5.25 11.25C5.25 12.5654 5.625 13.7959 6.28125 14.8359C4.3916 13.7432 3.0791 12.4395 2.64844 12C3.00879 11.6309 4.01367 10.6523 5.4375 9.70312ZM18.5625 9.70312C19.9863 10.6523 20.9912 11.6309 21.3516 12C20.9209 12.4395 19.6084 13.7432 17.7188 14.8359C18.375 13.7959 18.75 12.5654 18.75 11.25C18.75 10.7139 18.6797 10.2012 18.5625 9.70312Z"
                                        fill="#8C8C8C"
                                    />
                                </svg>
                            </a>
                        </div>
                        {/*register-form-icon*/}
                    </div>
                    {/*col-2*/}
                </div>
                {/*row*/}
                <div className="row mb-5">
                    <div className="col-10">
                        <div className="register-label">
                            <label> Phone </label>
                            <div className="info-field">
                                <input
                                    type="text"
                                    defaultValue={
                                        profile?.phoneNumber ||
                                        "1234".replace(/./g, "*")
                                    }
                                    className=""
                                    placeholder=""
                                    disabled={!isEdit}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            {/*info-field*/}
                        </div>
                        {/*register-label*/}
                    </div>
                    {/*col-10*/}
                    <div className="col-2">
                        <div className="register-form-icon text-center">
                            <a href="#">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.78906 1.71094L1.71094 2.78906L6.375 7.42969L14.6953 15.75L16.125 17.2031L21.2109 22.2891L22.2891 21.2109L17.625 16.5469C20.8008 14.9736 22.9307 12.6387 23.0625 12.4922L23.5078 12L23.0625 11.5078C22.8604 11.2822 18.0645 6 12 6C10.5322 6 9.14648 6.32227 7.875 6.79688L2.78906 1.71094ZM12 7.5C13.6143 7.5 15.1406 7.9541 16.5 8.57812C16.9834 9.38672 17.25 10.3008 17.25 11.25C17.25 12.6123 16.7227 13.8574 15.8672 14.7891L13.7344 12.6562C14.0479 12.2725 14.25 11.7861 14.25 11.25C14.25 10.0078 13.2422 9 12 9C11.4639 9 10.9775 9.20215 10.5938 9.51562L9.07031 7.99219C10.002 7.70508 10.9775 7.5 12 7.5ZM5.01562 8.17969C2.61035 9.65918 1.04883 11.3818 0.9375 11.5078L0.492188 12L0.9375 12.4922C1.13086 12.709 5.57227 17.5693 11.2969 17.9531C11.5283 17.9766 11.7627 18 12 18C12.2373 18 12.4717 17.9766 12.7031 17.9531C13.3213 17.9121 13.9248 17.8301 14.5078 17.6953L13.1719 16.3594C12.791 16.4473 12.4043 16.5 12 16.5C9.10547 16.5 6.75 14.1445 6.75 11.25C6.75 10.8516 6.80273 10.4619 6.89062 10.0781L5.01562 8.17969ZM5.4375 9.70312C5.31738 10.21 5.25 10.7256 5.25 11.25C5.25 12.5537 5.61621 13.7549 6.25781 14.7891C4.54102 13.8047 3.22852 12.6504 2.55469 12C3.11426 11.458 4.12207 10.5586 5.4375 9.70312ZM18.5625 9.70312C19.8779 10.5586 20.8828 11.458 21.4453 12C20.7715 12.6504 19.4385 13.8281 17.7188 14.8125C18.3633 13.7783 18.75 12.5537 18.75 11.25C18.75 10.7256 18.6826 10.207 18.5625 9.70312Z"
                                        fill="#8C8C8C"
                                    />
                                </svg>
                            </a>
                        </div>
                        {/*register-form-icon*/}
                    </div>
                    {/*col-2*/}
                </div>
                {/*row*/}
                <div className="row mb-5">
                    <div className="col-10">
                        <div className="register-label">
                            <label> Location </label>
                            <div className="info-field">
                                <input
                                    type="text"
                                    defaultValue={
                                        profile?.location ||
                                        "12345 453646".replace(/./g, "*")
                                    }
                                    className=""
                                    placeholder=""
                                    disabled={!isEdit}
                                    onChange={(e) =>
                                        setLocation(e.target.value)
                                    }
                                />
                            </div>
                            {/*info-field*/}
                        </div>
                        {/*register-label*/}
                    </div>
                    {/*col-10*/}
                    <div className="col-2">
                        <div className="register-form-icon text-center">
                            <a href="#">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.78906 1.71094L1.71094 2.78906L6.375 7.42969L14.6953 15.75L16.125 17.2031L21.2109 22.2891L22.2891 21.2109L17.625 16.5469C20.8008 14.9736 22.9307 12.6387 23.0625 12.4922L23.5078 12L23.0625 11.5078C22.8604 11.2822 18.0645 6 12 6C10.5322 6 9.14648 6.32227 7.875 6.79688L2.78906 1.71094ZM12 7.5C13.6143 7.5 15.1406 7.9541 16.5 8.57812C16.9834 9.38672 17.25 10.3008 17.25 11.25C17.25 12.6123 16.7227 13.8574 15.8672 14.7891L13.7344 12.6562C14.0479 12.2725 14.25 11.7861 14.25 11.25C14.25 10.0078 13.2422 9 12 9C11.4639 9 10.9775 9.20215 10.5938 9.51562L9.07031 7.99219C10.002 7.70508 10.9775 7.5 12 7.5ZM5.01562 8.17969C2.61035 9.65918 1.04883 11.3818 0.9375 11.5078L0.492188 12L0.9375 12.4922C1.13086 12.709 5.57227 17.5693 11.2969 17.9531C11.5283 17.9766 11.7627 18 12 18C12.2373 18 12.4717 17.9766 12.7031 17.9531C13.3213 17.9121 13.9248 17.8301 14.5078 17.6953L13.1719 16.3594C12.791 16.4473 12.4043 16.5 12 16.5C9.10547 16.5 6.75 14.1445 6.75 11.25C6.75 10.8516 6.80273 10.4619 6.89062 10.0781L5.01562 8.17969ZM5.4375 9.70312C5.31738 10.21 5.25 10.7256 5.25 11.25C5.25 12.5537 5.61621 13.7549 6.25781 14.7891C4.54102 13.8047 3.22852 12.6504 2.55469 12C3.11426 11.458 4.12207 10.5586 5.4375 9.70312ZM18.5625 9.70312C19.8779 10.5586 20.8828 11.458 21.4453 12C20.7715 12.6504 19.4385 13.8281 17.7188 14.8125C18.3633 13.7783 18.75 12.5537 18.75 11.25C18.75 10.7256 18.6826 10.207 18.5625 9.70312Z"
                                        fill="#8C8C8C"
                                    />
                                </svg>
                            </a>
                        </div>
                        {/*register-form-icon*/}
                    </div>
                    {/*col-2*/}
                </div>
                {/*row*/}
            </div>
            {/*unlock-register-form*/}
        </section>
    );
};

export default Profile;
