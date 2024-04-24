import LayOut from "./LayOut";
import { Routes, Route } from "react-router-dom";
import Section from "./Sections";
import Login from "./Login";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Section />} />
        <Route path="/login" index element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
