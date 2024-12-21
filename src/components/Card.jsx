import { useCards } from "../contexts/CardsContext";
import styles from "./Card.module.css";

function Card({ card }) {
  const { handleAcquireCard } = useCards();

  return (
    <div onClick={() => handleAcquireCard(card.id)} className={styles.card}>
      <img
        src={`cards/card_${card.cardName}_01.png`}
        className={card.acquired ? "" : styles.notAcquired}
      />
    </div>
  );
}

export default Card;
