import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import s from "./NewConection.module.css";

import Loading from "../Loading/Loading";
import GlitchText from "../common/GlitchText/GlitchText";

const NewConection = () => {

    const ConnectionLost = useRef();
    const Load = useRef();

    useEffect(() => {
        const timer = setTimeout(function () {
            ConnectionLost.current.style.opacity = "1";
            Load.current.style.opacity = "0";
        }, 2000);

        return () => clearTimeout(timer);
    }, [Load, ConnectionLost]);

    return (
        <div>
            <div ref={Load}>
                <Loading />
            </div>

            <div ref={ConnectionLost} className={s.hideBlock}>
                <Link to="/connect" >
                     <GlitchText text="..try again.." />
                </Link>
            </div>
           
        </div>
    );
};

export default NewConection;
