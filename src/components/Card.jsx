import React from 'react';
import { useNavigate } from "react-router-dom";
import { assets } from '../assets/assets';
import "./Card.css";


const Card = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <>
     <div className="fixed inset-0 z-[-1] rotate-180 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      <main> 
        <div className="newsCard container flex">
          <a
            href="https://www.thehindu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="news"
            id="news1"
          >
            <img className="img" src={assets.hindu} alt="the hindu image" />
            <p>
              "The Hindu" is an Indian English-language daily newspaper published by The Hindu Group, headquartered in Chennai, Tamil Nadu. It was founded in 1878 as a weekly publication and became a daily newspaper in 1889.
            </p>
          </a>

          <a
            href="https://www.hindustantimes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="news"
            id="news2"
          >
            <img className="img" src={assets.hindustan_times} alt="hindustan-times" />
            <p>
              Hindustan Times is a prominent Indian English-language daily newspaper and a part of HT Media, a media conglomerate. It was founded in 1924 and has played a significant role in the Indian independence movement. Today, it's one of the largest newspapers in India by circulation and readership. 
            </p>
          </a>

          <a
            href="https://indianexpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="news"
            id="news3"
          >
            <img className="img" src={assets.indian_express} alt="indian_express" />
            <p>
              "The Indian Express" is a prominent Indian English-language daily newspaper and digital news group known for its "Journalism of Courage". Founded in 1932 by Shri Ramnath Goenka, it has grown into a multi-edition newspaper with a strong national presence. 
            </p>
          </a>

          <a
            href="https://www.thestatesman.com"
            target="_blank"
            rel="noopener noreferrer"
            className="news"
            id="news4"
          >
            <img className="img" src={assets.stateman} alt="The Statesman" />
            <p>
              "The Statesman" refers to an Indian English-language daily newspaper, founded in 1818, and published in Kolkata, New Delhi, Siliguri, and Bhubaneswar. It is one of India's oldest newspapers, and is known for its objective coverage of events, particularly during times of crisis.
            </p>
          </a>
        </div>
        <section className="categories-container container flex">
          <div className="categories" onClick={() => handleCategoryClick("health")} >
            <h4>Health</h4>
            <img src={assets.world} alt="health image" />
          </div>
          <div className="categories" onClick={() => handleCategoryClick("technology")}>
            <h4>Technology</h4>
            <img src={assets.technology} alt="technology image" />
          </div>
          <div className="categories" onClick={() => handleCategoryClick("sports")}>
            <h4>Sports</h4>
            <img src={assets.sports} alt="sports image" />
          </div>
          <div className="categories" onClick={() => handleCategoryClick("entertainment")}>
            <h4>Entertainment</h4>
            <img src={assets.entertainment} alt="entertainment image" />
          </div>
        </section>
      </main>
    </>
  )
}

export default Card