import s from "./MyBtn.module.css";

const MyBtn = ({text, btnColor, txtHoverColor, children, ...props}) => {
    
    return (
        <div className={s.wrapper} style={{'--btnColor': btnColor, '--txtHoverColor': txtHoverColor}}>
            <div onClick={props.onClick} className={s.btn}>
                <div className={s.border}></div>
                <div className={s.border}></div>
                <div className={s.border}></div>
                <div className={s.border}></div>
                {text} {children}
            </div>
        </div>
    );
};

export default MyBtn;