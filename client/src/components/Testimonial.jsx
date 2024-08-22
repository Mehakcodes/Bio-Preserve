import React, { useRef } from "react";

const Testimonial = () => {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Green Tech",
      content:
        "This Bank transformed my financial management, aligning it with my values for a greener planet. ",
    },
    {
      id: 2,
      name: "Green Tech",
      content:
        "This Bank transformed my financial management, aligning it with my values for a greener planet. ",
    },
    {
      id: 3,
      name: "Green Tech",
      content:
        "This Bank transformed my financial management, aligning it with my values for a greener planet. ",
    },
    {
      id: 4,
      name: "Green Tech",
      content:
        "This Bank transformed my financial management, aligning it with my values for a greener planet. ",
    },
    {
      id: 5,
      name: "Green Tech",
      content:
        "This Bank transformed my financial management, aligning it with my values for a greener planet. ",
    },
  ];

  return (
    <div className="w-full pb-10  bg-gray-100 pt-8 px-10 relative">
      <h1 className="text-5xl font-medium text-center mb-8">
      Real Stories, Real Impact 
      </h1>
      <div className="testimonial-carousel-container relative overflow-hidden">
        <div className="testimonial-carousel flex" ref={carouselRef}>
          {/* Map over testimonials */}
          {testimonials.map((testimonial) => (
            <div
            key={testimonial.id}
            className="testimonial-item flex-none w-full md:w-1/2 lg:w-1/3 px-4"
          >
            <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"
                alt={`Testimonial by ${testimonial.name}`}
                className="rounded-full w-16 h-16 mb-4"
              />
              <p className="text-gray-800 text-lg mb-2">{testimonial.content}</p>
              <p className="text-gray-600">- {testimonial.name}</p>
            </div>
          </div>
          
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default Testimonial;
