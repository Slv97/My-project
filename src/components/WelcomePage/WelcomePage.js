import { Link } from "react-router-dom";
import "./WelcomePage.css";

import MyBtn from "../common/MyBtn/MyBtn";
import NeonText from "../common/NeonText/NeonText";

function WelcomePage() {

    const btnColorTurquoise = "#05EEFF";
    const txtHoverColorTurquoise = "#038296";

    const btnColorRed = "#F13806";
    const txtHoverColorRed = "#691801";

    const neonColorGreen = "30, 245, 48";
    const neonTxtColorGreen = "#c6ffe2";

    return (
        <div>
            <div className="neonWrapper">
                <NeonText
                    text="Welcome"
                    neonColor={neonColorGreen}
                    neonTxtColor={neonTxtColorGreen}
                />
                <NeonText
                    text="it's time"
                    neonColor={neonColorGreen}
                    neonTxtColor={neonTxtColorGreen}
                />
                <NeonText
                    text="to"
                    neonColor={neonColorGreen}
                    neonTxtColor={neonTxtColorGreen}
                />
                <NeonText
                    text="make choice"
                    neonColor={neonColorGreen}
                    neonTxtColor={neonTxtColorGreen}
                />
            </div>

            <div className="myBtnWrapper">
                <Link to="/redPill" className="firstBtn linkBtn">
                    <MyBtn
                        text={"..red pill.."}
                        btnColor={btnColorRed}
                        txtHoverColor={txtHoverColorRed}
                    />
                </Link>

                <Link to="/bluePill" className="linkBtn">
                    <MyBtn
                        text={"..blue pill.."}
                        btnColor={btnColorTurquoise}
                        txtHoverColor={txtHoverColorTurquoise}
                    />
                </Link>
            </div>
        </div>
    );
}

export default WelcomePage;
