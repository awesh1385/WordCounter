import { Counter } from "../components/Counter";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <main>
      <Header
        heading="Word Counter"
        subHeading="Free online character and word count tool."
      />
      <Counter />
    </main>
  );
};
