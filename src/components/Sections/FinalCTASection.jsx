import React from 'react';
import { Button } from '../CommonLayout/Button';
import { Container } from '../CommonLayout/Container';

export const FinalCTASection = () => {
  return (
    <div id="final-cta" className="py-20 bg-purple-50 text-center">
      <Container>
        <h2 className="text-purple-600 font-bold mb-6">LET’S MAKE YOU UNSTOPPABLE</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Tired of marketing that doesn’t work? Let’s change that today.
        </p>
        <h3 className="text-3xl font-semibold mb-6">Get a Free Strategy Call & Scale Your Brand Now.</h3>
        
        {/* Button for primary CTA */}
        <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 mb-4">
          Book My Free Call
        </Button>

        {/* Secondary CTA */}
        <div>
          <Button className="text-purple-600 hover:text-purple-700">
            See Case Studies
          </Button>
        </div>
      </Container>
    </div>
  );
};
