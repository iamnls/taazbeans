import React from 'react';
import './About.css';
import coffeeShopImage from '../images/cappuccino.jpg'; // Adjust the path as necessary

const About = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-image">
        <img src={coffeeShopImage} alt="Our coffee shop" />
      </div>
      <article className="about-us-content">
        <h2>About Us</h2>
        <p>
          Welcome to Coffee House! We are passionate about serving the best coffee in town.
          Our beans are sourced from the finest farms, and we take pride in our brewing techniques.
          Whether you’re looking for a quiet place to relax or a lively spot to catch up with friends,
          our cozy atmosphere is perfect for everyone.
        </p>
        <p>
          Join us for a cup of coffee and experience the warmth of our community.
          We believe that great coffee brings people together, and we can't wait to share our love for coffee with you!
        </p>
      </article>
    </section>
  );
};

export default About;