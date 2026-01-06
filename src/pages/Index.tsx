import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
