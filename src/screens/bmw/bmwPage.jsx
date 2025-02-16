
import React from 'react';
import './App.css'; // Keep this for base styles
import BMWLogo from '../../assets/Untitled.png'; // Import logo
import HeroImage from '../../assets/ac-00-teaser-hd2.jpg'; // Import hero image
import FactImage from '../../assets/ac-00-teaser-hd2.jpg'; // Import fact image
import QuizImage from '../../assets/ac-00-teaser-hd2.jpg'; // Import quiz image
import { BrowserRouter, Link } from 'react-router-dom'; // Import Link from React Router
import './bmwPage.css'; // Or your global CSS file

export function bmwPage() {
  return (
    
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header__row">
            <div className="header__logo-wrapper">
              <Link to="/" className="header__logo-link">
                <img src={BMWLogo} alt="BMW Logo" className="header__logo" />
              </Link>
              <div className="header__slogan">
                <span>
                  Sheer Driving <strong>Pleasure</strong>
                </span>
              </div>
            </div>

            <nav className="header__nav">
              <ul className="header__menu">
                <li className="header__menu-item">
                  <Link to="/" className="header__menu-link">
                    Home
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/circular-world" className="header__menu-link">
                    Circular World
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/digital-journey" className="header__menu-link">
                    Digital Journey
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/electric-future" className="header__menu-link">
                    Electric Future
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/freude" className="header__menu-link">
                    Freude
                  </Link>
                </li>
                <li className="header__menu-item">
                  <Link to="/models" className="header__menu-link">
                    Models
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="featured-content">
          <h2 className="section-title">Featured Content</h2>
          <div className="grid grid--3col">
            <div className="grid__item">
              <a href="/freude/colours-at-bmw" className="teaser">
                <img src={HeroImage} alt="BMW turns colours into an experience" className="teaser__image" />
                <div className="teaser__content">
                  <h3 className="teaser__title">BMW turns colours into an experience</h3>
                  <p className="teaser__subtitle">BMW explained</p>
                </div>
              </a>
            </div>
            <div className="grid__item">
              <a href="/freude/exciting-facts" className="teaser">
                <img src={FactImage} alt="Do you know these fascinating BMW facts?" className="teaser__image" />
                <div className="teaser__content">
                  <h3 className="teaser__title">Do you know these fascinating BMW facts?</h3>
                  <p className="teaser__subtitle">BMW history</p>
                </div>
              </a>
            </div>
            <div className="grid__item">
              <a href="/freude/bmw-silhouette-quiz" className="teaser">
                <img src={QuizImage} alt="Can you identify all the BMW models?" className="teaser__image" />
                <div className="teaser__content">
                  <h3 className="teaser__title">Can you identify all the BMW models?</h3>
                  <p className="teaser__subtitle">Quiz</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="section listicle-section">
          <h2 className="section-title">Learn everything about BMW here</h2>
          <div className="listicle">
            <p>
              This is a placeholder for listicle content. You can add image carousels and text here based on the original HTML.
            </p>
          </div>
        </section>

        <section className="section highlight-section">
          <h2 className="section-title">The BMW Podcast: Changing Lanes</h2>
          <div className="highlight">
            <p>
              This is a placeholder for podcast highlights. You can add carousels of podcast teasers here based on the original HTML.
            </p>
          </div>
        </section>

        <section className="section featured-models">
          <h2 className="section-title">All BMW Models</h2>
          <div className="grid grid--4col">
            <div className="grid__item">
              <a href="/models/model1" className="teaser">
                <img src="./assets/ac-00-teaser-hd2.jpg" alt="BMW Model 1" className="teaser__image" />
                <h3 className="teaser__title">BMW Model 1</h3>
              </a>
            </div>
            <div className="grid__item">
              <a href="/models/model2" className="teaser">
                <img src="./assets/ac-00-teaser-hd2.jpg4" alt="BMW Model 2" className="teaser__image" />
                <h3 className="teaser__title">BMW Model 2</h3>
              </a>
            </div>
            <div className="grid__item">
              <a href="/models/model3" className="teaser">
                <img src="./assets/ac-00-teaser-hd2.jpg" alt="BMW Model 3" className="teaser__image" />
                <h3 className="teaser__title">BMW Model 3</h3>
              </a>
            </div>
            <div className="grid__item">
              <a href="/models/model4" className="teaser">
                <img src="./assets/ac-00-teaser-hd2.jpg" alt="BMW Model 4" className="teaser__image" />
                <h3 className="teaser__title">BMW Model 4</h3>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© BMW AG 2025</p>
        </div>
      </footer>
    </div>

  );
}
