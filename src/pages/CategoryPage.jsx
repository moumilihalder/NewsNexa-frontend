import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { name } = useParams(); 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  console.log("Using API:", BACKEND_URL);
  useEffect(() => {
    setLoading(true);
    fetch(`${BACKEND_URL}/category/${name}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setLoading(false);
      });
  }, [name, API_URL]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)} News</h1>
      {articles.length === 0 ? (
        <p>No news found.</p>
      ) : (
        articles.map((article, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
}
