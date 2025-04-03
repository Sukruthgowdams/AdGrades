import React from 'react';
import { Container } from '../CommonLayout/Container';
import { Button } from '../CommonLayout/Button';

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Nike's \"Just Do It\"",
      subtitle: "The Power of Emotional Branding",
      description: "From $800M to $9.2B in 10 years. Nike didn't just sell shoes—they sold a lifestyle. Their \"Just Do It\" campaign focused on emotional storytelling and bold advertising, turning them into a global powerhouse.",
      image: "/api/placeholder/400/300",
      logo: "/api/placeholder/100/50"
    },
    {
      title: "Coca-Cola's \"Share a Coke\"",
      subtitle: "Personalization Wins",
      description: "Increased U.S. sales by 2% after a decade of decline. By replacing its logo with customer names, Coca-Cola made marketing personal. The result? A viral sensation that made people hunt for their names and share the experience online.",
      image: "/api/placeholder/400/300",
      logo: "/api/placeholder/100/50"
    },
    {
      title: "Airbnb",
      subtitle: "User-Generated Content Magic",
      description: "Grew from a struggling startup to a $75B brand. Instead of traditional ads, Airbnb leveraged user stories—real travelers, real hosts, real experiences. This trust-building strategy made them the go-to platform for accommodation.",
      image: "/api/placeholder/400/300",
      logo: "/api/placeholder/100/50"
    },
    {
      title: "Dollar Shave Club",
      subtitle: "Viral Video + Disruptive Marketing",
      description: "From startup to $1B acquisition in 5 years. A single, hilariously bold video flipped the men's grooming industry upside down. Their lesson? Be different, be memorable, and make people talk.",
      image: "/api/placeholder/400/300",
      logo: "/api/placeholder/100/50"
    }
  ];

  return (
    <div id="case-studies" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium mb-4">CASE STUDIES – PROOF THAT WE DELIVER</p>
          <h2 className="text-4xl font-bold mb-6">We let results do the talking.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's how smart marketing changed the game for brands worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center mb-3">
                    <img 
                      src={study.logo} 
                      alt={`${study.title} logo`}
                      className="h-6 mr-3"
                    />
                    <h3 className="text-xl font-bold">{study.title}</h3>
                  </div>
                  <p className="text-purple-600 font-medium mb-2">{study.subtitle}</p>
                  <p className="text-gray-600">{study.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg font-bold">
            Want results like this? Let's talk.
          </Button>
        </div>
      </Container>
    </div>
  );
};