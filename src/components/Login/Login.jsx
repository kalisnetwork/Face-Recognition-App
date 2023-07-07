import React from 'react';
import { FaCamera } from 'react-icons/fa';
import './Login.css';

function Login({ onCameraClick }) {
    return (
        <div className="login-container">
            <h2 className="login-heading">Face Detection</h2>
            <div className="camera-icon-container" onClick={onCameraClick}>
                <FaCamera className="camera-icon" />
            </div>
            {/* Additional login form elements */}
        </div>
    );
}

export default Login;
