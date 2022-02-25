import s from "./NeonText.module.css";

const NeonText = ({ text, neonColor, neonTxtColor }) => {
    return (
        <div
            className={s.background}
            style={{ "--neonColor": neonColor, "--neonTxtColor": neonTxtColor }}
        >
            <h2 className={s.wrapper}>
                <span className={s.text}>{text}</span>
            </h2>
        </div>
    );
};

export default NeonText;
