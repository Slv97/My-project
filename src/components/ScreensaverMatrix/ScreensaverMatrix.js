import { useEffect, useState, useRef } from "react";
import s from "./ScreensaverMatrix.module.css";

const ScreensaverMatrix = () => {
    const [size, setSize] = useState({
        x: window.innerWidth,
        y: window.innerHeight,
    });

    const updateSize = () =>
        setSize({
            x: window.innerWidth,
            y: window.innerHeight,
        });

    useEffect(() => (window.onresize = updateSize), []);

    const canvas = useRef();
    const [style, setStyle] = useState({});

    useEffect(() => {
        setStyle({
            ctx: canvas.current.getContext("2d"),
            x: canvas.current.width,
            y: canvas.current.height
        });
    }, [canvas.current]);

    console.log("canvas", style.ctx);

    const w = (style.x = size.x);
    const h = (style.y = size.y);
    const ctx = style.ctx;

    const p = Array(Math.floor(w / 10) + 1).fill(0);

    const random = (items) => items[Math.floor(Math.random() * items.length)];

    const hex = "0123456789ABCDEF".split("");

    useEffect(() => {
        const t = setInterval(() => {
            ctx.fillStyle = "rgba(0,0,0,.05)";
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = "#0f0";
            p.map((v, i) => {
                ctx.fillText(random(hex), i * 10, v);
                p[i] = v >= h || v > 50 + 10000 * Math.random() ? 0 : v + 10;
            });
        }, 1000 / 30);
        return () => clearInterval(t);
    }, [ctx.fillStyle]);

    return (
        <div className={s.wrap}>
            <canvas ref={canvas} width={style.x} height={style.y} />
            <p className={s.test}>width is : {size.x}</p>
            <p className={s.test}>height is : {size.y}</p>
            <p className={s.test}>canvas width is : {style.x}</p>
            <p className={s.test}>canvas height is : {style.y}</p>
        </div>
    );
};

export default ScreensaverMatrix;
