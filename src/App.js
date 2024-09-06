import "./App.css";
import Header from "./components/Header";
import Usps from "./section/Usps";
import Hero from "./section/Hero";
import VideoCarousel from "./section/VideoCarousel";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        {/* <div>3 col layout</div> */}
        <VideoCarousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
}

export default App;
