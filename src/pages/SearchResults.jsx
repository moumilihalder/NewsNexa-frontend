import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./News.css";

function SearchResults() {
  const [articles, setArticles] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  //  Use environment variable (falls back to localhost in dev)
  const API_BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    if (!query) return;

    fetch(`${API_BASE}/search?q=${encodeURIComponent(query)}`)
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status} - ${text}`);
        }
        return res.json();
      })
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("Error fetching search:", err));
  }, [query, API_BASE]);

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
              <a href={article.url} target="_blank" rel="noopener noreferrer">
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
