import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import { useState } from "react";
import "./App.css";

const locale = navigator.language || "en";

const _lang = locale === "es" ? Spanish : English;

function App() {
  const [lang, setLang] = useState(_lang);
  return (
    <div className="App">
      <div className="button">
        <button onClick={() => setLang(English)}>EN</button>
        <button onClick={() => setLang(Spanish)}>ES</button>
      </div>
      <h1>{lang["app.header"]}</h1>
      <p>{lang["app.subhead"]}</p>
      <a>{lang["app.cta"]}</a>
    </div>
  );
}

export default App;
