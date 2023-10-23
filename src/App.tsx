import type { FC } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Provider from "./tools/provider";

const App: FC = () => {
  return (
    <Provider>
      <Navbar />
      <Hero />
    </Provider>
  );
};

export default App;
