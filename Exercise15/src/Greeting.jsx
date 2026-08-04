import React, { useContext } from 'react';
import LanguageContext from './LanguageContext';

function Greeting() {
  const language  = useContext(LanguageContext);

  const greetings = {
    en: "Hello, World!",
    es: "¡Hola, Mundo!",
  };
  return (
    <div>
      <h1>{greetings[language]}</h1>
    </div>
  );
}
export default Greeting;
