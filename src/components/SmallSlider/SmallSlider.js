import React from "react";
import { useEffect, useState, Children, cloneElement } from "react";
import s from "./SmallSlider.module.css";

const PAGE_WIDTH = 566;

const SmallSlider = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasClass, setHasClass] = useState(true);

    const handleLeftAroowClick = () => {
        setHasClass(true) ? setHasClass(false) : setHasClass(true);
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        });
    };

    const handleRightAroowClick = () => {
        setHasClass(false) ? setHasClass(true) : setHasClass(false);
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            return Math.max(newOffset, maxOffset);
        });
    };

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: "100%",
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                });
            })
        );
    }, [children]);

    return (
        <div>
            <div className={s.mainContainer}>
                <div className={s.window}>
                    <div
                        className={s.allPagesContainer}
                        style={{
                            transform: `translateX(${offset}px)`,
                        }}
                    >
                        {pages}
                    </div>
                </div>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.arrowR} onClick={handleLeftAroowClick}>
                    &#8249;
                </button>

                <button className={hasClass ? s.pointActive : s.point}></button>
                <button className={hasClass ? s.point : s.pointActive}></button>

                <button className={s.arrowL} onClick={handleRightAroowClick}>
                    &#8250;
                </button>
            </div>
        </div>
    );
};

export default SmallSlider;
