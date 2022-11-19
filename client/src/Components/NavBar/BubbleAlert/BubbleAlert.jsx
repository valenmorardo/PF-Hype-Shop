import React from "react";


const BubbleAlert = ({ value }) => {
    const getNumber = (n) => {
        if (!n) {
            return ""
        } return n > 9 ? "9+" : n;
    }
    return (
        <span className="bg-">
            {getNumber(value)}
        </span>

    )
}

export default BubbleAlert;