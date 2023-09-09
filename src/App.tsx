import type { FC } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
