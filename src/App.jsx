import Navbar from "./pages/Navbar";
import "./App.css";
import FirstSection from "./pages/FirstSection";
import SecondSection from "./pages/SecondSection";
import ThirdSection from "./pages/ThirdSection";
import FourthSection from "./pages/FourthSection";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </ThemeProvider>
  );
}

export default App;
