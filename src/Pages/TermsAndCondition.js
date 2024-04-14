import React from 'react';

const TermsAndCondition = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-8">
      <h1 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h1>
      
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 py-6">
        <p className="text-gray-800 text-lg leading-relaxed">
          Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
        </p>
        
        <p className="mt-4 text-gray-800 text-lg leading-relaxed">
          The term 'website' refers to the owner of the website. The term 'you' refers to the user or viewer of our website.
        </p>
        
        {/* Add more terms and conditions text here */}
      </div>
    </div>
  );
}

export default TermsAndCondition;
