import styles from "./ResultPack.module.css";

function ResultPack({ pack, newCardChance }) {
  return (
    <div className={styles.container}>
      <img src={`${pack}_pack_icon.png`} />
      <span>{newCardChance}%</span>
    </div>
  );
}

export default ResultPack;
