import { useEffect, useState } from "react";
import Dialog from "../Dialog/Dialog";
import Modal from "../Modal/Modal";
import ScreensaverMatrix from "../ScreensaverMatrix/ScreensaverMatrix";
import SmallSlider from "../SmallSlider/SmallSlider";
import s from "./ConectPage.module.css";

const ConectPage = () => {
    const [modalActive, setModalActive] = useState(false);

    const phraseOne =
        "Oh, we did it! The connection continues to be unstable, but we did it! I still can't believe it...";
    const phraseTwo =
        "No time to waste. You don't know what it is, but it's there, like a splinter in your mind, driving you mad. Follow the rabbit!";

    useEffect(() => {
        const timer = setTimeout(function () {
            setModalActive(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <ScreensaverMatrix>
                <Modal active={modalActive} setActive={setModalActive}>
                    <SmallSlider>
                        <div className={s.smallSlider}>
                            <Dialog text={phraseOne} />
                        </div>
                        <div className={s.smallSlider}>
                            <Dialog text={phraseTwo} />
                        </div>
                    </SmallSlider>
                </Modal>
            </ScreensaverMatrix>
        </div>
    );
};

export default ConectPage;
