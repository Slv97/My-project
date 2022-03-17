import s from "./BluePill.module.css";

import NeonText from "../common/NeonText/NeonText";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyBtn from "../common/MyBtn/MyBtn";

const neonColorGreen = "70, 109, 236";
const neonTxtColorGreen = "#c6edff";

const btnColorYellow = "#fbff00";
const txtHoverColorYellow = "#818a00";

const BluePill = () => {
    // const dispatch = useDispatch()
    // const cash = useSelector(state => state.cash)

    // const addCash = (cash) => {
    //     dispatch({type: "ADD_C", payload: 5})
    // }

    // const getCash = (cash) => {
    //     dispatch({type: "GET_C", payload: 5})
    // }

    return (
        <div className={s.wrapper}>
            <div className={s.text}>
                <NeonText
                    text="So, your story ends, you wake up in your bed and believe whatever you want to believe."
                    neonColor={neonColorGreen}
                    neonTxtColor={neonTxtColorGreen}
                />
            </div>
            <div className={s.btn}>
                <Link to="/" className="myBtnWrapper linkBtn">
                    <MyBtn
                        text={"..once more.."}
                        btnColor={btnColorYellow}
                        txtHoverColor={txtHoverColorYellow}
                    />
                </Link>
            </div>

            {/* <div>
                <span style={{color: 'red'}}>{cash}</span>
                <button onClick={() => addCash()}>+</button>
                <button onClick={() => getCash()}>-</button>
            </div> */}
        </div>
    );
};

export default BluePill;
