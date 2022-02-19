import { useEffect, useRef } from "react";

import NeonText from "../NeonText/NeonText";
import MyBtn from "../MyBtn/MyBtn";

import s from "./FirstMessage.module.css";
import { Link } from "react-router-dom";

const FirstMessage = () => {
    const btnColorGreen = "#00ff00";
    const txtHoverColorGreen = "#168A00";

    const myContainer = useRef();

    useEffect(() => {
        const timer = setTimeout(function () {
            myContainer.current.style.opacity = "1";
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="neonWrapper">
                <NeonText text={"please, wait loading..."} />
            </div>

            <div ref={myContainer} className={s.hideBlock} id="hideBlock">
                <div className="neonWrapper">
                    <NeonText text={"sorry, your connection lost..."} />
                </div>
                <Link to="/" className="myBtnWrapper linkBtn">
                    <MyBtn
                        text={"..try again.."}
                        btnColor={btnColorGreen}
                        txtHoverColor={txtHoverColorGreen}
                    />
                </Link>
            </div>
        </div>
    );
};
export default FirstMessage;
