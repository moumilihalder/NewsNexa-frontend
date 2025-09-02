import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto pt-24">
      <h1 className="text-4xl font-bold text-green-900 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        We'd love to hear from you! For feedback, partnership inquiries, or support, you can reach out through the form below or email us directly.
      </p>

      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full border border-gray-300 rounded px-4 py-2 h-32"
        ></textarea>
        <button 
          type="submit" 
          className="bg-quaternary hover:bg-quinary text-white px-6 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
