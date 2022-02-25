import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "modal active" : "modal"}>
            <div className={active ? "modalContent active" : "modalContent"}>
                <Link to="/findCardGame" className="linkBtn">
                    <div
                        className="btnClose"
                        onClick={() => {
                            setActive(false);
                        }}
                    >
                        &#10006;
                    </div>
                </Link>
                {children}
            </div>
        </div>
    );
};

export default Modal;
