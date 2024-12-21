import Card from "./Card";
import styles from "./Binder.module.css";
import { useCards } from "../contexts/CardsContext";

function Binder() {
  const { cards } = useCards();

  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Binder;
