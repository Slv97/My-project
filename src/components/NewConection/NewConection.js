import { useRef } from "react";
import { Link } from "react-router-dom";
import s from "./NewConection.module.css";

import Loading from "../Loading/Loading";
import GlitchText from "../common/GlitchEffects/GlitchText/GlitchText";
import useTimerForAnimation from "../../utils/useTimerForAnimation";
import GlitchBackground from "../common/GlitchEffects/GlitchBackground/GlitchBackground";

const NewConection = () => {
    const ConnectionLost = useRef();
    const Load = useRef();

    useTimerForAnimation(ConnectionLost, Load);

    return (
        <div>
            <GlitchBackground>
                <div ref={Load}>
                    <Loading />
                </div>

                <div ref={ConnectionLost} className={s.hideBlock}>
                    <Link to="/conect">
                        <GlitchText text="..try again.." />
                    </Link>
                </div>
            </GlitchBackground>
        </div>
    );
};

export default NewConection;
