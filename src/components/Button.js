import React from "react";
import "./components.css"
const Button = ({
    buttonText,
    className,
    style
}) => {
    return (
        <div>
            <button
                style={{ style }}
                className={className || "primary-btn"}
            >{buttonText}</button>
        </div>
    )

}
export default Button