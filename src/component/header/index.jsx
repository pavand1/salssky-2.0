import { useSelector } from "react-redux";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const getProfileColor = () => {
        if (user) {
            if (user.customerType === "reader") return "#007BFF";
            else if (user.customerType === "member") return "#FF0000";
            else if (user.customerType === "follower") return "#FFD700";
            else if (user.customerType === "star") return "#32CD32";
            else return "#FFFFFF";
        }
        return "#FFFFFF";
    };
    return (
        <section className="top-bar fixed-top">
            <div className="row align-items-center">
                <div className="col-6">
                    <div className="top-logo">
                        <svg width={198} height={62} viewBox="0 0 198 62">
                            <path d="M30.4362 9.78C30.1362 9.75 29.9562 8.655 29.8962 6.495C30.0162 5.895 30.2562 5.115 30.6162 4.155C30.9762 3.165 31.4862 2.01 32.1462 0.689998C32.3262 0.629998 32.4612 0.599999 32.5512 0.599999C33.0912 0.599999 33.3612 1.155 33.3612 2.265C33.0612 2.745 32.7612 3.24 32.4612 3.75C32.1612 4.23 31.8762 4.71 31.6062 5.19C30.7962 6.75 30.4062 8.28 30.4362 9.78ZM17.7912 39.3C13.2012 39.3 9.64619 38.205 7.12619 36.015C5.05619 34.155 4.02119 31.785 4.02119 28.905C4.02119 25.665 5.35619 23.025 8.02619 20.985C10.4262 19.125 13.1712 18.18 16.2612 18.15C18.8412 18.15 20.8662 18.81 22.3362 20.13C23.6262 21.33 24.2712 22.8 24.2712 24.54C24.2712 26.31 23.6412 27.825 22.3812 29.085C20.9412 30.465 19.1112 31.155 16.8912 31.155C16.6212 31.155 16.4862 31.11 16.4862 31.02C16.4862 30.84 16.6212 30.735 16.8912 30.705C17.8512 30.495 18.7062 30.195 19.4562 29.805C20.2362 29.415 20.8962 28.905 21.4362 28.275C22.4562 27.165 22.9662 25.875 22.9662 24.405C22.9662 22.785 22.3812 21.465 21.2112 20.445C20.0112 19.335 18.4212 18.78 16.4412 18.78C13.7412 18.78 11.3712 19.665 9.33119 21.435C7.11119 23.295 6.00119 25.665 6.00119 28.545C6.00119 31.365 6.85619 33.63 8.56619 35.34C10.5462 37.44 13.5162 38.49 17.4762 38.49C21.3462 38.49 24.5862 37.335 27.1962 35.025C30.0462 32.565 31.4712 29.46 31.4712 25.71C31.4712 22.98 30.4212 20.385 28.3212 17.925L23.4162 12.885C22.5162 11.955 21.8562 11.04 21.4362 10.14C21.0462 9.21 20.8512 8.325 20.8512 7.485C20.8512 5.625 21.5712 4.14 23.0112 3.03C24.3912 1.92 25.9962 1.365 27.8262 1.365C28.5462 1.365 29.2662 1.47 29.9862 1.68C30.7062 1.89 31.0662 2.145 31.0662 2.445C31.0662 2.595 30.9762 2.67 30.7962 2.67C30.7062 2.67 30.3462 2.535 29.7162 2.265C29.2062 2.055 28.6812 1.95 28.1412 1.95C26.7912 1.95 25.5912 2.445 24.5412 3.435C23.5212 4.455 23.0112 5.625 23.0112 6.945C23.0112 8.445 23.7162 9.945 25.1262 11.445L29.7162 15.72C31.1862 17.07 32.2662 18.54 32.9562 20.13C33.6762 21.69 34.0362 23.34 34.0362 25.08C34.0362 29.1 32.3112 32.52 28.8612 35.34C25.6212 37.98 21.9312 39.3 17.7912 39.3ZM28.6362 24.54C28.4862 24.6 28.4112 24.51 28.4112 24.27C28.2012 22.8 27.6012 21.3 26.6112 19.77C26.5512 20.22 26.4612 20.73 26.3412 21.3C25.7712 21.39 25.2612 21.195 24.8112 20.715C24.7512 20.625 24.6762 20.49 24.5862 20.31C24.5262 20.13 24.4962 19.92 24.4962 19.68V19.365C24.4962 19.035 24.5412 18.81 24.6312 18.69C25.2612 19.14 25.7862 19.32 26.2062 19.23C25.5162 18.24 24.7212 17.34 23.8212 16.53C22.9212 15.69 21.9462 14.94 20.8962 14.28C18.7062 12.96 16.7712 12.3 15.0912 12.3C13.2912 12.3 12.0462 13.05 11.3562 14.55C11.6862 14.31 12.0162 14.19 12.3462 14.19C12.7062 14.19 13.0512 14.295 13.3812 14.505C13.9812 14.925 14.2662 15.405 14.2362 15.945C13.8462 15.765 13.4262 15.675 12.9762 15.675C12.1362 15.675 11.5212 16.035 11.1312 16.755C10.8012 16.245 10.6362 15.81 10.6362 15.45C10.6362 15 10.8462 14.445 11.2662 13.785C12.1362 12.345 13.4862 11.625 15.3162 11.625C18.0462 11.625 20.8662 12.975 23.7762 15.675C25.2762 16.995 26.4912 18.36 27.4212 19.77C28.3512 21.15 28.8162 22.59 28.8162 24.09V24.225C28.8162 24.375 28.7562 24.48 28.6362 24.54ZM39.4924 33.27C38.2624 33.27 37.6474 32.67 37.6474 31.47C37.6474 30.33 38.4724 28.74 40.1224 26.7C41.6224 24.81 42.9274 23.505 44.0374 22.785C45.1474 22.065 46.1824 21.705 47.1424 21.705C48.2824 21.705 48.8524 22.035 48.8524 22.695C48.8524 22.845 48.7024 23.07 48.4024 23.37C48.1024 23.64 47.9374 23.805 47.9074 23.865C47.3374 24.795 47.0524 26.685 47.0524 29.535C47.0524 31.185 47.4124 32.01 48.1324 32.01C48.7924 32.01 49.5574 31.62 50.4274 30.84C51.2974 30.06 52.1074 29.19 52.8574 28.23C52.9474 28.14 53.0224 28.095 53.0824 28.095C53.2024 28.095 53.2624 28.17 53.2624 28.32C53.2624 28.38 53.2324 28.485 53.1724 28.635C53.1424 28.785 53.0974 28.905 53.0374 28.995C51.8074 30.645 50.7424 31.755 49.8424 32.325C48.9724 32.895 48.1174 33.18 47.2774 33.18C45.9274 33.18 45.2674 31.74 45.2974 28.86C44.7274 29.88 43.9024 30.84 42.8224 31.74C41.5624 32.76 40.4524 33.27 39.4924 33.27ZM40.7074 32.055C41.2174 32.055 41.7574 31.845 42.3274 31.425C44.0974 30.015 45.2524 27.375 45.7924 23.505C45.7024 23.505 45.6424 23.49 45.6124 23.46C45.0124 23.46 44.2174 23.82 43.2274 24.54C42.3874 25.11 41.7124 25.725 41.2024 26.385C40.0024 27.945 39.4024 29.295 39.4024 30.435C39.4024 31.515 39.8374 32.055 40.7074 32.055ZM57.3852 33.54C54.3552 33.54 52.8402 31.305 52.8402 26.835C52.8402 22.455 54.2802 17.7 57.1602 12.57C59.9802 7.47 62.6502 4.92 65.1702 4.92C66.0702 4.92 66.6702 5.535 66.9702 6.765V7.35C66.9702 9.51 65.3052 13.155 61.9752 18.285C60.5652 20.505 59.2302 22.44 57.9702 24.09C56.7402 25.74 55.5852 27.135 54.5052 28.275C54.8652 30.975 56.1102 32.325 58.2402 32.325C59.5302 32.325 60.6252 31.965 61.5252 31.245C62.4252 30.495 63.3852 29.49 64.4052 28.23C64.5852 28.05 64.7052 27.96 64.7652 27.96C64.8552 27.96 64.9002 28.035 64.9002 28.185C64.9002 28.395 64.7952 28.665 64.5852 28.995C63.2952 30.645 62.0802 31.815 60.9402 32.505C59.8002 33.195 58.6152 33.54 57.3852 33.54ZM54.5502 27.15C56.1702 25.56 58.2852 22.41 60.8952 17.7C63.6552 12.69 65.0352 9.24 65.0352 7.35C65.0352 6.51 64.7952 6.09 64.3152 6.09C62.4552 6.09 60.3402 8.76 57.9702 14.1C56.8602 16.74 56.0052 19.14 55.4052 21.3C54.8352 23.46 54.5502 25.41 54.5502 27.15ZM68.6728 33.135C68.3728 33.135 68.0578 33.09 67.7278 33C66.8278 32.79 65.8228 32.19 64.7128 31.2C63.5128 30.09 62.9128 29.145 62.9128 28.365C62.9128 27.705 63.1678 27.375 63.6778 27.375C64.0678 27.375 64.4428 27.615 64.8028 28.095C65.8528 27.255 66.8428 26.295 67.7728 25.215C68.7028 24.135 69.5578 22.92 70.3378 21.57L71.3278 19.86C71.3578 19.74 71.4478 19.68 71.5978 19.68C71.8978 19.68 72.1978 19.875 72.4978 20.265C72.8278 20.625 72.9928 20.955 72.9928 21.255C72.9928 21.465 72.8128 21.84 72.4528 22.38C72.0628 22.86 71.8678 23.37 71.8678 23.91C71.8678 24.12 71.8828 24.45 71.9128 24.9C71.9428 25.32 71.9578 25.65 71.9578 25.89C71.9578 28.65 71.5078 30.69 70.6078 32.01C70.7878 32.04 70.9828 32.07 71.1928 32.1C71.4328 32.1 71.6578 32.1 71.8678 32.1C73.0678 32.1 74.0428 31.995 74.7928 31.785C75.5728 31.545 76.2778 31.14 76.9078 30.57C77.5378 30 78.2278 29.22 78.9778 28.23C79.0678 28.11 79.1728 28.05 79.2928 28.05C79.4128 28.05 79.4728 28.14 79.4728 28.32C79.4728 28.41 79.4278 28.53 79.3378 28.68C79.2778 28.83 79.2178 28.935 79.1578 28.995C78.0778 30.465 76.9678 31.5 75.8278 32.1C74.7178 32.7 73.2478 33 71.4178 33C70.8478 33 70.2928 32.955 69.7528 32.865C69.4528 33.045 69.0928 33.135 68.6728 33.135ZM68.7178 31.47C69.6778 31.29 70.1578 30.03 70.1578 27.69C70.1578 27.09 70.1278 26.49 70.0678 25.89C70.0378 25.26 69.9628 24.615 69.8428 23.955C68.7628 25.545 67.2478 27.15 65.2978 28.77C66.1978 30 67.3378 30.9 68.7178 31.47ZM83.2627 33.135C82.9627 33.135 82.6477 33.09 82.3177 33C81.4177 32.79 80.4127 32.19 79.3027 31.2C78.1027 30.09 77.5027 29.145 77.5027 28.365C77.5027 27.705 77.7577 27.375 78.2677 27.375C78.6577 27.375 79.0327 27.615 79.3927 28.095C80.4427 27.255 81.4327 26.295 82.3627 25.215C83.2927 24.135 84.1477 22.92 84.9277 21.57L85.9177 19.86C85.9477 19.74 86.0377 19.68 86.1877 19.68C86.4877 19.68 86.7877 19.875 87.0877 20.265C87.4177 20.625 87.5827 20.955 87.5827 21.255C87.5827 21.465 87.4027 21.84 87.0427 22.38C86.6527 22.86 86.4577 23.37 86.4577 23.91C86.4577 24.12 86.4727 24.45 86.5027 24.9C86.5327 25.32 86.5477 25.65 86.5477 25.89C86.5477 28.65 86.0977 30.69 85.1977 32.01C85.3777 32.04 85.5727 32.07 85.7827 32.1C86.0227 32.1 86.2477 32.1 86.4577 32.1C87.6577 32.1 88.6327 31.995 89.3827 31.785C90.1627 31.545 90.8677 31.14 91.4977 30.57C92.1277 30 92.8177 29.22 93.5677 28.23C93.6577 28.11 93.7627 28.05 93.8827 28.05C94.0027 28.05 94.0627 28.14 94.0627 28.32C94.0627 28.41 94.0177 28.53 93.9277 28.68C93.8677 28.83 93.8077 28.935 93.7477 28.995C92.6677 30.465 91.5577 31.5 90.4177 32.1C89.3077 32.7 87.8377 33 86.0077 33C85.4377 33 84.8827 32.955 84.3427 32.865C84.0427 33.045 83.6827 33.135 83.2627 33.135ZM83.3077 31.47C84.2677 31.29 84.7477 30.03 84.7477 27.69C84.7477 27.09 84.7177 26.49 84.6577 25.89C84.6277 25.26 84.5527 24.615 84.4327 23.955C83.3527 25.545 81.8377 27.15 79.8877 28.77C80.7877 30 81.9277 30.9 83.3077 31.47ZM104.063 33.9C102.923 33.9 101.873 33.57 100.913 32.91C99.9525 32.25 99.2625 31.14 98.8425 29.58C98.8125 29.37 98.7525 29.04 98.6625 28.59C98.6025 28.11 98.5275 27.48 98.4375 26.7C97.5375 27.51 96.4425 28.92 95.1525 30.93C95.0025 31.17 94.8075 31.47 94.5675 31.83C94.3575 32.16 94.0875 32.55 93.7575 33C93.6375 33.12 93.4725 33.18 93.2625 33.18C92.7225 33.18 92.4525 32.88 92.4525 32.28C92.4525 32.16 92.8425 30.885 93.6225 28.455C98.8425 12.405 101.753 4.08 102.353 3.48C102.473 3.36 102.668 3.3 102.938 3.3C103.898 3.3 104.378 3.645 104.378 4.335C104.378 4.755 103.973 6 103.163 8.07C102.473 9.81 101.768 11.535 101.048 13.245C100.328 14.955 99.6075 16.665 98.8875 18.375C96.6075 23.955 95.4825 27.15 95.5125 27.96L100.328 23.955C101.378 23.085 102.368 22.455 103.298 22.065C104.228 21.645 105.038 21.435 105.728 21.435C107.108 21.435 107.798 22.125 107.798 23.505C107.798 24.225 107.468 24.9 106.808 25.53C106.178 26.13 105.413 26.625 104.513 27.015C103.613 27.375 102.758 27.555 101.948 27.555C101.528 27.555 101.123 27.48 100.733 27.33C100.733 28.83 101.078 30.105 101.768 31.155C102.158 31.755 102.623 32.19 103.163 32.46C103.733 32.7 104.318 32.82 104.918 32.82C105.518 32.82 106.133 32.715 106.763 32.505C107.393 32.295 107.963 32.04 108.473 31.74C109.373 31.17 110.108 30.615 110.678 30.075C111.278 29.535 111.878 28.92 112.478 28.23C112.628 28.08 112.748 28.005 112.838 28.005C112.958 28.005 113.018 28.08 113.018 28.23C113.018 28.32 112.973 28.455 112.883 28.635C112.793 28.785 112.718 28.905 112.658 28.995C112.238 29.535 111.758 30.06 111.218 30.57C110.678 31.08 110.033 31.59 109.283 32.1C108.503 32.67 107.648 33.105 106.718 33.405C105.818 33.735 104.933 33.9 104.063 33.9ZM101.408 26.52C102.278 26.52 103.118 26.28 103.928 25.8C104.738 25.32 105.143 24.75 105.143 24.09C105.143 23.4 104.738 23.055 103.928 23.055C103.418 23.055 102.893 23.22 102.353 23.55C101.813 23.88 101.303 24.27 100.823 24.72C100.343 25.14 99.9075 25.545 99.5175 25.935C99.9975 26.325 100.628 26.52 101.408 26.52ZM102.71 53.475C100.76 53.475 99.2451 52.98 98.1651 51.99C96.9651 50.97 96.3651 49.53 96.3651 47.67C96.3651 41.67 104.375 36.645 120.395 32.595C120.545 31.125 120.65 29.775 120.71 28.545C120.8 27.285 120.86 26.16 120.89 25.17C120.68 25.8 120.44 26.4 120.17 26.97C119.9 27.54 119.615 28.08 119.315 28.59C118.895 29.43 118.175 30.3 117.155 31.2C115.955 32.16 114.98 32.64 114.23 32.64C113.66 32.64 113.165 32.325 112.745 31.695C112.415 31.125 112.25 30.525 112.25 29.895C112.25 28.875 112.505 27.72 113.015 26.43C113.555 24.81 114.245 24 115.085 24C115.385 24 115.55 24.195 115.58 24.585C114.41 26.475 113.825 28.215 113.825 29.805C113.825 30.705 114.185 31.155 114.905 31.155C116.195 31.155 117.56 29.925 119 27.465C120.32 25.275 120.98 23.43 120.98 21.93C120.98 21.48 121.34 21.255 122.06 21.255C122.63 21.255 122.915 21.54 122.915 22.11C122.915 23.19 122.855 24.585 122.735 26.295C122.645 27.975 122.495 29.97 122.285 32.28C122.615 32.19 123.065 32.1 123.635 32.01C124.235 31.92 124.745 31.875 125.165 31.875C126.305 31.875 126.875 32.04 126.875 32.37C126.875 32.52 126.77 32.595 126.56 32.595C126.47 32.595 126.275 32.595 125.975 32.595C125.675 32.565 125.36 32.55 125.03 32.55C124.73 32.55 124.265 32.61 123.635 32.73C123.035 32.85 122.525 32.97 122.105 33.09C120.965 41.73 117.2 47.79 110.81 51.27C109.46 51.99 108.125 52.53 106.805 52.89C105.455 53.28 104.09 53.475 102.71 53.475ZM104.105 52.17C106.775 52.17 108.935 51.69 110.585 50.73C116.045 47.64 119.27 41.865 120.26 33.405C105.14 37.395 97.5801 42 97.5801 47.22C97.5801 50.52 99.7551 52.17 104.105 52.17ZM153.871 35.925C152.611 35.925 151.306 35.79 149.956 35.52C148.636 35.28 147.286 34.89 145.906 34.35L138.391 31.38C136.231 32.28 134.566 32.73 133.396 32.73C132.076 32.73 131.416 32.22 131.416 31.2C131.416 29.94 132.301 29.31 134.071 29.31C135.181 29.31 136.576 29.595 138.256 30.165C139.366 29.595 140.551 28.935 141.811 28.185C143.101 27.405 144.481 26.535 145.951 25.575C146.341 25.305 146.821 24.975 147.391 24.585C147.961 24.195 148.606 23.73 149.326 23.19C153.256 20.01 155.221 17.1 155.221 14.46C155.221 13.56 154.846 12.84 154.096 12.3C153.406 11.88 152.596 11.67 151.666 11.67C150.646 11.67 149.611 11.805 148.561 12.075C147.541 12.345 146.521 12.78 145.501 13.38C143.131 14.73 141.946 16.38 141.946 18.33C141.946 18.48 141.976 18.69 142.036 18.96C142.096 19.23 142.126 19.44 142.126 19.59C142.126 19.74 142.096 19.815 142.036 19.815C141.796 19.815 141.586 19.515 141.406 18.915C141.256 18.375 141.181 17.955 141.181 17.655C141.181 15.675 142.516 14.025 145.186 12.705C147.526 11.565 149.731 10.995 151.801 10.995C153.361 10.995 154.651 11.325 155.671 11.985C156.871 12.705 157.471 13.8 157.471 15.27C157.471 18.06 155.191 21.15 150.631 24.54C149.071 25.65 147.406 26.73 145.636 27.78C143.866 28.8 141.961 29.775 139.921 30.705C141.631 31.305 143.116 31.8 144.376 32.19C145.636 32.55 146.656 32.835 147.436 33.045C148.726 33.345 150.016 33.57 151.306 33.72C152.626 33.87 153.946 33.945 155.266 33.945C157.156 33.945 158.101 33.555 158.101 32.775C158.101 31.665 157.426 30.705 156.076 29.895C155.506 29.535 154.906 29.265 154.276 29.085C153.676 28.905 153.076 28.8 152.476 28.77H152.251C152.221 28.8 152.161 28.815 152.071 28.815H151.846C151.516 28.815 151.351 28.725 151.351 28.545C151.351 28.365 151.471 28.275 151.711 28.275C152.461 28.275 153.211 28.365 153.961 28.545C154.741 28.725 155.521 29.025 156.301 29.445C158.131 30.345 159.046 31.455 159.046 32.775C159.046 33.735 158.401 34.545 157.111 35.205C156.061 35.685 154.981 35.925 153.871 35.925ZM133.396 32.19C133.906 32.19 134.461 32.04 135.061 31.74C135.301 31.59 135.556 31.455 135.826 31.335C136.096 31.185 136.366 31.035 136.636 30.885C135.316 30.585 134.461 30.435 134.071 30.435C132.871 30.435 132.271 30.78 132.271 31.47C132.271 31.95 132.646 32.19 133.396 32.19ZM162.719 33.675C162.509 33.675 162.299 33.495 162.089 33.135C161.909 32.805 161.819 32.52 161.819 32.28C161.819 31.77 162.089 31.41 162.629 31.2C162.749 30.99 163.154 30.705 163.844 30.345C164.504 30.015 164.954 29.85 165.194 29.85C165.224 29.85 165.254 29.865 165.284 29.895L165.329 29.94C165.119 30.15 164.894 30.42 164.654 30.75C164.444 31.08 164.249 31.56 164.069 32.19C163.769 33.18 163.319 33.675 162.719 33.675ZM176.913 35.385C174.513 35.385 172.608 34.695 171.198 33.315C169.818 31.965 169.128 30.105 169.128 27.735C169.128 26.445 169.308 25.2 169.668 24C169.158 22.89 168.903 21.645 168.903 20.265C168.903 18.135 169.758 16.17 171.468 14.37C174.678 10.98 178.968 9.285 184.338 9.285C186.558 9.285 188.523 9.915 190.233 11.175C192.063 12.465 193.143 14.205 193.473 16.395C193.563 17.055 193.608 17.76 193.608 18.51C193.608 21.96 192.513 25.185 190.323 28.185C188.223 31.035 185.508 33.075 182.178 34.305C180.378 35.025 178.623 35.385 176.913 35.385ZM176.013 33.54C177.963 33.54 180.078 33.015 182.358 31.965C183.828 31.245 185.178 30.42 186.408 29.49C187.638 28.56 188.733 27.525 189.693 26.385C190.803 25.035 191.643 23.67 192.213 22.29C192.783 20.88 193.068 19.44 193.068 17.97C193.068 17.73 193.053 17.49 193.023 17.25C193.023 16.98 193.008 16.725 192.978 16.485C192.708 14.595 191.673 13.065 189.873 11.895C188.223 10.785 186.378 10.23 184.338 10.23C181.488 10.23 178.923 10.845 176.643 12.075C174.123 13.395 172.278 15.255 171.108 17.655C170.538 18.765 170.253 19.98 170.253 21.3C170.253 21.6 170.283 21.84 170.343 22.02C170.763 21.24 171.288 20.43 171.918 19.59C172.578 18.75 173.358 17.88 174.258 16.98C176.088 15.15 177.738 13.905 179.208 13.245C180.678 12.555 182.028 12.21 183.258 12.21C183.858 12.21 184.158 12.285 184.158 12.435C184.158 12.555 183.843 12.645 183.213 12.705C181.203 12.705 178.818 14.175 176.058 17.115C173.658 19.635 171.933 22.065 170.883 24.405C171.123 24.795 171.378 25.14 171.648 25.44C171.948 25.71 172.263 25.935 172.593 26.115C172.923 26.265 173.088 26.385 173.088 26.475C173.088 26.565 172.998 26.61 172.818 26.61C172.068 26.61 171.288 26.19 170.478 25.35C170.268 26.01 170.103 26.535 169.983 26.925C169.893 27.315 169.848 27.615 169.848 27.825C169.848 31.635 171.903 33.54 176.013 33.54Z" />
                            <path d="M30.4362 9.78C30.1362 9.75 29.9562 8.655 29.8962 6.495C30.0162 5.895 30.2562 5.115 30.6162 4.155C30.9762 3.165 31.4862 2.01 32.1462 0.689998C32.3262 0.629998 32.4612 0.599999 32.5512 0.599999C33.0912 0.599999 33.3612 1.155 33.3612 2.265C33.0612 2.745 32.7612 3.24 32.4612 3.75C32.1612 4.23 31.8762 4.71 31.6062 5.19C30.7962 6.75 30.4062 8.28 30.4362 9.78ZM17.7912 39.3C13.2012 39.3 9.64619 38.205 7.12619 36.015C5.05619 34.155 4.02119 31.785 4.02119 28.905C4.02119 25.665 5.35619 23.025 8.02619 20.985C10.4262 19.125 13.1712 18.18 16.2612 18.15C18.8412 18.15 20.8662 18.81 22.3362 20.13C23.6262 21.33 24.2712 22.8 24.2712 24.54C24.2712 26.31 23.6412 27.825 22.3812 29.085C20.9412 30.465 19.1112 31.155 16.8912 31.155C16.6212 31.155 16.4862 31.11 16.4862 31.02C16.4862 30.84 16.6212 30.735 16.8912 30.705C17.8512 30.495 18.7062 30.195 19.4562 29.805C20.2362 29.415 20.8962 28.905 21.4362 28.275C22.4562 27.165 22.9662 25.875 22.9662 24.405C22.9662 22.785 22.3812 21.465 21.2112 20.445C20.0112 19.335 18.4212 18.78 16.4412 18.78C13.7412 18.78 11.3712 19.665 9.33119 21.435C7.11119 23.295 6.00119 25.665 6.00119 28.545C6.00119 31.365 6.85619 33.63 8.56619 35.34C10.5462 37.44 13.5162 38.49 17.4762 38.49C21.3462 38.49 24.5862 37.335 27.1962 35.025C30.0462 32.565 31.4712 29.46 31.4712 25.71C31.4712 22.98 30.4212 20.385 28.3212 17.925L23.4162 12.885C22.5162 11.955 21.8562 11.04 21.4362 10.14C21.0462 9.21 20.8512 8.325 20.8512 7.485C20.8512 5.625 21.5712 4.14 23.0112 3.03C24.3912 1.92 25.9962 1.365 27.8262 1.365C28.5462 1.365 29.2662 1.47 29.9862 1.68C30.7062 1.89 31.0662 2.145 31.0662 2.445C31.0662 2.595 30.9762 2.67 30.7962 2.67C30.7062 2.67 30.3462 2.535 29.7162 2.265C29.2062 2.055 28.6812 1.95 28.1412 1.95C26.7912 1.95 25.5912 2.445 24.5412 3.435C23.5212 4.455 23.0112 5.625 23.0112 6.945C23.0112 8.445 23.7162 9.945 25.1262 11.445L29.7162 15.72C31.1862 17.07 32.2662 18.54 32.9562 20.13C33.6762 21.69 34.0362 23.34 34.0362 25.08C34.0362 29.1 32.3112 32.52 28.8612 35.34C25.6212 37.98 21.9312 39.3 17.7912 39.3ZM28.6362 24.54C28.4862 24.6 28.4112 24.51 28.4112 24.27C28.2012 22.8 27.6012 21.3 26.6112 19.77C26.5512 20.22 26.4612 20.73 26.3412 21.3C25.7712 21.39 25.2612 21.195 24.8112 20.715C24.7512 20.625 24.6762 20.49 24.5862 20.31C24.5262 20.13 24.4962 19.92 24.4962 19.68V19.365C24.4962 19.035 24.5412 18.81 24.6312 18.69C25.2612 19.14 25.7862 19.32 26.2062 19.23C25.5162 18.24 24.7212 17.34 23.8212 16.53C22.9212 15.69 21.9462 14.94 20.8962 14.28C18.7062 12.96 16.7712 12.3 15.0912 12.3C13.2912 12.3 12.0462 13.05 11.3562 14.55C11.6862 14.31 12.0162 14.19 12.3462 14.19C12.7062 14.19 13.0512 14.295 13.3812 14.505C13.9812 14.925 14.2662 15.405 14.2362 15.945C13.8462 15.765 13.4262 15.675 12.9762 15.675C12.1362 15.675 11.5212 16.035 11.1312 16.755C10.8012 16.245 10.6362 15.81 10.6362 15.45C10.6362 15 10.8462 14.445 11.2662 13.785C12.1362 12.345 13.4862 11.625 15.3162 11.625C18.0462 11.625 20.8662 12.975 23.7762 15.675C25.2762 16.995 26.4912 18.36 27.4212 19.77C28.3512 21.15 28.8162 22.59 28.8162 24.09V24.225C28.8162 24.375 28.7562 24.48 28.6362 24.54ZM39.4924 33.27C38.2624 33.27 37.6474 32.67 37.6474 31.47C37.6474 30.33 38.4724 28.74 40.1224 26.7C41.6224 24.81 42.9274 23.505 44.0374 22.785C45.1474 22.065 46.1824 21.705 47.1424 21.705C48.2824 21.705 48.8524 22.035 48.8524 22.695C48.8524 22.845 48.7024 23.07 48.4024 23.37C48.1024 23.64 47.9374 23.805 47.9074 23.865C47.3374 24.795 47.0524 26.685 47.0524 29.535C47.0524 31.185 47.4124 32.01 48.1324 32.01C48.7924 32.01 49.5574 31.62 50.4274 30.84C51.2974 30.06 52.1074 29.19 52.8574 28.23C52.9474 28.14 53.0224 28.095 53.0824 28.095C53.2024 28.095 53.2624 28.17 53.2624 28.32C53.2624 28.38 53.2324 28.485 53.1724 28.635C53.1424 28.785 53.0974 28.905 53.0374 28.995C51.8074 30.645 50.7424 31.755 49.8424 32.325C48.9724 32.895 48.1174 33.18 47.2774 33.18C45.9274 33.18 45.2674 31.74 45.2974 28.86C44.7274 29.88 43.9024 30.84 42.8224 31.74C41.5624 32.76 40.4524 33.27 39.4924 33.27ZM40.7074 32.055C41.2174 32.055 41.7574 31.845 42.3274 31.425C44.0974 30.015 45.2524 27.375 45.7924 23.505C45.7024 23.505 45.6424 23.49 45.6124 23.46C45.0124 23.46 44.2174 23.82 43.2274 24.54C42.3874 25.11 41.7124 25.725 41.2024 26.385C40.0024 27.945 39.4024 29.295 39.4024 30.435C39.4024 31.515 39.8374 32.055 40.7074 32.055ZM57.3852 33.54C54.3552 33.54 52.8402 31.305 52.8402 26.835C52.8402 22.455 54.2802 17.7 57.1602 12.57C59.9802 7.47 62.6502 4.92 65.1702 4.92C66.0702 4.92 66.6702 5.535 66.9702 6.765V7.35C66.9702 9.51 65.3052 13.155 61.9752 18.285C60.5652 20.505 59.2302 22.44 57.9702 24.09C56.7402 25.74 55.5852 27.135 54.5052 28.275C54.8652 30.975 56.1102 32.325 58.2402 32.325C59.5302 32.325 60.6252 31.965 61.5252 31.245C62.4252 30.495 63.3852 29.49 64.4052 28.23C64.5852 28.05 64.7052 27.96 64.7652 27.96C64.8552 27.96 64.9002 28.035 64.9002 28.185C64.9002 28.395 64.7952 28.665 64.5852 28.995C63.2952 30.645 62.0802 31.815 60.9402 32.505C59.8002 33.195 58.6152 33.54 57.3852 33.54ZM54.5502 27.15C56.1702 25.56 58.2852 22.41 60.8952 17.7C63.6552 12.69 65.0352 9.24 65.0352 7.35C65.0352 6.51 64.7952 6.09 64.3152 6.09C62.4552 6.09 60.3402 8.76 57.9702 14.1C56.8602 16.74 56.0052 19.14 55.4052 21.3C54.8352 23.46 54.5502 25.41 54.5502 27.15ZM68.6728 33.135C68.3728 33.135 68.0578 33.09 67.7278 33C66.8278 32.79 65.8228 32.19 64.7128 31.2C63.5128 30.09 62.9128 29.145 62.9128 28.365C62.9128 27.705 63.1678 27.375 63.6778 27.375C64.0678 27.375 64.4428 27.615 64.8028 28.095C65.8528 27.255 66.8428 26.295 67.7728 25.215C68.7028 24.135 69.5578 22.92 70.3378 21.57L71.3278 19.86C71.3578 19.74 71.4478 19.68 71.5978 19.68C71.8978 19.68 72.1978 19.875 72.4978 20.265C72.8278 20.625 72.9928 20.955 72.9928 21.255C72.9928 21.465 72.8128 21.84 72.4528 22.38C72.0628 22.86 71.8678 23.37 71.8678 23.91C71.8678 24.12 71.8828 24.45 71.9128 24.9C71.9428 25.32 71.9578 25.65 71.9578 25.89C71.9578 28.65 71.5078 30.69 70.6078 32.01C70.7878 32.04 70.9828 32.07 71.1928 32.1C71.4328 32.1 71.6578 32.1 71.8678 32.1C73.0678 32.1 74.0428 31.995 74.7928 31.785C75.5728 31.545 76.2778 31.14 76.9078 30.57C77.5378 30 78.2278 29.22 78.9778 28.23C79.0678 28.11 79.1728 28.05 79.2928 28.05C79.4128 28.05 79.4728 28.14 79.4728 28.32C79.4728 28.41 79.4278 28.53 79.3378 28.68C79.2778 28.83 79.2178 28.935 79.1578 28.995C78.0778 30.465 76.9678 31.5 75.8278 32.1C74.7178 32.7 73.2478 33 71.4178 33C70.8478 33 70.2928 32.955 69.7528 32.865C69.4528 33.045 69.0928 33.135 68.6728 33.135ZM68.7178 31.47C69.6778 31.29 70.1578 30.03 70.1578 27.69C70.1578 27.09 70.1278 26.49 70.0678 25.89C70.0378 25.26 69.9628 24.615 69.8428 23.955C68.7628 25.545 67.2478 27.15 65.2978 28.77C66.1978 30 67.3378 30.9 68.7178 31.47ZM83.2627 33.135C82.9627 33.135 82.6477 33.09 82.3177 33C81.4177 32.79 80.4127 32.19 79.3027 31.2C78.1027 30.09 77.5027 29.145 77.5027 28.365C77.5027 27.705 77.7577 27.375 78.2677 27.375C78.6577 27.375 79.0327 27.615 79.3927 28.095C80.4427 27.255 81.4327 26.295 82.3627 25.215C83.2927 24.135 84.1477 22.92 84.9277 21.57L85.9177 19.86C85.9477 19.74 86.0377 19.68 86.1877 19.68C86.4877 19.68 86.7877 19.875 87.0877 20.265C87.4177 20.625 87.5827 20.955 87.5827 21.255C87.5827 21.465 87.4027 21.84 87.0427 22.38C86.6527 22.86 86.4577 23.37 86.4577 23.91C86.4577 24.12 86.4727 24.45 86.5027 24.9C86.5327 25.32 86.5477 25.65 86.5477 25.89C86.5477 28.65 86.0977 30.69 85.1977 32.01C85.3777 32.04 85.5727 32.07 85.7827 32.1C86.0227 32.1 86.2477 32.1 86.4577 32.1C87.6577 32.1 88.6327 31.995 89.3827 31.785C90.1627 31.545 90.8677 31.14 91.4977 30.57C92.1277 30 92.8177 29.22 93.5677 28.23C93.6577 28.11 93.7627 28.05 93.8827 28.05C94.0027 28.05 94.0627 28.14 94.0627 28.32C94.0627 28.41 94.0177 28.53 93.9277 28.68C93.8677 28.83 93.8077 28.935 93.7477 28.995C92.6677 30.465 91.5577 31.5 90.4177 32.1C89.3077 32.7 87.8377 33 86.0077 33C85.4377 33 84.8827 32.955 84.3427 32.865C84.0427 33.045 83.6827 33.135 83.2627 33.135ZM83.3077 31.47C84.2677 31.29 84.7477 30.03 84.7477 27.69C84.7477 27.09 84.7177 26.49 84.6577 25.89C84.6277 25.26 84.5527 24.615 84.4327 23.955C83.3527 25.545 81.8377 27.15 79.8877 28.77C80.7877 30 81.9277 30.9 83.3077 31.47ZM104.063 33.9C102.923 33.9 101.873 33.57 100.913 32.91C99.9525 32.25 99.2625 31.14 98.8425 29.58C98.8125 29.37 98.7525 29.04 98.6625 28.59C98.6025 28.11 98.5275 27.48 98.4375 26.7C97.5375 27.51 96.4425 28.92 95.1525 30.93C95.0025 31.17 94.8075 31.47 94.5675 31.83C94.3575 32.16 94.0875 32.55 93.7575 33C93.6375 33.12 93.4725 33.18 93.2625 33.18C92.7225 33.18 92.4525 32.88 92.4525 32.28C92.4525 32.16 92.8425 30.885 93.6225 28.455C98.8425 12.405 101.753 4.08 102.353 3.48C102.473 3.36 102.668 3.3 102.938 3.3C103.898 3.3 104.378 3.645 104.378 4.335C104.378 4.755 103.973 6 103.163 8.07C102.473 9.81 101.768 11.535 101.048 13.245C100.328 14.955 99.6075 16.665 98.8875 18.375C96.6075 23.955 95.4825 27.15 95.5125 27.96L100.328 23.955C101.378 23.085 102.368 22.455 103.298 22.065C104.228 21.645 105.038 21.435 105.728 21.435C107.108 21.435 107.798 22.125 107.798 23.505C107.798 24.225 107.468 24.9 106.808 25.53C106.178 26.13 105.413 26.625 104.513 27.015C103.613 27.375 102.758 27.555 101.948 27.555C101.528 27.555 101.123 27.48 100.733 27.33C100.733 28.83 101.078 30.105 101.768 31.155C102.158 31.755 102.623 32.19 103.163 32.46C103.733 32.7 104.318 32.82 104.918 32.82C105.518 32.82 106.133 32.715 106.763 32.505C107.393 32.295 107.963 32.04 108.473 31.74C109.373 31.17 110.108 30.615 110.678 30.075C111.278 29.535 111.878 28.92 112.478 28.23C112.628 28.08 112.748 28.005 112.838 28.005C112.958 28.005 113.018 28.08 113.018 28.23C113.018 28.32 112.973 28.455 112.883 28.635C112.793 28.785 112.718 28.905 112.658 28.995C112.238 29.535 111.758 30.06 111.218 30.57C110.678 31.08 110.033 31.59 109.283 32.1C108.503 32.67 107.648 33.105 106.718 33.405C105.818 33.735 104.933 33.9 104.063 33.9ZM101.408 26.52C102.278 26.52 103.118 26.28 103.928 25.8C104.738 25.32 105.143 24.75 105.143 24.09C105.143 23.4 104.738 23.055 103.928 23.055C103.418 23.055 102.893 23.22 102.353 23.55C101.813 23.88 101.303 24.27 100.823 24.72C100.343 25.14 99.9075 25.545 99.5175 25.935C99.9975 26.325 100.628 26.52 101.408 26.52ZM102.71 53.475C100.76 53.475 99.2451 52.98 98.1651 51.99C96.9651 50.97 96.3651 49.53 96.3651 47.67C96.3651 41.67 104.375 36.645 120.395 32.595C120.545 31.125 120.65 29.775 120.71 28.545C120.8 27.285 120.86 26.16 120.89 25.17C120.68 25.8 120.44 26.4 120.17 26.97C119.9 27.54 119.615 28.08 119.315 28.59C118.895 29.43 118.175 30.3 117.155 31.2C115.955 32.16 114.98 32.64 114.23 32.64C113.66 32.64 113.165 32.325 112.745 31.695C112.415 31.125 112.25 30.525 112.25 29.895C112.25 28.875 112.505 27.72 113.015 26.43C113.555 24.81 114.245 24 115.085 24C115.385 24 115.55 24.195 115.58 24.585C114.41 26.475 113.825 28.215 113.825 29.805C113.825 30.705 114.185 31.155 114.905 31.155C116.195 31.155 117.56 29.925 119 27.465C120.32 25.275 120.98 23.43 120.98 21.93C120.98 21.48 121.34 21.255 122.06 21.255C122.63 21.255 122.915 21.54 122.915 22.11C122.915 23.19 122.855 24.585 122.735 26.295C122.645 27.975 122.495 29.97 122.285 32.28C122.615 32.19 123.065 32.1 123.635 32.01C124.235 31.92 124.745 31.875 125.165 31.875C126.305 31.875 126.875 32.04 126.875 32.37C126.875 32.52 126.77 32.595 126.56 32.595C126.47 32.595 126.275 32.595 125.975 32.595C125.675 32.565 125.36 32.55 125.03 32.55C124.73 32.55 124.265 32.61 123.635 32.73C123.035 32.85 122.525 32.97 122.105 33.09C120.965 41.73 117.2 47.79 110.81 51.27C109.46 51.99 108.125 52.53 106.805 52.89C105.455 53.28 104.09 53.475 102.71 53.475ZM104.105 52.17C106.775 52.17 108.935 51.69 110.585 50.73C116.045 47.64 119.27 41.865 120.26 33.405C105.14 37.395 97.5801 42 97.5801 47.22C97.5801 50.52 99.7551 52.17 104.105 52.17ZM153.871 35.925C152.611 35.925 151.306 35.79 149.956 35.52C148.636 35.28 147.286 34.89 145.906 34.35L138.391 31.38C136.231 32.28 134.566 32.73 133.396 32.73C132.076 32.73 131.416 32.22 131.416 31.2C131.416 29.94 132.301 29.31 134.071 29.31C135.181 29.31 136.576 29.595 138.256 30.165C139.366 29.595 140.551 28.935 141.811 28.185C143.101 27.405 144.481 26.535 145.951 25.575C146.341 25.305 146.821 24.975 147.391 24.585C147.961 24.195 148.606 23.73 149.326 23.19C153.256 20.01 155.221 17.1 155.221 14.46C155.221 13.56 154.846 12.84 154.096 12.3C153.406 11.88 152.596 11.67 151.666 11.67C150.646 11.67 149.611 11.805 148.561 12.075C147.541 12.345 146.521 12.78 145.501 13.38C143.131 14.73 141.946 16.38 141.946 18.33C141.946 18.48 141.976 18.69 142.036 18.96C142.096 19.23 142.126 19.44 142.126 19.59C142.126 19.74 142.096 19.815 142.036 19.815C141.796 19.815 141.586 19.515 141.406 18.915C141.256 18.375 141.181 17.955 141.181 17.655C141.181 15.675 142.516 14.025 145.186 12.705C147.526 11.565 149.731 10.995 151.801 10.995C153.361 10.995 154.651 11.325 155.671 11.985C156.871 12.705 157.471 13.8 157.471 15.27C157.471 18.06 155.191 21.15 150.631 24.54C149.071 25.65 147.406 26.73 145.636 27.78C143.866 28.8 141.961 29.775 139.921 30.705C141.631 31.305 143.116 31.8 144.376 32.19C145.636 32.55 146.656 32.835 147.436 33.045C148.726 33.345 150.016 33.57 151.306 33.72C152.626 33.87 153.946 33.945 155.266 33.945C157.156 33.945 158.101 33.555 158.101 32.775C158.101 31.665 157.426 30.705 156.076 29.895C155.506 29.535 154.906 29.265 154.276 29.085C153.676 28.905 153.076 28.8 152.476 28.77H152.251C152.221 28.8 152.161 28.815 152.071 28.815H151.846C151.516 28.815 151.351 28.725 151.351 28.545C151.351 28.365 151.471 28.275 151.711 28.275C152.461 28.275 153.211 28.365 153.961 28.545C154.741 28.725 155.521 29.025 156.301 29.445C158.131 30.345 159.046 31.455 159.046 32.775C159.046 33.735 158.401 34.545 157.111 35.205C156.061 35.685 154.981 35.925 153.871 35.925ZM133.396 32.19C133.906 32.19 134.461 32.04 135.061 31.74C135.301 31.59 135.556 31.455 135.826 31.335C136.096 31.185 136.366 31.035 136.636 30.885C135.316 30.585 134.461 30.435 134.071 30.435C132.871 30.435 132.271 30.78 132.271 31.47C132.271 31.95 132.646 32.19 133.396 32.19ZM162.719 33.675C162.509 33.675 162.299 33.495 162.089 33.135C161.909 32.805 161.819 32.52 161.819 32.28C161.819 31.77 162.089 31.41 162.629 31.2C162.749 30.99 163.154 30.705 163.844 30.345C164.504 30.015 164.954 29.85 165.194 29.85C165.224 29.85 165.254 29.865 165.284 29.895L165.329 29.94C165.119 30.15 164.894 30.42 164.654 30.75C164.444 31.08 164.249 31.56 164.069 32.19C163.769 33.18 163.319 33.675 162.719 33.675ZM176.913 35.385C174.513 35.385 172.608 34.695 171.198 33.315C169.818 31.965 169.128 30.105 169.128 27.735C169.128 26.445 169.308 25.2 169.668 24C169.158 22.89 168.903 21.645 168.903 20.265C168.903 18.135 169.758 16.17 171.468 14.37C174.678 10.98 178.968 9.285 184.338 9.285C186.558 9.285 188.523 9.915 190.233 11.175C192.063 12.465 193.143 14.205 193.473 16.395C193.563 17.055 193.608 17.76 193.608 18.51C193.608 21.96 192.513 25.185 190.323 28.185C188.223 31.035 185.508 33.075 182.178 34.305C180.378 35.025 178.623 35.385 176.913 35.385ZM176.013 33.54C177.963 33.54 180.078 33.015 182.358 31.965C183.828 31.245 185.178 30.42 186.408 29.49C187.638 28.56 188.733 27.525 189.693 26.385C190.803 25.035 191.643 23.67 192.213 22.29C192.783 20.88 193.068 19.44 193.068 17.97C193.068 17.73 193.053 17.49 193.023 17.25C193.023 16.98 193.008 16.725 192.978 16.485C192.708 14.595 191.673 13.065 189.873 11.895C188.223 10.785 186.378 10.23 184.338 10.23C181.488 10.23 178.923 10.845 176.643 12.075C174.123 13.395 172.278 15.255 171.108 17.655C170.538 18.765 170.253 19.98 170.253 21.3C170.253 21.6 170.283 21.84 170.343 22.02C170.763 21.24 171.288 20.43 171.918 19.59C172.578 18.75 173.358 17.88 174.258 16.98C176.088 15.15 177.738 13.905 179.208 13.245C180.678 12.555 182.028 12.21 183.258 12.21C183.858 12.21 184.158 12.285 184.158 12.435C184.158 12.555 183.843 12.645 183.213 12.705C181.203 12.705 178.818 14.175 176.058 17.115C173.658 19.635 171.933 22.065 170.883 24.405C171.123 24.795 171.378 25.14 171.648 25.44C171.948 25.71 172.263 25.935 172.593 26.115C172.923 26.265 173.088 26.385 173.088 26.475C173.088 26.565 172.998 26.61 172.818 26.61C172.068 26.61 171.288 26.19 170.478 25.35C170.268 26.01 170.103 26.535 169.983 26.925C169.893 27.315 169.848 27.615 169.848 27.825C169.848 31.635 171.903 33.54 176.013 33.54Z" />
                        </svg>
                    </div>
                    {/*top-logo*/}
                </div>
                {!isAuthenticated ? (
                    <div className="col-6">
                        <div className="privacy-login-tab text-end">
                            <Link to="/policy">
                                <a href="#" className="privacy-link">
                                    Privacy
                                </a>
                            </Link>
                            <Link to="/login">
                                <a href="#" className="login-link">
                                    Login
                                </a>
                            </Link>
                        </div>
                        {/*privacy-tab*/}
                    </div>
                ) : (
                    <div className="col-6">
                        <div className="privacy-login-tab text-end">
                            <div
                                className="dropdown user-login blue-icon"
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                <button
                                    type="button"
                                    className="btn dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    style={{
                                        display: "flex",
                                        color: getProfileColor(),
                                    }}
                                    onClick={() => navigate("/profile")}
                                >
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: getProfileColor() }}
                                    >
                                        <path d="M12 3.75C9.075 3.75 6.75 6.075 6.75 9C6.75 10.8281 7.65747 12.4211 9.05273 13.3594C6.38251 14.5105 4.5 17.1702 4.5 20.25H6C6 16.95 8.7 14.25 12 14.25C14.925 14.25 17.25 11.925 17.25 9C17.25 6.075 14.925 3.75 12 3.75ZM12 5.25C14.1 5.25 15.75 6.9 15.75 9C15.75 11.1 14.1 12.75 12 12.75C9.9 12.75 8.25 11.1 8.25 9C8.25 6.9 9.9 5.25 12 5.25ZM18.0747 13.5V15.0747C17.6247 15.1497 17.1753 15.3756 16.8003 15.6006L15.6753 14.4756L14.625 15.5244L15.75 16.6494C15.45 17.0244 15.3006 17.475 15.2256 18H13.5V19.5H15.0747C15.1497 19.95 15.3756 20.4006 15.6006 20.8506L14.4756 21.9756L15.5244 23.0244L16.6494 21.8994C17.0244 22.1244 17.4753 22.3503 17.9253 22.4253V24H19.4253V22.4253C19.8753 22.3503 20.3247 22.1244 20.6997 21.8994L21.8247 23.0244L22.875 21.9756L21.75 20.8506C22.05 20.4756 22.1994 20.025 22.2744 19.5H24V18H22.4253C22.3503 17.55 22.1244 17.0994 21.8994 16.6494L23.0244 15.5244L21.9756 14.4756L20.8506 15.6006C20.4756 15.3756 20.0247 15.1497 19.5747 15.0747V13.5H18.0747ZM18.75 16.5C20.025 16.5 21 17.475 21 18.75C21 20.025 20.025 21 18.75 21C17.475 21 16.5 20.025 16.5 18.75C16.5 17.475 17.475 16.5 18.75 16.5ZM18.75 18C18.6562 18 18.5625 18.0234 18.4746 18.0645C18.3867 18.1055 18.3047 18.1641 18.2344 18.2344C18.1641 18.3047 18.1055 18.3867 18.0645 18.4746C18.0234 18.5625 18 18.6562 18 18.75C18 19.0312 18.2109 19.3125 18.4746 19.4355C18.5625 19.4766 18.6562 19.5 18.75 19.5C19.125 19.5 19.5 19.125 19.5 18.75C19.5 18.375 19.125 18 18.75 18Z" />
                                    </svg>{" "}
                                    Profile
                                </button>
                                {/* <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Logout
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/*row*/}
        </section>
    );
};

export default Header;
