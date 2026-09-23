import HeroSection from "../HeroSection";
import TechStackSection from "../TechStackSection";
import ContactSection from "../ContactSection";
import FAQSection from "../FAQSection";
import LeadershipSection from "../LeadershipSection";
import MissionVisionSection from "../MissionVisionSection";
import ProcessSection from "../ProcessSection";
import ServicesSection from "../ServicesSection";
import WhyChooseUs from "../WhyChooseUs";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <TechStackSection/>
      <ProcessSection />
      <ServicesSection />
      <FAQSection />
      <WhyChooseUs />
      <MissionVisionSection />
      <ContactSection />
      <LeadershipSection />
    </div>
  );
};

export default Home;
