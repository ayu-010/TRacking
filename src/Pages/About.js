import React from 'react';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-md mx-auto">
          <img  src="https://img.freepik.com/free-vector/flat-illustration-cashback-concept_23-2148464752.jpg?t=st=1712907213~exp=1712910813~hmac=a330fe2b531df4b8cad066c15108dbc656ecf7b56f4b3de7617fa9bf721595b9&w=996" alt="About Us" className="rounded-lg shadow-md w-full h-full" />
        </div>
        <div className="text-lg">
          <p className="mb-4">
            Welcome to our expense tracking website! We created this platform to help users easily track their daily expenses and manage their finances more effectively.
          </p>
          <p className="mb-4">
            With our intuitive interface and powerful features, you can quickly record your expenses, categorize them, and analyze your spending patterns over time.
          </p>
          <p className="mb-4">
            Our goal is to provide a simple yet robust tool that empowers users to take control of their finances and make smarter financial decisions.
          </p>
          <p className="mb-4">
            Whether you're tracking personal expenses, managing a budget for your business, or simply curious about where your money goes, our website is here to help.
          </p>
          <p className="mb-4">
            Thank you for choosing our platform to track your expenses. We're excited to have you on board!
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link to={"/signup"} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </Link>
      </div>
      {/* <Verifyemail></Verifyemail> */}
    </div>
  );
};

export default AboutPage;
