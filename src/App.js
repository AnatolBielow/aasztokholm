import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Components/Layout/";
import { GlobalStyle } from "./GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import {
  about,
  cards,
  contact,
  menu,
  addresses,
  theme,
  conceptions,
  events,
  steps,
  traditions,
} from "./Helpers";
import {
  Home,
  Events,
  Steps,
  Traditions,
  Conceptions,
  History,
  Meetings,
  Contact
} from "./Components/Pages";
import { Wave } from "./Components/Wave/";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Questionnaire } from "./Components/Questionnaire/Questionnaire";
import { limit, questionnaire } from "./Helpers/questionnaire";
import ScrollToTop from "./Helpers/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wave />
        <ScrollToTop>
        <Routes>
          
          <Route path="/" element={<Layout menu={menu} />}>
            <Route
              index
              element={
                <Home number={contact.number} about={about} cards={cards} />
              }
            />
            <Route path="about" element={<Navigate to="/" />} />
            <Route path="steps" element={<Steps steps={steps}/>} />
            <Route path="traditions" element={<Traditions traditions={traditions}/>} />
            <Route
              path="conceptions"
              element={<Conceptions conceptions={conceptions} />}
            />
            <Route path="history" element={<History />} />
            <Route path="questionnairy" element={<Questionnaire items={questionnaire} limit={limit}/>} />
            <Route
              path="meetings"
              element={<Meetings addresses={addresses} />}
            />
            <Route path="events" element={<Events events={events} />} />
            <Route path="contacts" element={<Contact contact={contact}/>} />
            <Route path="*" element={<Navigate to='/'/>}/>
          </Route>
         
        </Routes>
         </ScrollToTop>
        <ToastContainer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
