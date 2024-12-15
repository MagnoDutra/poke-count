import ResultPack from "./ResultPack";
import styles from "./ResultContainer.module.css";

function calcChance(cards) {
  let newCardChance = 0;

  for (const card of cards) {
    const notChance1To3 = (1 - card.percent1To3) ** 3;
    const notChance4 = 1 - card.percent4;
    const notChance5 = 1 - card.percent5;

    const notChanceToGet = notChance1To3 * notChance4 * notChance5;

    const chanceNewCard = 1 - notChanceToGet;

    newCardChance += chanceNewCard;
  }

  return Math.min(newCardChance * 100, 100);
}

function ResultContainer({ cards }) {
  const mewtwoPack = cards.filter(
    (card) => card.pack === "mewtwo" && !card.acquired
  );
  const pikachuPack = cards.filter(
    (card) => card.pack === "pikachu" && !card.acquired
  );
  const charizardPack = cards.filter(
    (card) => card.pack === "charizard" && !card.acquired
  );

  const mewtwoChance = calcChance(mewtwoPack);
  const pikachuChance = calcChance(pikachuPack);
  const charizardChance = calcChance(charizardPack);

  return (
    <div className={styles.container}>
      <ResultPack pack="mewtwo" newCardChance={mewtwoChance} />
      <ResultPack pack="charizard" newCardChance={charizardChance} />
      <ResultPack pack="pikachu" newCardChance={pikachuChance} />
    </div>
  );
}

export default ResultContainer;
