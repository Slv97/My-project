import "./App.css";
import MyBtn from "./components/MyBtn/MyBtn";
import NeonText from "./components/NeonText/NeonText";
import Welcome from "./components/Welcome/Welcome";

function App() {
    const handleClick = () => {
        console.log("click");
    };

    const btnColorTurquoise = "#05EEFF";
    const txtHoverColorTurquoise = "#038296";

    const btnColorRed = "#F13806";
    const txtHoverColorRed = "#691801";

    return (
        <div className="content">
            {/* <Welcome text='Andy' /> */}
            <div className="neonWrapper">
                {/* <NeonText text="Welcome" />
                <NeonText text="to" />
                <NeonText text="new reality" /> */}
                <NeonText text="Welcome" />
                <NeonText text="it's time" />
                <NeonText text="to" />
                <NeonText text="make choice" />
            </div>
            <div className="myBtnWrapper">
                <div className="firstBtn">
                    <MyBtn
                        // text={"leave the matrix"}
                        text={"..red pill.."}
                        btnColor={btnColorRed}
                        txtHoverColor={txtHoverColorRed}
                        onClick={handleClick}
                    />
                </div>

                <MyBtn
                    // text={"stay in the matrix"}
                    text={"..blue pill.."}
                    btnColor={btnColorTurquoise}
                    txtHoverColor={txtHoverColorTurquoise}
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}

export default App;
