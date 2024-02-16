import styles from "./header.module.scss";
import loopIcon from "/src/assets/img/icons/search.png";
export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Marketplace</h1>
      <div className={styles.search}>
        <img className={styles.search__img} src={loopIcon} alt="loop" />
        <input
          className={styles.search__input}
          placeholder="Search for a product, flower, etc"
          type="text"
        />
      </div>
    </header>
  );
}
