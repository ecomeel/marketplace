import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import styles from "./adjuster.module.scss";
export function Adjuster({ id, title, from, to, type }) {
  const sliderNode = document.getElementById(`slider${id}`);
  if (sliderNode) {
    noUiSlider.create(sliderNode, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  }

  return (
    <div className={styles.adjuster}>
      <p className={styles.title}>{title}</p>
      <div className={styles.slider}>
        <RangeSlider defaultValue={[from, to]} min={from} max={to} />
      </div>
      <div className={styles.inputs}>
        <input
          className={styles.input}
          placeholder={`${from} ${type}`}
          type="number"
          id=""
        />
        <input
          className={styles.input}
          placeholder={`${to} ${type}`}
          type="number"
          id=""
        />
      </div>
    </div>
  );
}
