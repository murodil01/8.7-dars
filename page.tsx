import Cards from "./components/cards/pages";
import Footer from "./components/footer/pages";
import Hero from "./components/hero/pages";
import Navbar from "./components/navbar/pages";
import Service from "./components/service/pages";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards/>
      <Service/>
      <Footer/>
    </div>
  );
}
