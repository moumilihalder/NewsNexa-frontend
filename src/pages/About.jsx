import React from 'react';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto pt-24">
      <h1 className="text-4xl font-bold text-green-900 mb-4">About NewsNexa</h1>
      <p className="text-lg text-gray-800 leading-relaxed">
        NewsNexa is a modern news aggregation platform that brings together the most trusted sources
        of Indian news in one place. We bring together leading publications like The Hindu, Hindustan Times, The Indian Express, and The Statesman, ensuring you have access to a wide spectrum of perspectives.<br/>

        Our platform is designed for simplicity and speed — explore top headlines, dive into category-based stories such as Health, Technology, Sports, and Entertainment, or connect directly to renowned news outlets for in-depth reporting.<br/>

        Whether you’re a casual reader looking to stay informed or a news enthusiast seeking detailed coverage, our mission is to deliver an organized, accessible, and visually engaging news experience — all in one place.
      </p>
      <p className="mt-4 text-lg text-gray-700">
        Built with React and powered by Express.js, NewsNexa is designed to be fast, responsive, and easy to use
        across all devices.
      </p>
    </div>
  );
};

export default About;
