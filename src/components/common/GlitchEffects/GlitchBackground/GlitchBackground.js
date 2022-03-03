import s from "./GlitchBackground.module.css";

const GlitchBackground = ({ children }) => {
    return (
        <div className={s.glitch}>
            <div className={s.glitchLayers}>
                <div className={s.glitchLayer}></div>
                {children}
            </div>
        </div>
    );
};

export default GlitchBackground;
