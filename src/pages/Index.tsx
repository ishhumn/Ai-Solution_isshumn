import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ChatInterface from "../components/ChatInterface";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <ChatInterface />
    </div>
  );
};

export default Index;
