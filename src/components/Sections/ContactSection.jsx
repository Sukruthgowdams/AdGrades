import React from 'react';
import { Container } from '../CommonLayout/Container';
import { Button } from '../CommonLayout/Button';

export const ContactSection = () => {
  return (
    <div id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">LET'S MAKE YOU UNSTOPPABLE</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Tired of marketing that doesn't work? Let's change that today.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto bg-white rounded-lg p-8 shadow-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div className="text-center">
              <Button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};
