import React from "react";
import "./Style.css";

const testimonials = [
  {
    id: 1,
    name: "Faryal Mir - Islamabad",
    testimonial: "I absolutely love shopping at Bonze! The quality of their products is unmatched, and their customer service is exceptional. Highly recommended!",
  },
  {
    id: 2,
    name: "Anaya Khan - Rawalpindi",
    testimonial: "Bonze is my go-to shop for all my fashion needs. They have a wide range of trendy and affordable clothing options. Love their unique designs!",
  },
  {
    id: 3,
    name: "Sarah - Lahore",
    testimonial: "Shopping at Bonze has been a delightful experience. Their collection is always up-to-date with the latest fashion trends. Great value for money!",
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">WHAT OUR CUSTOMERS SAY</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p className="testimonial-author">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;