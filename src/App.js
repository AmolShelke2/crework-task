import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import InterviewQuestions from "./components/InterviewQuestions";

function App() {
  return (
    <div className="h-full w-full bg-[#1b1919]">
      <Header />
      <InterviewQuestions />
      <Footer />
    </div>
  );
}

export default App;
