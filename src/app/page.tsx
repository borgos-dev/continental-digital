import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhotoBand from "@/components/PhotoBand";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PhotoBand />
        <Features />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
