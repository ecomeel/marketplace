import { Adjuster } from "./adjuster/Adjuster";

import styles from "./adjustment.module.scss";
export function Adjustment() {
  return (
    <section className={styles.adjustment}>
      <Adjuster title="Price Range" from="234" to="9999" type="$" />
      <Adjuster title="THC, %" from="0" to="100" type="%" />
      <Adjuster title="CBD, %" from="0" to="100" type="%" />
    </section>
  );
}
