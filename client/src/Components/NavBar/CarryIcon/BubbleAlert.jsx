import React from "react";


const BubbleAlert = ({ value }) => {
    const getNumber = (n) => {
        if (!n) {
            return ""
        } return n > 9 ? "9+" : n;
    }
    return (
        <span className="bg-[#f15a24] rounded-xl text-white py-[2px] px-[7px] text-[12px] w-5">
            {getNumber(value)}
        </span>

    )
}

export default BubbleAlert;