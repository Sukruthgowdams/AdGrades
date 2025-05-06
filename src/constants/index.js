// src/constants/index.js - Central location for all constants

// Brand Colors
export const COLORS = {
    primary: "#00aeff", // Bright Blue
    primaryDark: "#01afff", // Cyan Blue (Highlight Blue)
    primaryLight: "#08b7fc", // Sky Blue (Secondary Blue)
  
    secondary: "#08b7fc", // Sky Blue
    secondaryDark: "#01afff", // Cyan Blue
    secondaryLight: "#d3e3ed", // Light Accent (Soft Blue/Gray)
  
    dark: {
      700: "#1a1c27",
      800: "#151720",
      900: "#12141e", // Very Dark Blue/Black
    },
  
    light: {
      50: "#f5f9fc",         // Slightly lighter than d3e3ed for contrast
      100: "#e8f1f8",        // Muted light blue
      200: "#d3e3ed",        // Soft Blue/Gray
    },
  
    success: "#10b981", // Green (unchanged)
    warning: "#f59e0b", // Amber (unchanged)
    error: "#ef4444",   // Red (unchanged)
  
    text: {
      primary: "#ffffff",     // White text on dark background
      secondary: "#cbd5e1",   // Soft blue-gray
      light: "#9ca3af",       // Muted text
    },
  
    background: {
      primary: "#12141e",     // Dark base background
      secondary: "#1a1c27",   // Slightly lighter than primary
      tertiary: "#2a2d3a",    // Card-like surfaces
    },
  
    gradient: {
      primary: "linear-gradient(to right, #00aeff, #08b7fc)",
      secondary: "linear-gradient(to right, #01afff, #08b7fc)",
      blue: "linear-gradient(to right, #00aeff, #01afff)",
    },
  
}

// Typography
export const FONTS = {
  primary: "'Poppins', sans-serif",
  secondary: "'Montserrat', sans-serif",
  heading: "'Manrope', sans-serif",
  mono: "'Roboto Mono', monospace",
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  sizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
  },
}

// Animation Variants
export const ANIMATIONS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  staggerFast: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  },
  staggerSlow: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  bounce: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.5 } },
  },
  letterAnimation: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  buttonHover: {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)",
    transition: { duration: 0.2 },
  },
  cardHover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2 },
  },
  floatingAnimation: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
  pulseAnimation: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
  spinSlow: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "linear",
    },
  },
  counterAnimation: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

// Navigation Links
export const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "Case Studies", href: "/casestudies" },
  { name: "Reviews", href: "/reviews" },
  { name: "FAQs", href: "/faqs" },
  { name: "AboutUs", href: "/aboutus" },
]

// Services Data
export const SERVICES = [
  {
    category: "Digital Marketing",
    items: [
      "Social Media Marketing – We make scrolling stop & wallets open.",
      "SEO – Google loves us. Your competitors hate us.",
      "Content Marketing – Your brand, but make it compelling .",
      "Graphic Design – We make Picasso jealous.",
      
    ],
  },
  {
    category: "Software Solutions",
    items: [
      "CRM / ERP – Your business, but on autopilot.",
      "Website & E-Commerce – If your website isn’t selling, is it even a website?",
      "No-Code Platforms – Build like a pro. No coding required.",
    ],

  },
  {
    category: "Offline Marketing",
    items: [
      "Hoardings – Because size matters (for ads, obviously).",
      "TV / Radio Ads – Your grandma’s favorite marketing? We still make it cool.",
      "Event Marketing – We turn brand activations into viral experiences.",
    ],

  },
  {
    category: "Other Services",
    items: [
      "Influencer Marketing – We find the right faces to sell your stuff.",
      "Account-Based Marketing – For B2B clients who want to close deals, not just collect leads.",
    ],
  },
];


// Clients Data
export const CLIENTS = [
  {
    name: "OSCode Solution",
    description:
      "We helped OSCode Solution enhance its digital presence and reach the right audience. Through engaging social media content and SEO-optimized posts, OSCode saw increased engagement and stronger credibility.",
    logo: "/api/placeholder/150/80",
    tag: "Tech",
  },
  {
    name: "Delhi 65",
    description:
      "We helped Delhi 65, a multi-cuisine restaurant, attract more customers and build a strong online presence through eye-catching social media posts and targeted marketing strategies.",
    logo: "/api/placeholder/150/80",
    tag: "Restaurant",
  },
  {
    name: "Medhavi Classes",
    description:
      "We helped Medhavi Classes, an education training institute, grow its digital presence and reach more students through engaging content and targeted marketing campaigns.",
    logo: "/api/placeholder/150/80",
    tag: "Education",
  },
  {
    name: "DewDrop Homestays",
    description:
      "We helped Dew Drop Homestays attract more travelers by showcasing its luxury, comfort, and world-class amenities through stunning visuals and strategic marketing.",
    logo: "/images/dewlogo.png",
    tag: "Hospitality",
  },
  {
    name: "Vinayaka Enterprises",
    description:
      "We helped Vinayaka Enterprises, an interior design expert, showcase its innovative solutions through creative content and targeted marketing campaigns.",
    logo: "/api/placeholder/150/80",
    tag: "Interior Design",
  },
]

// Case Studies Data
export const CASE_STUDIES = [
  {
    title: 'Nike\'s "Just Do It"',
    subtitle: "The Power of Emotional Branding",
    description:
      'From $800M to $9.2B in 10 years. Nike didn\'t just sell shoes—they sold a lifestyle. Their "Just Do It" campaign focused on emotional storytelling and bold advertising, turning them into a global powerhouse.',
    image: "/images/nikes.jpg",
    logo: "/images/nikelogo.jpg",
  },
  {
    title: 'Coca-Cola\'s "Share a Coke"',
    subtitle: "Personalization Wins",
    description:
      "By replacing its logo with customer names, Coca-Cola made marketing personal. The result? A viral sensation that made people hunt for their names and share the experience online.",
    image: "/images/cokelogo.png",
    logo: "/images/cokelogo.png",
  },
  {
    title: "Airbnb",
    subtitle: "User-Generated Content Magic",
    description:
      "Grew from a struggling startup to a $75B brand. Instead of traditional ads, Airbnb leveraged user stories—real travelers, real hosts, real experiences. This trust-building strategy made them the go-to platform for accommodation.",
    image: "/images/airbnb.png",
    logo: "/images/airbnblogo.png",
  },
  {
    title: "Dollar Shave Club",
    subtitle: "Viral Video + Disruptive Marketing",
    description:
      "From startup to $1B acquisition in 5 years. A single, hilariously bold video flipped the men's grooming industry upside down. Their lesson? Be different, be memorable, and make people talk.",
    image: "/images/dsc.png",
    logo: "/images/dsclogo.png",
  },
]

// Reviews Data
export const REVIEWS = [
  {
    name: "Client Name",
    position: "Founder of Brand X",
    review:
      "AdGrades completely transformed our marketing. From struggling to scale to hitting consistent 6-figure months—unbelievable!",
    rating: 5,
    avatar: "/api/placeholder/60/60",
  },
  {
    name: "Client Name",
    position: "CEO of Company Y",
    review: "Before AdGrades, we wasted money on ads with no ROI. Now, we see 4X returns monthly!",
    rating: 5,
    avatar: "/api/placeholder/60/60",
  },
  {
    name: "Client Name",
    position: "Marketing Director",
    review:
      "The team at AdGrades truly understands marketing strategy and execution. They ve helped us reach new heights.",
    rating: 5,
    avatar: "/api/placeholder/60/60",
  },
]

// FAQs Data
export const FAQS = [
  {
    question: "How long does it take to see results?",
    answer:
      "While every campaign is different, most clients start seeing improved performance within the first 30 days. For comprehensive results and ROI analysis, we recommend a 3-month timeline.",
  },
  {
    question: "What makes AdGrades different from other agencies?",
    answer:
      "We're ROI-obsessed, not vanity metrics focused. We combine AI with human expertise, make data-driven decisions, build end-to-end growth systems, and leverage memes, trends & disruptive creativity because attention equals revenue.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We specialize in all major advertising platforms including Facebook, Instagram, Google, YouTube, LinkedIn, TikTok, Snapchat, and more. We also handle offline marketing channels like billboards, TV, and radio.",
  },
  {
    question: "What's your pricing structure?",
    answer:
      "Our pricing is transparent and based on your specific needs. We offer Starter Plans for small businesses, Growth Plans for scaling brands, and Enterprise Plans for market domination. Contact us for a custom quote tailored to your business goals.",
  },
]

// Pricing Plans
export const PRICING_PLANS = [
  {
    title: "Starter Plan",
    description: "For Small Businesses",
    price: "$$",
    features: ["Social Media Management", "Basic SEO", "Monthly Performance Reports", "Email Support"],
  },
  {
    title: "Growth Plan",
    description: "For Scaling Brands",
    price: "$$$",
    features: [
      "Everything in Starter",
      "Advanced PPC Campaigns",
      "Content Marketing",
      "Conversion Rate Optimization",
      "Weekly Strategy Calls",
    ],
  },
  {
    title: "Enterprise Plan",
    description: "For Market Domination",
    price: "$$$$",
    features: [
      "Everything in Growth",
      "Custom Marketing Strategy",
      "Dedicated Account Manager",
      "Advanced Analytics",
      "Priority Support",
      "Quarterly Business Reviews",
    ],
  },
]

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/AdGrades",
  twitter: "https://twitter.com/AdGrades",
  linkedin: "https://linkedin.com/company/AdGrades",
  instagram: "https://instagram.com/AdGrades",
  youtube: "https://youtube.com/AdGrades",
}

// Contact Information
export const CONTACT_INFO = {
  email: "hello@adgrades.com",
  phone: "+91 XXXXX XXXXX",
  address: "Reva University, Bangalore, India",
}

// Stats for animated counters
export const STATS = [
  { value: 95, label: "Client Retention Rate", symbol: "%" },
  { value: 500, label: "Campaigns Launched", symbol: "+" },
  { value: 10, label: "Years of Experience", symbol: "+" },
  { value: 300, label: "Happy Clients", symbol: "+" },
]
