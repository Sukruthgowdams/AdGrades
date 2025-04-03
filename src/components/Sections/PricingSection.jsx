import React from 'react';
import { Button } from '../CommonLayout/Button';
import { Container } from '../CommonLayout/Container';

export const PricingSection = () => {
  return (
    <div id="pricing" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium mb-4">PRICING OR CUSTOM SOLUTIONS – Transparency Builds Trust</p>
          <h2 className="text-4xl font-bold mb-6">One-size-fits-all marketing? Not here. We build strategies that fit YOUR business.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Starter Plan</h3>
            <p className="mb-4">For Small Businesses</p>
            <p className="text-xl font-bold mb-4">$$</p>
            <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 w-full">
              Get a Custom Quote
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Growth Plan</h3>
            <p className="mb-4">For Scaling Brands</p>
            <p className="text-xl font-bold mb-4">$$$</p>
            <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 w-full">
              Get a Custom Quote
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
            <p className="mb-4">For Market Domination</p>
            <p className="text-xl font-bold mb-4">$$$$</p>
            <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 w-full">
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
