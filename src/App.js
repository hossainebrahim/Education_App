import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import HeroButton from "./components/HeroBottom";
import Category from "./components/Category";
import Courses from "./components/Courses";
import Authored from "./components/Authored";
import Footer from "./components/Footer";
import Newsletters from "./components/Newsletters";
import StoriesStudent from "./components/StoricesStudent";
import WhyTake from "./components/WhyTake";

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <HeroButton />
      <Category />
      <Courses />
      <Authored />
      <WhyTake />
      <StoriesStudent />
      <Newsletters />
      <Footer />
    </>
  );
}

export default App;
