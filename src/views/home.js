import React from 'react'

import { Helmet } from 'react-helmet'

import SlideShow from '../components/slide-show'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Queasy Defensive Quetzal</title>
        <meta property="og:title" content="Queasy Defensive Quetzal" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">
            <span className="home-text">ZIŅAS</span>
            <br></br>
          </span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span>
                <span className="home-text02">Sākums</span>
                <br></br>
              </span>
              <span className="home-nav2">Par mums</span>
              <span className="home-nav3">Kontakti</span>
            </nav>
            <div className="home-buttons">
              <input type="text" placeholder="Meklēt 🔎" className="input" />
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">NEWS</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">Home</span>
                <span className="home-nav21">News</span>
                <span className="home-nav31">Categories</span>
                <span className="home-nav4">About</span>
                <span className="home-nav5">Contact</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login button">Login</button>
                <button className="home-register button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <h1 className="home-hero-heading heading1">
            <span>Latvijā viss </span>
            <span>kārtībā</span>
          </h1>
          <button type="button" className="home-button button">
            <span>
              <span>Pieteikties</span>
              <br></br>
            </span>
          </button>
          <span className="home-hero-sub-heading">
            <span className="home-text09">Kārtējā diena, kad Latvijā</span>
            <br></br>
            <span>viss noslēdzies veiksmīgi</span>
            <br></br>
          </span>
          <button
            name="Lasīt vairāk"
            type="button"
            className="home-last-vairk button"
          >
            <span>
              <span>Lasīt vairāk</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="home-button1 button">
            <span>
              <span>Pieteikties</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="home-button2 button">
            <span>
              <span>Pirkt</span>
              <br></br>
            </span>
          </button>
          <button type="button" className="home-button3 button">
            <span>
              <span>Izmēģināt</span>
              <br></br>
            </span>
          </button>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHNwb3J0fGVufDB8fHx8MTcwMTUyNDc4Mnww&amp;ixlib=rb-4.0.3&amp;w=300"
            className="home-image"
          />
          <span className="home-text25">
            <span>Latvijas sportistiem šodien</span>
            <br></br>
            <span>dažādās distancēs veicies</span>
            <br></br>
            <span>ļoti labi!</span>
            <br></br>
          </span>
          <span className="home-text32">
            <span>Karš aizvien nav sācies</span>
            <br></br>
          </span>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHdhcnxlbnwwfHx8fDE3MDE1MjQ3OTN8MA&amp;ixlib=rb-4.0.3&amp;w=300"
            className="home-image1"
          />
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGNhcnxlbnwwfHx8fDE3MDE1MjQ2MzR8MA&amp;ixlib=rb-4.0.3&amp;w=300"
            className="home-image2"
          />
          <span className="home-text35">
            <span>Ceļi ir salaboti, tādā veidā</span>
            <br></br>
            <span>samazinot potenciālos </span>
            <br></br>
            <span>tēriņus mašīnu remontam</span>
            <br></br>
          </span>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            Lasīt vairāk
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1"
          >
            Lasīt vairāk
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            Lasīt vairāk
          </a>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container1">
              <span className="home-text42 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Investē akciju tirgū
              </h2>
              <span className="home-features-sub-heading">
                Iespējams sākt tikai no 50 EUR
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <SlideShow rootClassName="slide-show-root-class-name"></SlideShow>
          <div className="home-container2">
            <h2 className="home-pricing-heading heading2">
              Apskati bildes no citām valstīm :)
            </h2>
          </div>
        </div>
      </div>
      <div className="home-gallery"></div>
      <div className="home-banner"></div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container3">
              <div className="home-container4">
                <div className="home-container5">
                  <div className="home-feature-card">
                    <h2 className="home-text45">Statistika</h2>
                    <span className="home-text46">
                      Laiks aplūkot dažādus interesantus datus par Latviju - tie
                      mums palīdzēs labāk saprast patieso situāciju šajā valstī.
                    </span>
                  </div>
                </div>
                <ul className="list">
                  <li className="list-item">
                    <span>• Pirmajā rindkopā redzam iedzīvotāju skaitu</span>
                  </li>
                  <li className="list-item">
                    <span>
                      • Otrajā kolonā iespējams aplūkot Latvijas izmēru
                    </span>
                  </li>
                  <li className="list-item">
                    <span>• Trešajā kolonā olimpisko spēļu medaļas</span>
                  </li>
                </ul>
              </div>
              <textarea
                placeholder="Dati"
                className="home-textarea textarea"
              ></textarea>
            </div>
            <div className="home-container6"></div>
            <span className="home-text50">
              <span>1 000 000 (1918)</span>
              <br></br>
              <br></br>
              <br></br>
              <span>1 500 000 (1958)</span>
              <br></br>
              <br></br>
              <br></br>
              <span>2 000 000 (2012)</span>
              <br></br>
            </span>
            <span className="home-text61">
              <span>3 (1918)</span>
              <br></br>
              <br></br>
              <br></br>
              <span>0 (1958)</span>
              <br></br>
              <br></br>
              <br></br>
              <span>12 (2012)</span>
              <br></br>
            </span>
            <span className="home-text72">
              <span>64,559 km2 (1918)</span>
              <br></br>
              <br></br>
              <br></br>
              <span>0 km2 (1958)</span>
              <br></br>
              <br></br>
              <br></br>
              <span>64,559 km2 (2012)</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <span className="home-logo2">
        <span className="home-text83">ZIŅAS</span>
        <br></br>
      </span>
      <div className="home-footer">
        <footer className="home-footer1">
          <span className="home-logo3">
            <span className="home-text85">ZIŅAS</span>
            <br></br>
          </span>
          <span className="home-logo4">Kontakti:</span>
          <div className="home-container7">
            <span className="home-logo5">Izvēlne</span>
            <nav className="home-nav1 home-nav1">
              <span className="home-nav12">
                E-pasts: estere.alksne@gmail.com
              </span>
            </nav>
          </div>
          <span className="home-nav51">Tel: +371 29396335</span>
          <div className="home-separator"></div>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            Par mums
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link4"
          >
            Sākums
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link5"
          >
            <span>Kontakti</span>
            <br></br>
            <br></br>
          </a>
          <div className="home-container8"></div>
        </footer>
      </div>
      <a href="https://example.com" target="_blank" rel="noreferrer noopener">
        Link
      </a>
      <footer className="home-footer2">
        <span className="home-text90">Autors: Estere Alksne</span>
        <div className="home-icon-group1"></div>
      </footer>
    </div>
  )
}

export default Home
