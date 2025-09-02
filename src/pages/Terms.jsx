import React from 'react';

const Terms = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto pt-24">
      <h1 className="text-4xl font-bold text-green-900 mb-4">Terms and Conditions</h1>
      <p className="text-lg text-gray-700 mb-4">
        By accessing and using NewsNexa, you agree to the following terms and conditions:
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>All content is for informational purposes only.</li>
        <li>We are not responsible for the accuracy of third-party news APIs.</li>
        <li>Users should not republish or redistribute content without permission.</li>
        <li>We reserve the right to update our terms at any time without notice.</li>
      </ul>
    </div>
  );
};

export default Terms;
