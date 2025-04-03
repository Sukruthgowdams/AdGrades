import React from 'react';
import { Container } from '../CommonLayout/Container';

export const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Client Name',
      position: 'Founder of Brand X',
      review: 'AdGrades completely transformed our marketing. From struggling to scale to hitting consistent 6-figure months—unbelievable!',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Client Name',
      position: 'CEO of Company Y',
      review: 'Before AdGrades, we wasted money on ads with no ROI. Now, we see 4X returns monthly!',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Client Name',
      position: 'Marketing Director',
      review: 'The team at AdGrades truly understands marketing strategy and execution. They ve helped us reach new heights.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div id="reviews" className="py-20 bg-purple-50">
      <Container>
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium mb-4">TESTIMONIALS – WHAT OUR CLIENTS SAY</p>
          <h2 className="text-4xl font-bold mb-6">Don't take our word for it.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-gray-600 text-sm">{review.position}</p>
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700">"{review.review}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white p-4 rounded-lg inline-block">
            <p className="font-medium">Featured In:</p>
            <div className="flex justify-center space-x-8 mt-3">
              <img src="/api/placeholder/80/30" alt="Featured in Forbes" className="h-8 opacity-70" />
              <img src="/api/placeholder/80/30" alt="Featured in Entrepreneur" className="h-8 opacity-70" />
              <img src="/api/placeholder/80/30" alt="Featured in Business Insider" className="h-8 opacity-70" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};