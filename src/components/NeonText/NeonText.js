import s from './NeonText.module.css'

const NeonText = ({text}) => {
    // const letterArray = text.split('')
    // const result = letterArray.map(s)
    return (
        <div className={s.background}>
            <h2 className={s.wrapper}>
                <span className={s.text}>{text}</span>
            </h2>
        </div>
    )
}

export default NeonText