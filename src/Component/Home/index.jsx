import Hero from "./Hero";
import BookEvent from "./BookEvent";
import GamesCategories from "./GamesCategories/index";
import ChooseUs from "./ChooseUs/index";
import CounterOfAllArea from "./CounterOfAllArea/index";
import TopTrainers from "./TopTrainers/index";
import Swiper from "./Swiper/index";
import TrainingSessions from "./TrainingSessions/index";
import Memory from './Memory/index'

const Home = () => {
  return (
    <main>
      <Hero />
      <BookEvent />
      <GamesCategories />
      <ChooseUs />
      <CounterOfAllArea />
      <TopTrainers />
      <Swiper />
      <TrainingSessions />
      <Memory />
    </main>
  );
};

export default Home;
