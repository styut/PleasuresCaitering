
import React from 'react';
import '../style/home.css';
import { Link } from 'react-router-dom';


export const Home = () => {
  return <div>
    <html>
      <head>
        <title>Briact Catering</title>
      </head>
      <body>

        <section class="hero">
          <h1>Welcome to pleasures Catering</h1>
          <p>Delicious food for all your special occasions</p>
          <button class="cta-button"><Link to={'/menu'}>Book Now</Link></button>
        </section>
        <footer>
        </footer>
      </body>
    </html>
  </div>
}