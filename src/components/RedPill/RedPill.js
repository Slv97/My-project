import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import s from "./RedPill.module.css";

import Loading from "../Loading/Loading";
import NeonText from "../common/NeonText/NeonText";
import MyBtn from "../common/MyBtn/MyBtn";

const RedPill = () => {
    const btnColorGreen = "#00ff00";
    const txtHoverColorGreen = "#168A00";

    const neonColorRed = "245, 30, 30";
    const neonTxtColorRed = "#ffd4d4";

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
                <div className="neonWrapper">
                    <NeonText
                        text={"sorry, connection lost"}
                        neonColor={neonColorRed}
                        neonTxtColor={neonTxtColorRed}
                    />
                </div>
                <Link to="/newConection" className="myBtnWrapper linkBtn">
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

export default RedPill;
