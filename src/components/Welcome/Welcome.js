import s from "./Welcome.module.css";

const Welcome = ({text}) => {

console.log(text)

const test = ['t', 'e']
const result = test.map((l)=> <span className={s.symbol} style={{'--i':'1'}}>{l}</span>)


    return (
        <div className={s.background}>
            <h2 className={s.wrapper}>
                {result}
                <span className={s.symbol} style={{'--i':'1'}}>W</span>
                <span className={s.symbol} style={{'--i':'2'}}>e</span>
                <span className={s.symbol} style={{'--i':'3'}}>l</span>
                <span className={s.symbol} style={{'--i':'4'}}>c</span>
                <span className={s.symbol} style={{'--i':'5'}}>o</span>
                <span className={s.symbol} style={{'--i':'6'}}>m</span>
                <span className={s.symbol} style={{'--i':'7'}}>e</span> 
            </h2>
        </div>
        
    );
};

export default Welcome;
