import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page description',
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
