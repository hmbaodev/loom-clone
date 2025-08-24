import Header from "@/components/header";
import VideoCard from "@/components/video-card";
import { dummyCards } from "@/constants";

const Home = () => {
  return (
    <div className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      <section className="video-grid">
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
};

export default Home;