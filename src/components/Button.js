import React from "react";

const STYLES = ["btn-primary", "btn-outline"];
const SIZES = ["btn-medium", "btn-large", "btn-mobile", "btn-wide"];
const COLORS = ["primary", "blue", "red", "green"];

const Button = (children, type, onClick, btnStyle, btnSize, btnColor) => {
    const pickedStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
    const pickedSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
    const pickedColor = COLORS.includes(btnColor) ? btnColor : COLORS[0];

    return (
        <button
            className={`btn ${pickedStyle} ${pickedSize} ${pickedColor}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
