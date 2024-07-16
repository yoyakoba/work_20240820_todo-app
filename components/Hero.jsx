import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import AnchorLink from './AnchorLink';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <h1 className="mb-4" data-testid="hero-title">
      QA Hackaton Sample
    </h1>

    <p className="lead" data-testid="hero-lead">
      This website is create specifically for this Hackaton.
      Any feedback is greatly appreaciated. 
    </p>
  </div>
);

export default Hero;
