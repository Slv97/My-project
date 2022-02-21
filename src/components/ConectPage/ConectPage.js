import { useState } from "react";
import Dialog from "../Dialog/Dialog";
import Modal from "../Modal/Modal";
import SmallSlider from "../SmallSlider/SmallSlider";
import s from "./ConectPage.module.css";

const ConectPage = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <div>
            <Modal active={modalActive} setActive={setModalActive}>                

                <SmallSlider>
                    <div className={s.smallSlider}>
                        <Dialog />
                    </div>
                    <div className={s.smallSlider}>
                        <Dialog />
                    </div>
                </SmallSlider>
            </Modal>
        </div>
    );
};

export default ConectPage;