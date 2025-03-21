import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";
import { MMORPG } from "./pages/MMORPG";
import { FPS } from "./pages/FPS";
import { MOBA } from "./pages/MOBA";
import { Page404 } from "./pages/Page404";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mmorpg" element={<MMORPG />} />
          <Route path="fps" element={<FPS />} />
          <Route path="moba" element={<MOBA />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
