import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <>
      {/* VIOLATION: No skip navigation link (SC 2.4.1) */}
      {/* VIOLATION: No landmark roles, using divs instead of nav/main/header/footer */}

      {/* VIOLATION: Using div instead of <header> (SC 1.3.1) */}
      <div className="site-header">
        {/* VIOLATION: Logo image without alt text (SC 1.1.1) */}
        <img src={heroImg} className="site-logo" width="40" height="40" />

        {/* VIOLATION: Navigation built with divs, no <nav> or role (SC 1.3.1) */}
        <div className="nav-links">
          {/* VIOLATION: Links without href (SC 2.1.1, SC 4.1.2) */}
          <a className="nav-link">Home</a>
          <a className="nav-link">About</a>
          <a className="nav-link">Services</a>
          <a className="nav-link">Contact</a>
        </div>

        {/* VIOLATION: Hamburger menu - icon-only button without accessible name (SC 4.1.2) */}
        <div
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* VIOLATION: Mobile menu with no focus trap, no ESC key handling (SC 2.1.1, SC 2.1.2) */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a>Home</a>
          <a>About</a>
          <a>Services</a>
          <a>Contact</a>
        </div>
      )}

      <section id="center">
        <div className="hero">
          {/* VIOLATION: Decorative image missing alt="" or role="presentation" (SC 1.1.1) */}
          <img src={heroImg} className="base" width="170" height="179" />
          {/* VIOLATION: Informative images with empty alt (SC 1.1.1) */}
          <img src={reactLogo} className="framework" alt="" />
          <img src={viteLogo} className="vite" alt="" />
        </div>
        <div>
          {/* VIOLATION: Skipped heading level - h1 to h3 (SC 1.3.1) */}
          <h3>Get started</h3>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
            {/* VIOLATION: Link without href (SC 2.1.1) */}
            <a>Another one</a>
          </p>
        </div>

        {/* VIOLATION: Tiny touch target below 24x24px minimum (SC 2.5.8 WCAG 2.2) */}
        <button
          className="counter tiny-button"
          onClick={() => setCount((count) => count + 1)}
          style={{ padding: '2px 4px', fontSize: '10px', minWidth: '16px', minHeight: '16px' }}
        >
          Count is {count}
        </button>
      </section>

      {/* VIOLATION: Tab interface without proper ARIA roles (SC 4.1.2) */}
      <div className="tabs-container">
        {/* VIOLATION: No role="tablist" (SC 4.1.2) */}
        <div className="tab-buttons">
          {/* VIOLATION: Tabs built with divs, no role="tab", no aria-selected, no arrow key navigation (SC 2.1.1, SC 4.1.2) */}
          <div
            className={`tab ${selectedTab === 0 ? 'active' : ''}`}
            onClick={() => setSelectedTab(0)}
          >
            Features
          </div>
          <div
            className={`tab ${selectedTab === 1 ? 'active' : ''}`}
            onClick={() => setSelectedTab(1)}
          >
            Pricing
          </div>
          <div
            className={`tab ${selectedTab === 2 ? 'active' : ''}`}
            onClick={() => setSelectedTab(2)}
          >
            FAQ
          </div>
        </div>

        {/* VIOLATION: Tab panels without role="tabpanel" or aria-labelledby (SC 4.1.2) */}
        <div className="tab-content">
          {selectedTab === 0 && (
            <div>
              <h4>Features</h4>
              <p>Our amazing features include:</p>
              {/* VIOLATION: List of items using divs instead of ul/li (SC 1.3.1) */}
              <div className="feature-list">
                <div className="feature-item">Fast performance</div>
                <div className="feature-item">Easy to use</div>
                <div className="feature-item">Reliable</div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div>
              {/* VIOLATION: Multiple h1s on page (SC 1.3.1) */}
              <h1>Pricing Plans</h1>

              {/* VIOLATION: Pricing table without proper headers (SC 1.3.1) */}
              <table>
                <tr>
                  <td><b>Plan</b></td>
                  <td><b>Price</b></td>
                  <td><b>Features</b></td>
                </tr>
                <tr>
                  <td>Basic</td>
                  <td>$9.99</td>
                  <td>5 users</td>
                </tr>
                <tr>
                  <td>Pro</td>
                  <td>$29.99</td>
                  <td>Unlimited users</td>
                </tr>
              </table>
            </div>
          )}
          {selectedTab === 2 && (
            <div>
              <h4>FAQ</h4>
              {/* VIOLATION: Accordion with non-interactive divs (SC 2.1.1, SC 4.1.2) */}
              <div className="faq-item" onClick={() => alert('toggle')}>
                <div className="faq-question">What is this product?</div>
                <div className="faq-answer">A great product!</div>
              </div>
              <div className="faq-item" onClick={() => alert('toggle')}>
                <div className="faq-question">How do I sign up?</div>
                <div className="faq-answer">Click the button above.</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="ticks"></div>

      {/* VIOLATION: Contact form section with many a11y issues */}
      <section id="contact-form">
        {/* VIOLATION: Heading hierarchy skip - h2 to h5 (SC 1.3.1) */}
        <h5>Contact Us</h5>

        {/* VIOLATION: Form without fieldset/legend for grouped controls (SC 1.3.1) */}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* VIOLATION: Inputs without associated labels (SC 1.3.1, SC 4.1.2) */}
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="tel" placeholder="Phone number" />

          {/* VIOLATION: Select without label (SC 4.1.2) */}
          <select>
            <option value="">Choose a topic...</option>
            <option value="sales">Sales</option>
            <option value="support">Support</option>
          </select>

          {/* VIOLATION: Textarea without label (SC 4.1.2) */}
          <textarea placeholder="Your message" rows={4}></textarea>

          {/* VIOLATION: Required fields with no programmatic indication (SC 1.3.1) */}
          {/* VIOLATION: Error messages not associated with inputs (SC 1.3.1) */}
          <span style={{ color: 'red', fontSize: '10px' }}>* Required fields</span>

          {/* VIOLATION: Checkbox without label (SC 1.3.1, SC 4.1.2) */}
          <div>
            <input type="checkbox" />
            <span>I agree to the terms</span>
          </div>

          {/* VIOLATION: Radio buttons without fieldset/legend and without labels (SC 1.3.1) */}
          <div>
            <input type="radio" name="contact-method" value="email" />
            <span>Email</span>
            <input type="radio" name="contact-method" value="phone" />
            <span>Phone</span>
          </div>

          {/* VIOLATION: Submit button with generic text (SC 2.4.6) */}
          <button type="submit">Submit</button>
        </form>
      </section>

      <div className="ticks"></div>

      {/* VIOLATION: Image gallery with no alt text (SC 1.1.1) */}
      <section id="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="/gallery/photo1.jpg" />
          <img src="/gallery/photo2.jpg" />
          <img src="/gallery/photo3.jpg" />
          <img src="/gallery/photo4.jpg" />
          {/* VIOLATION: Image used as link without alt text (SC 1.1.1, SC 2.4.4) */}
          <a href="/gallery/photo5.jpg">
            <img src="/gallery/photo5.jpg" />
          </a>
        </div>
      </section>

      {/* VIOLATION: Carousel/slider with no keyboard controls (SC 2.1.1) */}
      <section id="testimonials">
        <h2>What People Say</h2>
        {/* VIOLATION: Auto-rotating content with no pause mechanism (SC 2.2.2) */}
        <div className="carousel" data-autoplay="true">
          {/* VIOLATION: Using divs for quotes instead of <blockquote> (SC 1.3.1) */}
          <div className="slide">
            <div className="quote-text">"Amazing product, highly recommend!"</div>
            <div className="quote-author">- Jane D.</div>
          </div>
        </div>
        {/* VIOLATION: Carousel dots as non-interactive spans (SC 2.1.1, SC 4.1.2) */}
        <div className="carousel-dots">
          <span className="dot active" onClick={() => {}}></span>
          <span className="dot" onClick={() => {}}></span>
          <span className="dot" onClick={() => {}}></span>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              {/* VIOLATION: target="_blank" without rel="noopener" and no new window warning (SC 3.2.5) */}
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              {/* VIOLATION: Social links with icon-only content, no accessible name (SC 2.4.4, SC 4.1.2) */}
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg className="button-icon" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg className="button-icon" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg className="button-icon" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg className="button-icon" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      {/* VIOLATION: Footer using div instead of <footer> (SC 1.3.1) */}
      <div className="site-footer">
        {/* VIOLATION: Low contrast text (SC 1.4.3) */}
        <p style={{ color: '#cccccc', backgroundColor: '#ffffff' }}>
          &copy; 2024 My Company. All rights reserved.
        </p>
        {/* VIOLATION: Links with same text "Click here" (SC 2.4.4) */}
        <div className="footer-links">
          <a href="/privacy">Click here</a>
          <a href="/terms">Click here</a>
          <a href="/cookies">Click here</a>
        </div>
        {/* VIOLATION: Empty heading (SC 1.3.1) */}
        <h3></h3>
      </div>
    </>
  )
}

export default App
