import ResultPack from "./ResultPack";
import styles from "./ResultContainer.module.css";

// function calcChance(cards) {
//   let probabilityOfNotGettingNewCard = 1;

//   const noCardsAcquired = cards.every((card) => !card.acquired);

//   if (noCardsAcquired) {
//     return 100;
//   }

//   const missingCards = cards.filter((card) => !card.acquired);

//   for (const card of missingCards) {
//     const notChance1To3 = (1 - card.percent1To3) ** 3;
//     const notChance4 = 1 - card.percent4;
//     const notChance5 = 1 - card.percent5;

//     const notChanceToGet = notChance1To3 * notChance4 * notChance5;

//     probabilityOfNotGettingNewCard *= notChanceToGet;
//   }

//   const chanceOfGettingNewCard = 1 - probabilityOfNotGettingNewCard;

//   return (chanceOfGettingNewCard * 100).toFixed(2);
// }

// function calcChance(cards) {
//   const totalCards = cards.length;

//   const missingCards = cards.filter((card) => !card.acquired).length;

//   const probabilityNewCard = missingCards / totalCards;

//   const probabilityNotNewCard = 1 - probabilityNewCard;

//   const probabilityNotNewCardInThree = probabilityNotNewCard ** 3;

//   const probabilityAtLeastOneNew = 1 - probabilityNotNewCardInThree;

//   console.log(probabilityAtLeastOneNew);
//   return (probabilityAtLeastOneNew * 100).toFixed(3);
// }

function calcChance(cards) {
  const { totalNotChance1To3, totalNotChance4, totalNotChance5 } = cards.reduce(
    (chances, card) => {
      if (!card.acquired) {
        chances.totalNotChance1To3 -= card.percent1To3;
        chances.totalNotChance4 -= card.percent4;
        chances.totalNotChance5 -= card.percent5;
      }

      return chances;
    },
    { totalNotChance1To3: 1, totalNotChance4: 1, totalNotChance5: 1 }
  );

  const probabilityNotGettingNewCard =
    totalNotChance1To3 ** 3 * totalNotChance4 * totalNotChance5;

  const newCardProbability = 1 - probabilityNotGettingNewCard;
  return (newCardProbability * 100).toFixed(2);
}

function ResultContainer({ cards }) {
  const mewtwoPack = cards.filter((card) => card.pack.includes("mewtwo"));
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
