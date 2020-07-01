import React, { useState, useEffect, Fragment } from "react";
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

const CounterOne = () => {
    const [timeState, setTimeState] = useState({ });
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    useEffect(() => {
        startCountdown()
    }, [])

    const startCountdown = (countdown = "Sep 15, 2020 12:00:00") => {
        // Set the date we're counting down to
        const countDownDate = new Date(countdown).getTime();

        // Update the count down every 1 second
        setInterval(() => {
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeState({ days, hours, minutes, seconds })
        }, 1000);
    }

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true)
        }
    }

    const { days, hours, minutes, seconds } = timeState
    const Data = [
        {
            countNum: days,
            countTitle: 'DAYS',
        },
        {
            countNum: hours,
            countTitle: 'HOURS',
        },
        {
            countNum: minutes,
            countTitle: 'MINUTES',
        }
    ];

    return (
        <Fragment>
            <div className="row">
                {Data.map((value, index) => (
                    <div className="counterup_style--1 col-lg-4 col-md-4 col-sm-12" key={index}>
                        <h5 className="counter">
                            <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
                                <CountUp end={didViewCountUp ? value.countNum : 0} />
                            </VisibilitySensor>
                        </h5>
                        <p className="description">{value.countTitle}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}
export default CounterOne;