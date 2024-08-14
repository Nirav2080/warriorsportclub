import BookEvent from "./BookEvent";
import ChooseUs from "./ChooseUs/index";
import CounterOfAllArea from "./CounterOfAllArea/index";
import GamesCategories from "./GamesCategories/index";
import Hero from "./Hero";
import Memory from "./Memory/index";
import Swiper from "./Swiper/index";
import TopTrainers from "./TopTrainers/index";
import TrainingSessions from "./TrainingSessions/index";

const Home = () => {
  return (
    <main>
      <Hero />
      <BookEvent />
      <GamesCategories />
      <ChooseUs />
      <CounterOfAllArea />
      <TopTrainers />
      <TrainingSessions />
      <Memory />
      <Swiper />
    </main>
  );
};

export default Home;
