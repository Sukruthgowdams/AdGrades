// src/components/Layout/Footer.jsx
import React from 'react';
import { Container } from '../CommonLayout/Container';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <Container className="text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Adymiz. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};