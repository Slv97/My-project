import {useEffect} from "react";

export default function useTimerForAnimation (ConnectionLost, Load) {
    useEffect(() => {
        const timer = setTimeout(function () {
            ConnectionLost.current.style.opacity = "1";
            Load.current.style.opacity = "0";
        }, 2000);

        return () => clearTimeout(timer);
    }, [Load, ConnectionLost]);
}