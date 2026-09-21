/**
 * Business Landing Page - Runtime Configuration
 * 
 * Edit this file to alter the visual look, color theme, typography, layout presets,
 * section ordering, section toggles, logo, images, shop URL, and ALL text contents AT RUNTIME!
 * 
 * You can edit this file before compilation in public/config.js OR after compilation in dist/config.js!
 */
window.APP_CONFIG = {
  // ==========================================
  // 1. BRANDING & BUSINESS DETAILS
  // ==========================================
  shopName: "ShopHub",
  tagline: "Discover the Best Products for You",
  
  // URL of your real online shop / storefront (e.g. "https://your-online-store.com" or "#categories")
  // Set to an external URL (https://...) to open your real shop, OR set to "#categories" to stay on this landing page!
  shopStorefrontUrl: "#categories",
  
  // Logo image URL (full web URL like https://... OR local filename like "logo.png" in public/dist)
  // Leave empty ("") to automatically display shopName text with brand icon.
  shopLogoUrl: "",
  logoHeight: "38px",
  
  // Contact & Location Details
  supportEmail: "support@shophub.com",
  supportPhone: "+1 (800) 555-0199",
  whatsappNumber: "",
  businessAddress: "742 Evergreen Terrace, Suite 100, San Francisco, CA 94107",
  googleMapsUrl: "https://maps.google.com",
  googleMapsUrlText: "View on Google Maps →",
  businessHours: "Mon - Sat: 9:00 AM - 7:00 PM EST | Sunday: Closed",

  // ==========================================
  // 2. COLOR THEME & PALETTE (Storefront Defaults)
  // ==========================================
  // Change hex colors to transform the landing page look instantly!
  heroSectionColor: "#f4ede4",      // Warm cream hero background (matching storefront)
  uiColor: "#111827",               // Main text & accent color (dark charcoal)
  primaryColor: "#111827",         // Primary brand color
  secondaryColor: "#111827",       // Secondary accent color
  accentColor: "#f59e0b",          // Rating star highlight color (Warm Amber)
  
  heroBgColor: "#f4ede4",          // Background color for hero section
  lightSectionBg: "#ffffff",       // Background for light sections
  altSectionBg: "#f9fafb",         // Background for alternating sections
  darkSectionBg: "#111827",        // Background for dark CTA sections
  
  textColor: "#111827",            // Main body text color
  mutedTextColor: "#6b7280",       // Subtitle & muted text color
  borderColor: "#e5e7eb",          // Card border and divider color
  cardBgColor: "#ffffff",          // Background color for cards

  // Button Customization
  buttonColor: "#111827",           // Primary button background color
  buttonBgColor: "#111827",        // Primary button background
  buttonTextColor: "#ffffff",      // Primary button text color
  buttonHoverBg: "#1f2937",        // Primary button hover state
  secondaryButtonBg: "#ffffff",    // Secondary button background
  secondaryButtonText: "#111827",  // Secondary button text color
  secondaryButtonBorder: "#d1d5db",// Secondary button border color

  // Badges & Accents
  badgeBgColor: "#ef4444",         // Stock / sale badge background
  badgeTextColor: "#ffffff",       // Stock / sale badge text
  announcementBg: "#111827",       // Top announcement bar background
  announcementTextColor: "#ffffff",// Top announcement bar text color
  footerBgColor: "#ffffff",        // Footer background color (matching storefront)
  footerTextColor: "#6b7280",      // Footer text color

  // ==========================================
  // 3. TYPOGRAPHY & STYLING (Storefront Defaults)
  // ==========================================
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  baseFontSize: "16px",
  headingFontWeight: "800",
  borderRadius: "8px",             // Global border radius (matching storefront)
  cardShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", // Card shadow (matching storefront)
  containerMaxWidth: "1280px",     // Max width of main page containers
  stickyNavbar: true,

  // ==========================================
  // 4. LAYOUT PRESETS & SECTION TOGGLES
  // ==========================================
  heroLayout: "split",             // "split" (text + image) or "centered" (focused header)
  featuresLayout: "grid",          // "grid" or "cards"
  categoryColumns: 4,              // 2, 3, or 4 category cards per row
  footerTheme: "light",

  // Section Order: Drag or reorder array elements to change page layout sequence!
  sectionOrder: [
    "announcementBar",
    "navbar",
    "hero",
    "stats",
    "features",
    "storefrontBanner",
    "categories",
    "aboutBusiness",
    "testimonials",
    "faq",
    "enquiry",
    "cta",
    "footer"
  ],

  // Section Visibility Toggles (Set true to display section, false to hide section)
  showAnnouncementBar: true,
  showNavbar: true,
  showHero: true,
  showStats: true,
  showFeatures: true,
  showStorefrontBanner: true,
  showCategories: true,
  showAboutBusiness: true,
  showTestimonials: true,
  showFaq: true,
  showEnquiry: true,
  showCta: true,
  showFooter: true,

  // ==========================================
  // 5. ANNOUNCEMENT BAR CONTENT
  // ==========================================
  announcementText: "Free shipping on orders over $50!",
  announcementLinkText: "View Products Below →",
  announcementLinkUrl: "#categories",

  // ==========================================
  // 6. HEADER / NAVBAR CONTENT
  // ==========================================
  navLinks: [
    { label: "Why Us", href: "#features" },
    { label: "Showcase", href: "#storefront" },
    { label: "Categories", href: "#categories" },
    { label: "About Us", href: "#about" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#enquiry" }
  ],
  headerCtaText: "Explore Products 🛍️",
  headerCtaUrl: "#categories",

  // ==========================================
  // 7. HERO SECTION CONTENT
  // ==========================================
  heroTagText: "SUMMER SALE",
  heroTitle: "Discover the Best Products for You",
  heroSubtitle: "Shop top-quality products at unbeatable prices. New arrivals every week!",
  heroPrimaryBtnText: "Explore Categories 🛍️",
  heroPrimaryBtnUrl: "#categories",
  heroSecondaryBtnText: "Contact Us / Enquire",
  heroSecondaryBtnUrl: "#enquiry",
  heroImageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&auto=format&fit=crop&q=80",
  heroBadgeText: "★ 4.9/5 rated business • 25,000+ satisfied customers",

  // ==========================================
  // 8. STATS / TRUST BADGES CONTENT
  // ==========================================
  stats: [
    { number: "25,000+", label: "Happy Customers", icon: "users" },
    { number: "4.9 / 5", label: "Customer Rating", icon: "star" },
    { number: "100%", label: "Satisfaction Guaranteed", icon: "leaf" },
    { number: "24/7", label: "Support Available", icon: "badge" }
  ],

  // ==========================================
  // 9. BUSINESS FEATURES / ADVANTAGES CONTENT
  // ==========================================
  featuresTag: "WHY CHOOSE SHOPHUB",
  featuresTitle: "Quality Craftsmanship & Reliable Service",
  featuresSubtitle: "Here is why thousands of customers trust ShopHub for their daily essential needs.",
  features: [
    {
      icon: "truck",
      title: "Free Shipping",
      description: "On orders over $50 with live tracking."
    },
    {
      icon: "rotate",
      title: "30-Day Returns",
      description: "Hassle-free returns and money back guarantee."
    },
    {
      icon: "lock",
      title: "Secure Payment",
      description: "100% secure checkout supporting major credit cards."
    },
    {
      icon: "headphone",
      title: "24/7 Support",
      description: "We're here to help round-the-clock for any assistance."
    }
  ],

  // ==========================================
  // 10. ONLINE STOREFRONT BANNER SECTION CONTENT
  // ==========================================
  storefrontTag: "FEATURED CATALOGUE",
  storefrontTitle: "Explore Our Product Collections",
  storefrontSubtitle: "Ready to discover our top items? Browse our available product categories below or send us a direct enquiry for custom requests.",
  storefrontBtnText: "View Product Categories 🚀",
  storefrontBtnUrl: "#categories",
  storefrontImageUrl: "https://images.unsplash.com/photo-1556742049-0a670fc80789?w=800&auto=format&fit=crop&q=80",

  // ==========================================
  // 11. FEATURED CATEGORIES PREVIEW CONTENT
  // ==========================================
  categoriesTag: "WHAT WE OFFER",
  categoriesTitle: "Explore Our Core Product Categories",
  categoriesSubtitle: "Here is a preview of our specialty product lines available at ShopHub.",
  categoryCardBtnText: "Enquire About Category →",
  categories: [
    {
      id: "cat-1",
      name: "Electronics & Wearables",
      itemCount: "35+ Products Available",
      description: "Noise-canceling headphones, smartwatch series, and high-fidelity audio gear.",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
      badge: "Bestseller",
      btnText: "Enquire About Category →",
      btnUrl: "#enquiry"
    },
    {
      id: "cat-2",
      name: "Fashion & Footwear",
      itemCount: "40+ Products Available",
      description: "Minimalist casual sneakers, canvas backpacks, and denim jacket collections.",
      imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
      badge: "Trending",
      btnText: "Enquire About Category →",
      btnUrl: "#enquiry"
    },
    {
      id: "cat-3",
      name: "Lifestyle & Decor",
      itemCount: "25+ Products Available",
      description: "Minimalist ceramic pots, botanical fragrances, and home desk lighting.",
      imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80",
      badge: "Popular",
      btnText: "Enquire About Category →",
      btnUrl: "#enquiry"
    },
    {
      id: "cat-4",
      name: "Men's & Women's Wear",
      itemCount: "30+ Products Available",
      description: "Floral summer dresses, classic outerwear, and casual apparel.",
      imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80",
      badge: "New",
      btnText: "Enquire About Category →",
      btnUrl: "#enquiry"
    }
  ],

  // ==========================================
  // 12. ABOUT THE BUSINESS CONTENT
  // ==========================================
  aboutTag: "ABOUT SHOPHUB",
  aboutTitle: "Discover the Best Products for You",
  aboutSubtitle: "Founded with a mission to deliver top-quality products at unbeatable prices, ShopHub brings you new arrivals every week.",
  aboutParagraph1: "We curate premium items directly from trusted manufacturers and suppliers around the globe. By keeping overhead low and maintaining high standards, we deliver exceptional products at fair prices.",
  aboutParagraph2: "Whether you are looking for electronics, fashion, or lifestyle essentials, our team is dedicated to providing an outstanding shopping experience.",
  aboutPoints: [
    "Over 5 years of e-commerce retail excellence",
    "100% satisfaction & quality guarantee",
    "Fast delivery with live tracking on all orders"
  ],
  aboutImageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80",
  aboutQuoteText: '"Our mission is to bring top-quality products to your doorstep with unmatched convenience and care."',
  aboutQuoteAuthor: "ShopHub Team",

  // ==========================================
  // 13. TESTIMONIALS SECTION CONTENT
  // ==========================================
  testimonialsTag: "CUSTOMER REVIEWS",
  testimonialsTitle: "What People Say About ShopHub",
  testimonialsSubtitle: "Read feedback from verified customers.",
  testimonials: [
    {
      name: "Sophia Martinez",
      role: "Verified Buyer",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      comment: "Ordering was so smooth! The products arrived quickly and the quality exceeded my expectations."
    },
    {
      name: "Marcus Vance",
      role: "Verified Buyer",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      comment: "Fantastic customer support and incredible product range. ShopHub is my go-to store!"
    },
    {
      name: "Chloe Sterling",
      role: "Verified Buyer",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      comment: "Super fast shipping and great prices. Highly recommended to everyone."
    }
  ],

  // ==========================================
  // 14. FAQ SECTION CONTENT
  // ==========================================
  faqTag: "COMMON QUESTIONS",
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Have questions or need assistance? Fill out the form below or check our FAQs.",
  faqs: [
    {
      question: "How long does shipping take?",
      answer: "Orders are processed within 24 hours. Free shipping is available on orders over $50, with domestic delivery taking 3-5 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day hassle-free return policy. If you are not satisfied, contact us for an easy return."
    },
    {
      question: "How do I track my order?",
      answer: "Once shipped, you will receive a tracking link via email to monitor your package in real-time."
    },
    {
      question: "How do I contact support?",
      answer: "You can send us an enquiry via the form below or email us at support@shophub.com!"
    }
  ],

  // ==========================================
  // 15. BUSINESS ENQUIRY FORM & CONTACT CARD CONTENT
  // ==========================================
  enquiryTag: "SEND US AN ENQUIRY",
  enquiryTitle: "Send Us an Enquiry",
  enquirySubtitle: "Have questions or need assistance? Fill out the form below and our team will get back to you promptly.",
  
  // Contact Card Labels
  enquiryCardTitle: "Contact & Location Details",
  enquiryAddressTitle: "Business Address",
  enquiryHoursTitle: "Business Hours",
  enquiryEmailTitle: "Email Us",
  enquiryPhoneTitle: "Call Us",
  
  // Form Input Labels & Placeholders
  enquiryFormNameLabel: "Full Name *",
  enquiryFormNamePlaceholder: "Jane Doe",
  enquiryFormEmailLabel: "Email Address *",
  enquiryFormEmailPlaceholder: "jane@example.com",
  enquiryFormPhoneLabel: "Phone Number (Optional)",
  enquiryFormPhonePlaceholder: "+1 (555) 000-0000",
  enquiryFormSubjectLabel: "Subject",
  enquiryFormSubjectPlaceholder: "General inquiry or feedback",
  enquiryFormMessageLabel: "Message *",
  enquiryFormMessagePlaceholder: "How can we assist you?",
  enquiryFormBtnText: "Send Message",
  enquiryFormSubmittingText: "Sending Message...",
  enquirySuccessMsg: "Thank you! Your enquiry has been received. Our team will contact you promptly.",
  
  // Form API Configuration
  enquiryApiKey: "fd_live_sample_key_12345", // FormDock Public API key for enquiries
  apiBaseUrl: "https://api.formdock.in",

  // ==========================================
  // 16. CALL TO ACTION (CTA) BANNER CONTENT
  // ==========================================
  ctaTitle: "Ready to Discover Great Products?",
  ctaSubtitle: "Contact our team or explore our featured product categories today.",
  ctaPrimaryBtnText: "Explore Categories 🛍️",
  ctaPrimaryBtnUrl: "#categories",
  ctaSecondaryBtnText: "Send Us an Enquiry ✉️",
  ctaSecondaryBtnUrl: "#enquiry",

  // ==========================================
  // 17. FOOTER & SOCIAL LINKS CONTENT
  // ==========================================
  footerTagline: "Shop top-quality products at unbeatable prices.",
  footerNavTitle: "Navigation",
  footerShowcaseTitle: "Business Showcase",
  footerSupportTitle: "Support & Location",
  footerShowcaseLinks: [
    { label: "Featured Categories", href: "#categories" },
    { label: "Shipping & Store Policy", href: "#faq" },
    { label: "About Us", href: "#about" }
  ],
  footerBottomLinkText: "Explore Showcase ↓",
  footerBottomLinkUrl: "#categories",
  footerCopyright: "© 2026 ShopHub. All rights reserved.",
  showPaymentIcons: true,
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    whatsapp: ""
  }
};
