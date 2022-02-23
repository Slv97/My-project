import { useState, useEffect, useRef } from "react";
import s from "./MemoryGame.module.css";
import imgRabbit from "../../assets/images/memoryGame/rabbit.jpg";
import imgEmpty from "../../assets/images/wall5.jpg";
import imgBack from "../../assets/images/wall6.jpg";

const MemoryCard = ({ value, img, description, click , onClick, ...props }) => {   
   
    const [thisCard, setThisCard] = useState(click);
    const flipCard = () => {
        click ? setThisCard(false) : setThisCard(true);
    };
    const flip = thisCard ? `${s.memoryCard} ${s.flip}` : `${s.memoryCard}`;

    

    return (
        <div className={flip} onClick={flipCard}>
            <img className={s.frontFace} src={img} alt={description}></img>
            <img className={s.backFace} src={imgBack} alt="back"></img>
        </div>
    );
};

const MemoryGame = () => {
    const test = [
        {
            value: 0,
            img: imgRabbit,
            description: "rabbit",
            click: false,
        },
        {
            value: 1,
            img: imgEmpty,
            description: "empty",
            click: false,
        },
        {
            value: 2,
            img: imgEmpty,
            description: "empty",
            click: false,
        },
        {
            value: 3,
            img: imgEmpty,
            description: "empty",
            click: false,
        },
        {
            value: 4,
            img: imgEmpty,
            description: "empty",
            click: false,
        },
        {
            value: 5,
            img: imgRabbit,
            description: "rabbit",
            click: false,
        },
    ];

    const  [on, setOn] = useState(false)

    useEffect(() => {
        let testNew = test.slice()
        setOn(true)
        testNew.click=on
    }, [])  

    
    
    let memoryCardElement = test.map((el, i) => {    
        return (
            <MemoryCard
                key={i}
                value={el.value}
                img={el.img}
                description={el.description}
                click={el.click}
                onClick={() => setOn(true)}
                
            />
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={s.memoryGame}>{memoryCardElement}</div>
        </div>
    );
};

export default MemoryGame;
