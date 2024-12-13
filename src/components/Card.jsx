function Card({ card, handleAcquireCard }) {
  return (
    <li onClick={() => handleAcquireCard(card.id)}>
      <p>
        {card.cardName} {card.acquired ? "✅" : "❌"}
      </p>
    </li>
  );
}

export default Card;
