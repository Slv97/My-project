import s from "./Welcome.module.css";

const Welcome = ({text}) => {

const letterArray = (text).split('')
const result = letterArray.map((symbol, i)=> (<span key={i} className={s.symbol} style={{'--i':i}}>{symbol}</span>))


    return (
        <div className={s.background}>
            <h2 className={s.wrapper}>
                {result}
            </h2>
        </div>
        
    );
};

export default Welcome;
