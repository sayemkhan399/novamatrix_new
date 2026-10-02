import Lenis from "lenis";
import { useEffect } from "react";
import { Outlet } from "react-router";
import "./App.css";
import BottomFixedBlurryLayout from "./components/BottomFixedBlurryLayout";

import FooterSection from "./components/shared/FooterSection";
import Header from "./components/shared/Header";
import WhatsAppButton from "./components/shared/WhatsAppButton";

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.75,
    });

    let animationFrameId;
    const animate = (time) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <WhatsAppButton />
      <BottomFixedBlurryLayout />
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default App;
