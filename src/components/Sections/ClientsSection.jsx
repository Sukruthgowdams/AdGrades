import React from 'react';
import { Container } from '../CommonLayout/Container';

export const ClientsSection = () => {
  const clients = [
    { 
      name: 'OSCode Solution', 
      description: 'We helped OSCode Solution enhance its digital presence and reach the right audience. Through engaging social media content and SEO-optimized posts, OSCode saw increased engagement and stronger credibility.',
      logo: '/api/placeholder/150/80',
      tag: 'Tech'
    },
    { 
      name: 'Delhi 65', 
      description: 'We helped Delhi 65, a multi-cuisine restaurant, attract more customers and build a strong online presence through eye-catching social media posts and targeted marketing strategies.',
      logo: '/api/placeholder/150/80',
      tag: 'Restaurant'
    },
    { 
      name: 'Medhavi Classes', 
      description: 'We helped Medhavi Classes, an education training institute, grow its digital presence and reach more students through engaging content and targeted marketing campaigns.',
      logo: '/api/placeholder/150/80',
      tag: 'Education'
    },
    { 
      name: 'DewDrop Homestays', 
      description: 'We helped Dew Drop Homestays attract more travelers by showcasing its luxury, comfort, and world-class amenities through stunning visuals and strategic marketing.',
      logo: '/api/placeholder/150/80',
      tag: 'Hospitality'
    },
    { 
      name: 'Vinayaka Enterprises', 
      description: 'We helped Vinayaka Enterprises, an interior design expert, showcase its innovative solutions through creative content and targeted marketing campaigns.',
      logo: '/api/placeholder/150/80',
      tag: 'Interior Design'
    }
  ];

  return (
    <div id="clients" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium mb-4">OUR CLIENT SUCCESS STORIES</p>
          <h2 className="text-4xl font-bold mb-6">Real brands. Real growth.<br />Real results.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="h-12"
                />
                <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-1 rounded">
                  {client.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{client.name}</h3>
              <p className="text-gray-600 mb-4">{client.description}</p>
              <div className="text-right">
                <a href="#" className="text-purple-600 font-medium hover:text-purple-800">
                  Read Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};