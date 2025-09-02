import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./News.css";

function News() {
  const { name } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
  if (!name) return;

  const API_BASE = import.meta.env.VITE_BACKEND_URL;

  fetch(`${API_BASE}/category/${name}`)
    .then(async (res) => {
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status} - ${text}`);
      }
      return res.json();
    })
    .then((data) => setArticles(data.articles || []))
    .catch((err) => console.error("Error fetching news:", err));
}, [name]);

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div className="news-card" key={index}>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} />
          )}
          <div className="news-content">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
