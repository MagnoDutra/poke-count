import Card from "./Card";
import styles from "./Binder.module.css";

function Binder({ cards, handleAcquireCard }) {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card card={card} key={card.id} handleAcquireCard={handleAcquireCard} />
      ))}
    </div>
  );
}

export default Binder;
