import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./News.css";

function SearchResults() {
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (!query) return;
    fetch(`http://localhost:5000/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className="news-container">
      {articles.length === 0 ? (
        <p>No results found for "{query}".</p>
      ) : (
        articles.map((article, index) => (
          <div className="news-card" key={index}>
            {article.urlToImage ? (
              <img src={article.urlToImage} alt={article.title} />
            ) : (
              <div className="no-image">No Image Available</div>
            )}
            <div className="news-content">
              <h3>{article.title}</h3>
              <p>{article.description || "No description available."}</p>
              <a
                href={article.url}
              >
                Read More
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;
