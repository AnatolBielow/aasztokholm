import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import { contact, addresses, theme, events } from "./Helpers";
import {
  Home,
  Events,
  Steps,
  Traditions,
  Conceptions,
  History,
  Meetings,
  Contact,
} from "./Components/Pages";
import { Wave } from "./Components/Wave/";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Helpers/ScrollToTop";
import { Questionnaire } from "./Components/Questionnaire";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wave />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<Navigate to="/" />} />
              <Route path="steps" element={<Steps />} />
              <Route path="traditions" element={<Traditions />} />
              <Route path="conceptions" element={<Conceptions />} />
              <Route path="history" element={<History />} />
              <Route
                path="questionnaire"
                element={<Questionnaire/>}
              />
              <Route
                path="meetings"
                element={<Meetings addresses={addresses} />}
              />
              <Route path="events" element={<Events events={events} />} />
              <Route path="contacts" element={<Contact contact={contact} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </ScrollToTop>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
