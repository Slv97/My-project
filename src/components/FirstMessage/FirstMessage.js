import { useEffect, useRef } from "react";

import NeonText from "../NeonText/NeonText";
import MyBtn from "../MyBtn/MyBtn";

import s from "./FirstMessage.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const FirstMessage = () => {
    const btnColorGreen = "#00ff00";
    const txtHoverColorGreen = "#168A00";

    const neonColorRed = "245, 30, 30"    
    const neonTxtColorRed = "#ffd4d4";

    const neonColorGreen = "30, 245, 48";
    const neonTxtColorGreen = "#c6ffe2";
    
    const ConnectionLost = useRef();
    const Load = useRef();

    useEffect(() => {
        const timer = setTimeout(function () {
            ConnectionLost.current.style.opacity = "1";
            Load.current.style.opacity = "0";
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div ref={Load} className={s.neonWrapper}>
                <NeonText text={"loading"}  neonColor={neonColorGreen} neonTxtColor={neonTxtColorGreen} /> <Loading />
            </div>

            <div ref={ConnectionLost} className={s.hideBlock} id="hideBlock">
                <div className="neonWrapper">
                    <NeonText text={"sorry, connection lost"} neonColor={neonColorRed} neonTxtColor={neonTxtColorRed} />
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
