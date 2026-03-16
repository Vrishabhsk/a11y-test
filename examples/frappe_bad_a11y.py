# -*- coding: utf-8 -*-
# Copyright (c) 2024, Your Company and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class BadAccessibilityWebPage(Document):
    """A Frappe DocType with accessibility violations"""
    
    def get_context(self, context):
        """Prepare context for rendering - includes a11y violations"""
        context.no_cache = 1
        
        # Violation: No proper page title
        context.title = ""
        
        # Violation: No meta description
        context.meta_description = None
        
        # Violation: Images without alt text
        context.hero_image = {
            "src": "/assets/bad_a11y/images/hero.jpg",
            "width": 1200,
            "height": 400
            # Missing alt
        }
        
        # Violation: Form fields without labels
        context.contact_form = {
            "fields": [
                {"name": "full_name", "type": "text", "placeholder": "Enter name"},
                {"name": "email", "type": "email", "placeholder": "Enter email"},
                {"name": "phone", "type": "tel", "placeholder": "Enter phone"},
            ]
        }
        
        # Violation: Table without headers
        context.pricing_data = [
            ["Basic", "$10", "5GB"],
            ["Pro", "$25", "25GB"],
            ["Enterprise", "$50", "Unlimited"]
        ]
        
        # Violation: Links without text
        context.social_links = [
            {"url": "https://facebook.com", "icon": "facebook"},
            {"url": "https://twitter.com", "icon": "twitter"},
            {"url": "https://linkedin.com", "icon": "linkedin"}
        ]
        
        return context

@frappe.whitelist(allow_guest=True)
def get_bad_form_html():
    """Returns HTML with accessibility violations"""
    
    html = """
    <div class="bad-form-container">
        <!-- Violation: Form without proper labels -->
        <form id="contactForm" method="post">
            <div class="form-group">
                <span class="field-label">Full Name</span>
                <input type="text" name="full_name" class="form-control" 
                       placeholder="Enter your full name">
            </div>
            
            <div class="form-group">
                <span class="field-label">Email</span>
                <input type="email" name="email" class="form-control"
                       placeholder="Enter your email">
            </div>
            
            <div class="form-group">
                <span class="field-label">Country</span>
                <select name="country" class="form-control">
                    <option value="">Select</option>
                    <option value="us">USA</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            
            <!-- Violation: Button without type -->
            <button class="btn btn-primary">Submit</button>
        </form>
        
        <!-- Violation: Clickable div -->
        <div class="expandable-section" onclick="toggleSection(this)">
            <span>Click to expand details</span>
        </div>
        <div class="section-content" style="display: none;">
            <p>Hidden content</p>
        </div>
        
        <!-- Violation: Image without alt -->
        <img src="/assets/bad_a11y/images/product.jpg" width="300" height="200">
        
        <!-- Violation: Link without href -->
        <a class="back-link">Go Back</a>
        
        <!-- Violation: Table without headers -->
        <table class="data-table">
            <tr>
                <td>Item 1</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>Item 2</td>
                <td>$200</td>
            </tr>
        </table>
        
        <!-- Violation: Empty heading -->
        <h3></h3>
        
        <!-- Violation: Multiple H1 tags -->
        <h1>First Title</h1>
        <h1>Second Title</h1>
        
        <!-- Violation: Low contrast text -->
        <p style="color: #eeeeee; background-color: #ffffff;">
            Low contrast text
        </p>
        
        <!-- Violation: Required field not indicated -->
        <div class="required-fields">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
        </div>
        
        <!-- Violation: Social links without accessible names -->
        <div class="social-share">
            <a href="https://facebook.com/share" target="_blank">
                <i class="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com/share" target="_blank">
                <i class="fa fa-twitter"></i>
            </a>
        </div>
        
        <!-- Violation: Custom dropdown without keyboard support -->
        <div class="custom-select" tabindex="0" onclick="openSelect()">
            Select an option
        </div>
        
    </div>
    
    <script>
        function toggleSection(element) {
            var content = element.nextElementSibling;
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        }
        
        function openSelect() {
            // Dropdown logic
        }
    </script>
    """
    
    return html


class BadAccessibilityItem(Document):
    """Another DocType with a11y issues in its methods"""
    
    def generate_html_list(self, items):
        """Generates HTML list without proper accessibility"""
        html = "<ul>"
        for item in items:
            # Violation: List item with click handler but no keyboard support
            html += f'''
                <li onclick="selectItem('{item.name}')">
                    {item.item_name}
                </li>
            '''
        html += "</ul>"
        return html
    
    def generate_product_card(self, product):
        """Generates product card with a11y violations"""
        return f"""
        <div class="product-card" onclick="viewProduct('{product.name}')">
            <!-- Violation: Image without alt -->
            <img src="{product.image}" width="200" height="200">
            
            <!-- Violation: Heading level skip -->
            <h4>{product.item_name}</h4>
            
            <p>{product.description}</p>
            
            <!-- Violation: Button without type -->
            <button class="add-to-cart">Add to Cart</button>
        </div>
        """
    
    def generate_data_table(self, data):
        """Generates table without proper headers"""
        html = "<table class='data-table'>"
        for row in data:
            html += "<tr>"
            for cell in row:
                # Violation: Using td instead of th for headers
                html += f"<td>{cell}</td>"
            html += "</tr>"
        html += "</table>"
        return html
    
    def generate_navigation(self, menu_items):
        """Generates navigation with a11y issues"""
        html = "<nav>"
        for item in menu_items:
            # Violation: Link without href
            html += f'''
                <a class="nav-item" onclick="navigateTo('{item.url}')">
                    {item.label}
                </a>
            '''
        html += "</nav>"
        return html


# Hook that generates bad HTML
def generate_bad_footer():
    """Generates footer with accessibility violations"""
    return """
    <footer>
        <!-- Violation: Social links without text -->
        <div class="social-links">
            <a href="https://facebook.com">
                <img src="/assets/facebook.png" width="24" height="24">
            </a>
            <a href="https://twitter.com">
                <img src="/assets/twitter.png" width="24" height="24">
            </a>
        </div>
        
        <!-- Violation: Form without labels -->
        <div class="newsletter">
            <input type="email" placeholder="Subscribe to newsletter">
            <button>Subscribe</button>
        </div>
        
        <!-- Violation: Low contrast copyright text -->
        <p style="color: #999999;">
            &copy; 2024 Your Company. All rights reserved.
        </p>
    </footer>
    """