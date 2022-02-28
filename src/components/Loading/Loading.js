import s from "./Loading.module.css";

import NeonText from "../common/NeonText/NeonText";

const Loading = () => {
    const neonColorGreen = "30, 245, 48";
    const neonTxtColorGreen = "#c6ffe2";
    
    return (
        <div className={s.neonWrapper}>
            <NeonText
                text={"loading"}
                neonColor={neonColorGreen}
                neonTxtColor={neonTxtColorGreen}
            />
            <span className={s.loading}>...</span>
        </div>
    );
};

export default Loading;
