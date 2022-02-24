import { useEffect, useRef, useState } from "react";

import NeonText from "../NeonText/NeonText";
import MyBtn from "../MyBtn/MyBtn";

import s from "./FirstMessage.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const FirstMessage = () => {
    const btnColorGreen = "#00ff00";
    const txtHoverColorGreen = "#168A00";

    const neonColorRed = "245, 30, 30";
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

    const [clickCount, setClick] = useState(0);
    const [test, setTest] = useState(false);

    const handleMouseUp = () => {
        console.log("event");
        if (clickCount > 1) {
            console.log("event1");
            setTest(true);
        }
        // setTest(false);
        setClick(clickCount + 1);
        console.log("event2");
        Load.current.style.opacity = "1";
        ConnectionLost.current.style.opacity = "0";
    };

    return (
        <div>
            <div ref={Load} className={s.neonWrapper}>
                <NeonText
                    text={"loading"}
                    neonColor={neonColorGreen}
                    neonTxtColor={neonTxtColorGreen}
                />{" "}
                <Loading />
            </div>

            <div ref={ConnectionLost} className={s.hideBlock} id="hideBlock">
                <div className="neonWrapper">
                    <NeonText
                        text={"sorry, connection lost"}
                        neonColor={neonColorRed}
                        neonTxtColor={neonTxtColorRed}
                    />
                </div>

                {test ? (
                    <Link to="/conect" className="myBtnWrapper linkBtn">
                        <MyBtn
                            text={"..try again.."}
                            btnColor={btnColorGreen}
                            txtHoverColor={txtHoverColorGreen}
                            onClick={handleMouseUp}
                        />
                    </Link>
                ) : (
                    <Link to="/one" className="myBtnWrapper linkBtn">
                        <MyBtn
                            text={"..try again.."}
                            btnColor={btnColorGreen}
                            txtHoverColor={txtHoverColorGreen}
                            onClick={handleMouseUp}
                        />
                    </Link>
                )}
            </div>
        </div>
    );
};
export default FirstMessage;
