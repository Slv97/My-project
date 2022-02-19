import { Link } from "react-router-dom";

import "./WelcomePage.css";

import MyBtn from "../MyBtn/MyBtn";
import NeonText from "../NeonText/NeonText";

function WelcomePage() {
    const handleClick = () => {
        console.log("click");
        //<Navigate to={"/one"} />
    };

    const btnColorTurquoise = "#05EEFF";
    const txtHoverColorTurquoise = "#038296";

    const btnColorRed = "#F13806";
    const txtHoverColorRed = "#691801";

    return (
        <div>
            <div className="neonWrapper">
                <NeonText text="Welcome" />
                <NeonText text="it's time" />
                <NeonText text="to" />
                <NeonText text="make choice" />
            </div>

            <div className="myBtnWrapper">
                <Link to="/one" className="firstBtn linkBtn">
                    <MyBtn
                        text={"..red pill.."}
                        btnColor={btnColorRed}
                        txtHoverColor={txtHoverColorRed}
                        onClick={handleClick}
                    />
                </Link>

                <Link to="/two" className="linkBtn">
                    <MyBtn
                        text={"..blue pill.."}
                        btnColor={btnColorTurquoise}
                        txtHoverColor={txtHoverColorTurquoise}
                        onClick={handleClick}
                    />
                </Link>
            </div>
        </div>
    );
}

export default WelcomePage;
