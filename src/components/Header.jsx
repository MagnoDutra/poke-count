import styles from "./Header.module.css";

function Header({ children }) {
  return (
    <header className={styles.container}>
      <h1>Pokemon Calculator</h1>
      {children}
    </header>
  );
}

export default Header;
