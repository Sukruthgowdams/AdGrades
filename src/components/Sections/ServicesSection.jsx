import React from 'react';
import { Container } from '../CommonLayout/Container';
import { Button } from '../CommonLayout/Button';

export const ServicesSection = () => {
  const services = [
    {
      category: "Performance Marketing",
      items: [
        "AI-Powered Facebook & Instagram Ads",
        "Google & YouTube Ads – High-intent buyers",
        "LinkedIn Ads – For serious B2B growth",
        "TikTok & Snapchat Ads – Gen Z & millennial money machine"
      ],
      icon: "📈"
    },
    {
      category: "Conversion & Funnel Optimization",
      items: [
        "High-Converting Landing Pages",
        "Automated Sales Funnels & Chatbots",
        "A/B Testing & CRO – Every click optimized"
      ],
      icon: "🎯"
    },
    {
      category: "Content & Brand Domination",
      items: [
        "UGC & Viral Strategies – Scroll-stopping content",
        "Influencer Marketing – No fake followers",
        "Memes & Trend-Based Marketing"
      ],
      icon: "🚀"
    },
    {
      category: "Data-Driven Scaling & Consulting",
      items: [
        "Ad Budget Optimization",
        "Growth Hacking for Startups",
        "Custom AI & Automation Strategies"
      ],
      icon: "📊"
    }
  ];

  return (
    <div id="services" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium mb-4">OUR SERVICES – THE GAME-CHANGERS</p>
          <h2 className="text-4xl font-bold mb-6">We don't just run ads.<br />We build revenue engines that never stop.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.category}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-bold">
            Get a Free Marketing Audit
          </Button>
        </div>
      </Container>
    </div>
  );
};