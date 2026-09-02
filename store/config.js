/**
 * FormDock E-Commerce Runtime Configuration
 * 
 * Edit this file to change shop credentials, shop title, colors, buttons, UI image URLs,
 * typography, layout controls, currency, contact info, or toggle Demo Mode (demo: true / demo: false)
 * at runtime without needing to recompile!
 */
window.APP_CONFIG = {
  // Demo Mode: Set to true to show demo products, set to false to fetch only from backend API
  demo: true,

  // Store Credentials & API Keys
  apiBaseUrl: "https://api.formdock.in",
  shopName: "ShopHub",
  shopApiKey: "fd_live_sample_key_12345",
  enquiryApiKey: "fd_live_sample_key_12345", // FormDock Public API Key for enquiry form submissions

  // Theme & Colors (Change hex colors to customize the UI instantly)
  heroSectionColor: "#f4ede4",        // Warm cream hero section background
  uiColor: "#111827",                 // Main text / accent color (dark charcoal)
  
  // Button Colors
  buttonColor: "#111827",             // Primary button background color
  buttonTextColor: "#ffffff",         // Primary button text color
  secondaryButtonBg: "#ffffff",       // Secondary button background color
  secondaryButtonText: "#111827",     // Secondary button text color

  // Custom Badge & Footer Colors
  badgeBgColor: "#ef4444",            // Stock / badge background color
  badgeTextColor: "#ffffff",          // Stock / badge text color
  footerBgColor: "#ffffff",           // Footer background color
  footerTextColor: "#6b7280",         // Footer text color

  // UI Image Customization
  // You can use full web URLs (https://...) OR filenames in the same folder (e.g. "logo.png", "hero.jpg")
  shopLogoUrl: "",                    // Custom logo image path or filename (e.g., "logo.png")
  heroImageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&auto=format&fit=crop&q=80",  // Hero image path or filename e.g. "hero.png"
  heroBgImageUrl: "",                 // Optional background image path/URL for hero section
  defaultProductImageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=80", // Fallback product image path or filename

  // Hero Section Content
  heroTagText: "SUMMER SALE",
  heroTitle: "Discover the Best Products for You",
  heroSubtitle: "Shop top-quality products at unbeatable prices. New arrivals every week!",
  announcementText: "Free shipping on orders over $50!",

  // Feature & Trust Badges Content
  feature1Title: "Free Shipping",
  feature1Desc: "On orders over $50",
  feature2Title: "30-Day Returns",
  feature2Desc: "Hassle-free returns",
  feature3Title: "Secure Payment",
  feature3Desc: "100% secure checkout",
  feature4Title: "24/7 Support",
  feature4Desc: "We're here to help",

  // Enquiry Section Content
  enquiryTitle: "Send Us an Enquiry",
  enquirySubtitle: "Have questions or need assistance? Fill out the form below and our team will get back to you promptly.",

  // Typography & Fonts
  fontFamily: "Inter, system-ui, -apple-system, sans-serif", // Base font family
  baseFontSize: "16px",               // Base typography scaling (e.g., "14px", "16px", "18px")
  headingFontWeight: "800",           // Heading font weight (e.g., "600", "700", "800", "900")

  // Layout & Container Customization
  borderRadius: "8px",                // Global border radius (e.g., "0px", "8px", "16px", "24px")
  cardShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", // Card drop shadow
  productsPerRow: 4,                  // Products grid columns on desktop (3, 4, or 5)
  containerMaxWidth: "1280px",        // Max width of main page containers

  // UI Element & Feature Toggles
  showAnnouncementBar: true,          // Toggle top announcement bar on/off
  showTrustBadges: true,              // Toggle trust badges section on/off
  showWishlistButton: true,           // Toggle wishlist heart buttons on product cards
  showStockBadges: true,              // Toggle stock status tags on product cards
  stickyNavbar: true,                 // Toggle sticky header navigation

  // Currency & Price Formatting
  currencySymbol: "$",                // Currency symbol (e.g. "$", "€", "£", "₹", "AED")
  currencyPosition: "prefix",         // Currency symbol position: "prefix" ($99) or "suffix" (99 €)
  priceDecimalDigits: 2,              // Number of decimal places in price display

  // Contact Info & Social Media Links
  supportEmail: "support@shophub.com",
  supportPhone: "+1 (800) 555-0199",
  whatsappNumber: "",                 // Optional WhatsApp number for quick chat (e.g., "+15550123456")
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com",
  twitterUrl: "https://x.com",

  // Coupon System Settings
  enableCoupons: true,                // Enable/disable discount coupon code field in checkout
  sampleCoupons: "SAVE10, WELCOME20"  // Sample promo codes suggested to users in checkout UI
};
