import { Adjuster } from "./adjuster/Adjuster";
import styles from "./adjustment.module.scss";
export function Adjustment() {
  return (
    <section className={styles.adjustment}>
      <Adjuster />
      <Adjuster />
      <Adjuster />
    </section>
  );
}
