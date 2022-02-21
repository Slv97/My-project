import s from "./Dialog.module.css";

const Dialog = ({text}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.photo}></div>
            <div className={s.text}>{text}</div>
        </div>
    );
};

export default Dialog;