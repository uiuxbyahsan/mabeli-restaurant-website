import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureDishes from "@/components/SignatureDishes";
import MenuSection from "@/components/menu/MenuSection";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import InstagramFeed from "@/components/InstagramFeed";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <MenuSection />
        <Gallery />
        <Reviews />
        <InstagramFeed />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
