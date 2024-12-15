import styles from "./Tab.module.css";

function Tab() {
  return (
    <ul className={styles.tab}>
      <li>
        <button>Deck</button>
      </li>
      <li>
        <button>Mew</button>
      </li>
    </ul>
  );
}

export default Tab;
