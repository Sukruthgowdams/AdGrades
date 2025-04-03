import React from 'react';
import { Container } from '../CommonLayout/Container';
import { Button } from '../CommonLayout/Button';

export const HeroSection = () => {
  return (
    <div id="home" className="bg-gradient-to-r from-purple-50 to-blue-50 py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <p className="text-lg font-medium text-purple-600 mb-3">
              Marketing that actually works. Unlike that gym membership you forgot about.
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Not Just Another Marketing Agency. <span className="text-purple-600">We're Your Business Growth Partner.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We don't just run ads. We build revenue engines that never stop.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-bold">
                Let's Make You Unstoppable
              </Button>
              <Button className="bg-white hover:bg-gray-100 text-purple-600 border border-purple-600 py-3 px-8 rounded-lg font-bold">
                See How We Scale Brands
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Digital + Offline = Complete Domination",
                "Performance-Driven Marketing That Sells",
                "Tech-Powered Automation & Scaling",
                "Zero BS, All Results"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-5/12">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold mb-4">When you realize you've been boosting posts instead of running actual ads</h3>
                <img 
                  src="/api/placeholder/500/300" 
                  alt="Marketing meme" 
                  className="w-full rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};