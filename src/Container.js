import { Route, Routes } from "react-router-dom";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import NotFound from "./components/NotFound";

function Container() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/Dogs" element={<Dogs />} />
        <Route path="/Cats" element={<Cats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Container;
