import { useState, useRef } from "react";
import s from "./FindCardGame.module.css";
import Image from "react-image-webp";
import imgRabbitSrc from "../../assets/images/rabbit.jpg";
import imgRabbitWebpSrc from "../../assets/images/webp/rabbit.webp";
import imgEmptySrc from "../../assets/images/wall5.jpg";
import imgEmptyWebpSrc from "../../assets/images/webp/wall5.webp";

import MyBtn from "../common/MyBtn/MyBtn";

const FindCard = ({
    value,
    img,
    imgWebp,
    description,
    click,
    onClick,
    ...props
}) => {
    const btnColorGreen = "#00ff00";
    const txtHoverColorGreen = "#168A00";

    const [show, setShow] = useState(false);

    const [thisCard, setThisCard] = useState(click);
    const flipCard = () => {
        click ? setThisCard(false) : setThisCard(true);
    };
    const flip = thisCard ? `${s.findCard} ${s.flip}` : `${s.findCard}`;

    const rootEl = useRef(null);

    function handleMouseUp(event) {
        if (
            event.target.previousElementSibling.attributes.alt.textContent ===
            "rabbit"
        ) {
            setShow(true);
        }
    }

    return (
        <>
            <div
                className={flip}
                onClick={flipCard}
                onMouseUp={handleMouseUp}
                ref={rootEl}
            >
                <Image
                    src={img}
                    webp={imgWebp}
                    className={s.frontFace}
                    alt={description}
                />
                
                <Image
                    src={require("../../assets/images/wall6.jpg")}
                    webp={require("../../assets/images/webp/wall6.webp")}
                    className={s.backFace}
                    alt="back"
                />
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

const FindCardGame = () => {
    const imgEmpty = imgEmptySrc;
    const imgEmptyWebp = imgEmptyWebpSrc;
    const imgRabbit = imgRabbitSrc;
    const imgRabbitWebp = imgRabbitWebpSrc;

    const cards = [
        {
            value: 0,
            img: imgEmpty,
            imgWebp: imgEmptyWebp,
            description: "empty",
            click: false,
        },
        {
            value: 1,
            img: imgEmpty,
            imgWebp: imgEmptyWebp,
            description: "empty",
            click: false,
        },
        {
            value: 2,
            img: imgEmpty,
            imgWebp: imgEmptyWebp,
            description: "empty",
            click: false,
        },
        {
            value: 3,
            img: imgEmpty,
            imgWebp: imgEmptyWebp,
            description: "empty",
            click: false,
        },
        {
            value: 4,
            img: imgEmpty,
            imgWebp: imgEmptyWebp,
            description: "empty",
            click: false,
        },
        {
            value: 5,
            img: imgRabbit,
            imgWebp: imgRabbitWebp,
            description: "rabbit",
            click: false,
        },
    ];

    let findCardElement = cards.map((el, i) => {
        return (
            <FindCard
                key={i}
                value={el.value}
                img={el.img}
                imgWebp={el.imgWebp}
                description={el.description}
                click={el.click}
            />
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={s.findCardGame}>{findCardElement}</div>
        </div>
    );
};

export default FindCardGame;
