import React, { useState } from 'react';
import { Container } from '../CommonLayout/Container';

export const FAQsSection = () => {
  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'While every campaign is different, most clients start seeing improved performance within the first 30 days. For comprehensive results and ROI analysis, we recommend a 3-month timeline.'
    },
    {
      question: 'What makes AdGrades different from other agencies?',
      answer: 'We\'re ROI-obsessed, not vanity metrics focused. We combine AI with human expertise, make data-driven decisions, build end-to-end growth systems, and leverage memes, trends & disruptive creativity because attention equals revenue.'
    },
    {
      question: 'What platforms do you work with?',
      answer: 'We specialize in all major advertising platforms including Facebook, Instagram, Google, YouTube, LinkedIn, TikTok, Snapchat, and more. We also handle offline marketing channels like billboards, TV, and radio.'
    },
    {
      question: 'What\'s your pricing structure?',
      answer: 'Our pricing is transparent and based on your specific needs. We offer Starter Plans for small businesses, Growth Plans for scaling brands, and Enterprise Plans for market domination. Contact us for a custom quote tailored to your business goals.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We've got answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};