import { useState, useEffect, useRef } from "react";
import s from "./MemoryGame.module.css";
import imgRabbit from "../../assets/images/memoryGame/rabbit.jpg";
import imgEmpty from "../../assets/images/wall5.jpg";
import imgBack from "../../assets/images/wall6.jpg";
import MyBtn from "../MyBtn/MyBtn";

const MemoryCard = ({ value, img, description, click, onClick, ...props }) => {
    const btnColorGreen = "#00ff00";
    const txtHoverColorGreen = "#168A00";

    const [show, setShow] = useState(false);

    const [thisCard, setThisCard] = useState(click);
    const flipCard = () => {
        click ? setThisCard(false) : setThisCard(true);
    };
    const flip = thisCard ? `${s.memoryCard} ${s.flip}` : `${s.memoryCard}`;

    const rootEl = useRef(null);

    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || console.log('клик вне компонента');
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
      }, []);

    function handleMouseUp(event) {
        
        if (
            event.target.previousElementSibling.attributes.alt.textContent ===
            "rabbit"
        ) {
            setShow(true);
            console.log("rabbit");
        } 
    }

    return (
        <>
            <div className={flip} onClick={flipCard} onMouseUp={handleMouseUp} ref={rootEl}>
                <img className={s.frontFace} src={img} alt={description}></img>
                <img className={s.backFace} src={imgBack} alt="back"></img>
            </div>
            {show && (
                <div className={s.wrapBtn}>
                    <MyBtn
                        btnColor={btnColorGreen}
                        txtHoverColor={txtHoverColorGreen}
                    >
                        <a
                            className={s.link}
                            href="https://github.com/Slv97/My-project"
                        >
                            ..exit..
                        </a>
                    </MyBtn>
                </div>
            )}
        </>
    );
};

const MemoryGame = () => {
    const test = [
        {
            value: 0,
            img: imgEmpty,
            description: "empty",
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

    let memoryCardElement = test.map((el, i) => {
        return (
            <MemoryCard
                key={i}
                value={el.value}
                img={el.img}
                description={el.description}
                click={el.click}
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
