import styles from "./Card.module.css";

function Card({ card, handleAcquireCard }) {
  return (
    <div onClick={() => handleAcquireCard(card.id)} className={styles.card}>
      <img
        src="card_bulbasaur_01.png"
        className={card.acquired ? "" : styles.notAcquired}
      />
      <p>
        {card.cardName} {card.acquired ? "✅" : "❌"}
      </p>
    </div>
  );
}

export default Card;
