import React from 'react';
import {
  Banner,
  Login,
  Features,
  Testimonials,
  Security,
  Pricing,
  Contact
} from 'dan-components';

function HomePage() {
  return (
    <div>
      <section id="banner">
        <Banner />
      </section>
      <section id="feature">
        <Login />
      </section>
      <section id="showcase">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="tech">
        <Security />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default HomePage;
