import { useState } from "react";
import s from "./MemoryGame.module.css";

const MemoryCard = () => {
    const test = [
        {
            value: 0,
            img: `../../assets/images/memoryGame/rabbit.jpg`,
        },
        {
            value: 1,
            img: `../../assets/images/memoryGame/wall5.jpg`,
        },
    ];

    // const [card, setCard] = useState({value: null})
    const [thisCard, setThisCard] = useState(false);
    const flipCard = () => {
        setThisCard(true) ? setThisCard(false) : setThisCard(true);
        // setCard({value: 'x'})
    };

    // const flip = thisCard ? `${s.memoryCard}` : `${s.memoryCard} ${s.flip}`
    const flip = thisCard ? `${s.memoryCard} ${s.flip}` : `${s.memoryCard}`;

    return (
        <div className={flip} onClick={flipCard}>
            <img
                className={s.frontFace}
                src={require(`../../assets/images/memoryGame/rabbit.jpg`)}
                // src={require(`../../assets/images/wall5.jpg`)}
                alt="rabbit"
            ></img>
            <img
                className={s.backFace}
                src={require(`../../assets/images/wall6.jpg`)}
                alt="back"
            ></img>
            {/* {card.value} */}
        </div>
    );
};

const MemoryGame = () => {
    const renderCard = (i) => {
        return <MemoryCard value={i} />;
    };

    return (
        <div className={s.wrapper}>
            <div className={s.memoryGame}>
                {renderCard(0)}
                {renderCard(1)}
                {renderCard(2)}
                {renderCard(3)}
                {renderCard(4)}
                {renderCard(5)}
            </div>
        </div>
    );
};

export default MemoryGame;
