import Hero from "./Hero";
import BookEvent from "./BookEvent";
import GamesCategories from "./GamesCategories/index";
import ChooseUs from "./ChooseUs/index";
import CounterOfAllArea from "./CounterOfAllArea/index";
import TopTrainers from './TopTrainers/index'

const Home = () => {
  return (
    <main>
      <Hero />
      <BookEvent />
      <GamesCategories />
      <ChooseUs />
      <CounterOfAllArea />
      <TopTrainers />
    </main>
  );
};

export default Home;
