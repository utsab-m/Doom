import LinearProgress from "@mui/material/LinearProgress"
import React, { useState } from "react";

export const TimerComponent = ({ time, totalTime, rate }) => {
    const [percentLeft, setPercentLeft] = useState(time / totalTime);

    const intervalId = setInterval(() => {
        if (percentLeft > 0) {
            percentLeft -= rate * 100;
        } else {
            clearInterval(intervalId);
        }
    }, 100)

    return <>
        <LinearProgress 
            variant='determinate'
            value={percentLeft}
        />
    </>
}