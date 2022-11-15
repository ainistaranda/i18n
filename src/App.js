import { useState, createContext } from 'react'
import Details from './components/Details'
import English from './lang/en.json'
import Spanish from './lang/es.json'
import French from './lang/fr.json'
import './App.css'

const locale = navigator.language || 'en';

const _lang = (locale === 'es')
  ? Spanish
  : (locale === 'fr')
    ? French
    : English;

export const LanguageContext = createContext()

function App() {
  const [lang, setLang] = useState(_lang)
  return (
    <LanguageContext.Provider value={{ lang }}>
      <div className="App">
        <header className="App-header">
          <div>
            <button classname="button" onClick={() => setLang(English)}>🇺🇸</button>
            <button classname="button" onClick={() => setLang(Spanish)}>🇪🇸</button>
            <button classname="button" onClick={() => setLang(French)}>🇫🇷</button>
          </div>
          <h1>{lang["app.header"]}</h1>
          <p>{lang["app.subhead"]}</p>
          <a
            className="App-link"
            href="https://bocacode.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang["app.cta"]}
          </a>
          <Details />
        </header>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;