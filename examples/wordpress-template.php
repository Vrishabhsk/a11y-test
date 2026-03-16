<?php
/**
 * Template Name: Bad Accessibility Page
 * Description: A WordPress template with multiple accessibility violations
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        
        <!-- Violation: Image without alt text -->
        <div class="hero-section">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/hero-banner.jpg" 
                 width="1200" 
                 height="400">
        </div>

        <!-- Violation: Form without proper labels -->
        <div class="contact-form">
            <h2>Contact Us</h2>
            <form action="" method="post">
                <div class="form-field">
                    <span class="label">Your Name</span>
                    <input type="text" name="name" placeholder="Enter your name">
                </div>
                
                <div class="form-field">
                    <span class="label">Email Address</span>
                    <input type="email" name="email" placeholder="Enter your email">
                </div>
                
                <div class="form-field">
                    <span class="label">Message</span>
                    <textarea name="message" rows="5" placeholder="Your message"></textarea>
                </div>
                
                <!-- Violation: Button without type attribute -->
                <button>Submit Form</button>
            </form>
        </div>

        <!-- Violation: Link without href -->
        <div class="navigation">
            <a class="nav-link">Previous Post</a>
            <a class="nav-link">Next Post</a>
        </div>

        <!-- Violation: Table without proper headers -->
        <div class="pricing-table">
            <table>
                <tr>
                    <td>Basic Plan</td>
                    <td>$29/month</td>
                    <td>10GB Storage</td>
                </tr>
                <tr>
                    <td>Pro Plan</td>
                    <td>$59/month</td>
                    <td>50GB Storage</td>
                </tr>
                <tr>
                    <td>Enterprise</td>
                    <td>$99/month</td>
                    <td>Unlimited Storage</td>
                </tr>
            </table>
        </div>

        <!-- Violation: Clickable div without proper role -->
        <div class="accordion-header" onclick="toggleAccordion(this)">
            <span>Click to expand</span>
        </div>
        <div class="accordion-content" style="display: none;">
            <p>Hidden content here</p>
        </div>

        <!-- Violation: Social links without accessible names -->
        <div class="social-links">
            <a href="https://facebook.com" target="_blank">
                <i class="icon-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank">
                <i class="icon-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank">
                <i class="icon-instagram"></i>
            </a>
        </div>

        <!-- Violation: Empty heading -->
        <h3></h3>

        <!-- Violation: Multiple H1 tags -->
        <h1>Main Title</h1>
        <h1>Another Main Title</h1>

        <!-- Violation: Form input without associated label -->
        <div class="newsletter-signup">
            <p>Subscribe to our newsletter</p>
            <input type="email" name="newsletter_email" placeholder="Enter email">
            <button>Subscribe</button>
        </div>

        <!-- Violation: Image link without alt or text -->
        <a href="https://partner-site.com">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/partner-logo.png" width="150" height="50">
        </a>

        <!-- Violation: Select without label -->
        <div class="country-selector">
            <select name="country">
                <option value="">Select Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
            </select>
        </div>

        <!-- Violation: Low contrast text -->
        <p style="color: #cccccc; background-color: #ffffff;">
            This text has insufficient contrast and is hard to read
        </p>

        <!-- Violation: Interactive element without keyboard support -->
        <div class="custom-dropdown" tabindex="0" onclick="openDropdown()">
            Select Option
        </div>

        <!-- Violation: Required field not indicated -->
        <form class="registration-form">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Register</button>
        </form>

    </main>
</div>

<script>
function toggleAccordion(element) {
    var content = element.nextElementSibling;
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function openDropdown() {
    // Dropdown logic here
}
</script>

<?php get_footer(); ?>