
import React, { useState } from 'react';

function MyAlert({ message, onClose, type }) {
    const [show, setShow] = useState(true); // Default to showing

    const handleClose = () => {
        onClose && onClose(); 
        setShow(false);
    };

    return (
        <div className={`my-alert ${type}`}>
            <p>{message}</p>
            <button onClick={handleClose}>Close</button>
        </div>
    );
}

function MyComponent() {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
    };

    const handleClose = () => setShowAlert(false);

    return (
        <div>
            
            <button onClick={handleClick}>Show Alert</button>
            {showAlert && <MyAlert message="My custom alert!" onClose={handleClose} type="info" />}
            <div className='box'>
                <h2>Hellwo there</h2>
                <p>
                    adjkdh
                    sdakdlkja
                    adslajsdak
                    as;dsaasjksad
                </p>
            </div>
        </div>
    );
}

export default MyComponent;
