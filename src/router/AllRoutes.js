import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Jokes } from "../pages/Jokes";
import{PageNotFound} from "../pages/PageNotFound"
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="joke" element={<Jokes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
