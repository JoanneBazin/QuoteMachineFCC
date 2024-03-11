import { useEffect, useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes();
    console.log(quotes);
  }, []);

  const getQuotes = () => {
    const url = "https://api.quotable.io/random";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  };

  return (
    <div id="quote-box">
      <p id="text" className="blockquote">
        {quotes.content}
      </p>
      <span id="author" className="blockquote-footer">
        {quotes.author}
      </span>
      <div id="btn-container">
        <button
          onClick={getQuotes}
          id="new-quote"
          className="btn btn-outline-light"
        >
          New Quote <i className="fa-solid fa-angle-right"></i>
        </button>
        <a
          id="tweet-quote"
          href="twitter.com/intent/tweet"
          target="_blank"
          className="btn btn-outline-info"
        >
          Tweet it ! <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
