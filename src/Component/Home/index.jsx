import BookEvent from "./BookEvent";
import ChooseUs from "./ChooseUs/index";
import CounterOfAllArea from "./CounterOfAllArea/index";
import GamesCategories from "./GamesCategories/index";
import Hero from "./Hero";
import TopTrainers from "./TopTrainers/index";
import TrainingSessions from "./TrainingSessions/index";
import Testimonials from "./Testimonials/index";

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
      <Testimonials />
    </main>
  );
};

export default Home;
