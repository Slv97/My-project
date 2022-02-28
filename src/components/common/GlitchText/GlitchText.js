import s from "./GlitchText.module.css";

const GlitchText = ({ text }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.glitch}>
                <span araia-hidden="true">{text}</span>
                <span>{text}</span>
                <span araia-hidden="true">{text}</span>
            </div>
        </div>
    );
};

export default GlitchText;
