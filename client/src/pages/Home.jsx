import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import Tentang from "../components/About";
import Packages from "../components/Packages";
import Branches from "../components/Location";
import ContactSection from "../components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <Tentang />
      <Packages />
      <Branches />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
