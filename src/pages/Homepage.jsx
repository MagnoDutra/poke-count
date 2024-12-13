import Binder from "../components/Binder";
import Result from "../components/Result";
import Tab from "../components/Tab";

function Homepage({ cards, handleAcquireCard }) {
  return (
    <main>
      <Tab />
      <Result cards={cards} />
      <Binder cards={cards} handleAcquireCard={handleAcquireCard} />
    </main>
  );
}

export default Homepage;
