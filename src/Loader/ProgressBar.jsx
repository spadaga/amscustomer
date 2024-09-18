import React from 'react';
import './ProgressBar.css'; // Assuming your CSS is stored in a separate file

const ProgressBar = () => {
    return (
        <div className="progress-bar-overlay">
            <div className="loader">
                <div className="loader__icon_container">
                    <div className="loader__icon">
                        <span className="loader__line loader__line_1"></span>
                        <span className="loader__line loader__line_2"></span>
                        <span className="loader__line loader__line_3"></span>
                    </div>
                </div>
                <p className="text-heading-small loader__text">Loading content, please wait.</p>
            </div>
        </div>
    );
};

export default ProgressBar;
