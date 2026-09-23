import { Outlet } from "react-router";
import "./App.css";
import BottomFixedBlurryLayout from "./components/BottomFixedBlurryLayout";

import FooterSection from "./components/shared/FooterSection";
import Header from "./components/shared/Header";
import WhatsAppButton from "./components/shared/WhatsAppButton";


function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <WhatsAppButton />
      <BottomFixedBlurryLayout />
      <Outlet/>
      <FooterSection />
    </div>
  );
}

export default App;
