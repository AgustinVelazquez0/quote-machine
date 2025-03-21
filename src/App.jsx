import React, { useState, useEffect } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  // Definir los estados para la cita y el autor
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Función para obtener una cita de la API
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content); // Extrae el contenido de la cita
      setAuthor(data.author); // Extrae el autor de la cita
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  // Llamar a la función fetchQuote cuando el componente se monte
  useEffect(() => {
    fetchQuote();
  }, []); // El arreglo vacío significa que solo se ejecutará una vez cuando se cargue el componente

  return (
    <div id="quote-box" className="quote-box">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i> Tweet Quote
      </a>
    </div>
  );
};

export default App;
