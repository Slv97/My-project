import s from "./BluePill.module.css";

import NeonText from "../common/NeonText/NeonText";

const neonColorGreen = "70, 109, 236";
const neonTxtColorGreen = "#c6edff";

const BluePill = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.text}>
                <NeonText
                    text="So, your story ends, you wake up in your bed and believe whatever you want to believe."
                    neonColor={neonColorGreen}
                    neonTxtColor={neonTxtColorGreen}
                />
            </div>
        </div>
    );
};

export default BluePill;
