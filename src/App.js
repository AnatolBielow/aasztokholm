import { menu } from "./Helpers/menu";
import { number } from "./Helpers/number";
import { GlobalStyle } from "./GlobalStyle.js";
import { theme } from "./Helpers/theme";
import { ThemeProvider } from "styled-components";
import { about } from "./Helpers/about";
import { cards } from "./Helpers/cards";
import { Wave } from "./Components/Wave/Wave";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Home } from "./Components/Pages/Home";
import { Events } from "./Components/Pages/Events";
import { Build } from "./Components/Pages/Build/Build";
import { Steps } from "./Components/Pages/Steps";
import { Traditions } from "./Components/Pages/Traditions";
import { Conceptions } from "./Components/Pages/Conceptions";
import { History } from "./Components/Pages/History";
import { Meetings } from "./Components/Pages/Meetings/Meetings";
// import { Steps } from "./Components/Pages/Steps/Steps";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wave />
        <Routes>
          <Route path="/" element={<Layout menu={menu} />}>
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              index
              element={<Home number={number} about={about} cards={cards} />}
            />
            <Route path="about" element={<Navigate to="/" />} />
            <Route path="steps" element={<Steps />} />
            <Route path="traditions" element={<Traditions />} />
            <Route path="conceptions" element={<Conceptions />} />
            <Route path="history" element={<History />} />
            <Route path="questionnaire" element={<Build />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="events" element={<Events />} />
            <Route path="contacts" element={<Build />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
