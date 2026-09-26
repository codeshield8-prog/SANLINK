// Centralized site content & configuration for SANLINK INFOTECH PRIVATE LIMITED.

import {
  FiRadio,
  FiMessageSquare,
  FiPhoneCall,
  FiPhoneForwarded,
  FiShield,
  FiMonitor,
  FiCode,
  FiShare2,
  FiShoppingCart,
  FiCreditCard,
  FiHeart,
  FiBookOpen,
  FiMapPin,
  FiTag,
  FiTruck,
  FiHome,
  FiZap,
  FiBriefcase,
  FiCheckCircle,
  FiLayers,
  FiHeadphones,
  FiLink,
  FiGitMerge,
  FiCpu,
  FiTrendingUp,
  FiSearch,
  FiEdit3,
  FiSettings,
  FiLifeBuoy,
  FiCloud,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const company = {
  name: 'SANLINK INFOTECH',
  legalName: 'SANLINK INFOTECH PRIVATE LIMITED',
  shortName: 'Sanlink',
  industry: 'Information Technology & Telecommunications',
  phone: '9993793152',
  phoneHref: 'tel:+919993793152',
  email: 'sanlink294@gmail.com',
  emailHref: 'mailto:sanlink294@gmail.com',
  description:
    'Telecommunication and information technology solutions for modern businesses.',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Contact', to: '/contact' },
];

export const trustStrip = [
  'Telecommunication',
  'IT Solutions',
  'Digital Communication',
  'System Integration',
];

// About feature indicators (no invented statistics)
export const aboutIndicators = [
  'Business-Focused Solutions',
  'Scalable Technology',
  'Reliable Communication',
  'Professional Support',
];

// Capabilities progression — CONNECT → INTEGRATE → AUTOMATE → SCALE
export const capabilities = [
  { icon: FiLink, title: 'Connect', text: 'Establish reliable communication channels across messaging, voice and digital touchpoints.' },
  { icon: FiGitMerge, title: 'Integrate', text: 'Bring applications, platforms and communication services together into one connected flow.' },
  { icon: FiCpu, title: 'Automate', text: 'Streamline notifications, verification and communication workflows to reduce manual effort.' },
  { icon: FiTrendingUp, title: 'Scale', text: 'Grow dependably as your volumes, teams and requirements expand over time.' },
];

// How We Work — process
export const process = [
  { icon: FiSearch, number: '01', title: 'Understand', text: 'We understand your business and communication requirements.' },
  { icon: FiEdit3, number: '02', title: 'Plan', text: 'We identify the appropriate technology approach for your goals.' },
  { icon: FiSettings, number: '03', title: 'Implement', text: 'We implement and integrate the required solution.' },
  { icon: FiLifeBuoy, number: '04', title: 'Support', text: 'We provide ongoing assistance and responsive support.' },
];

export const services = [
  {
    id: 'telecommunication',
    number: '01',
    icon: FiRadio,
    title: 'Telecommunication Solutions',
    short: 'Business communication and connectivity solutions designed for modern organizations.',
    overview:
      'End-to-end telecommunication solutions that give modern organizations dependable connectivity and communication — a foundation your teams and customers can rely on.',
    benefits: [
      'Reliable business communication and connectivity',
      'Built for modern, distributed organizations',
      'Scales with your communication volumes',
      'A single, coordinated communication foundation',
    ],
    useCases: ['Business connectivity', 'Customer communication', 'Multi-location operations', 'Growing communication needs'],
    helps: 'Gives your business a dependable communication backbone so teams and customers stay connected.',
  },
  {
    id: 'bulk-sms',
    number: '02',
    icon: FiMessageSquare,
    title: 'Bulk SMS Solutions',
    short: 'Business messaging for alerts, notifications, campaigns and customer communication.',
    overview:
      'High-volume business messaging that reaches customers with timely alerts, notifications and campaigns — clean, reliable and simple to manage.',
    benefits: ['High-volume, reliable delivery', 'Alerts, reminders and campaigns', 'Simple to manage and monitor', 'Consistent customer reach'],
    useCases: ['Order and delivery alerts', 'Payment and appointment reminders', 'Promotional campaigns', 'Service notifications'],
    helps: 'Keeps customers informed at the right moment and strengthens everyday engagement.',
  },
  {
    id: 'whatsapp-business',
    number: '03',
    icon: FaWhatsapp,
    title: 'WhatsApp Business Solutions',
    short: 'Business communication and customer engagement solutions through WhatsApp.',
    overview:
      'Engage customers on the channel they use most. WhatsApp Business solutions help you communicate, support and update customers with a professional, on-brand experience.',
    benefits: ['Reach customers on WhatsApp', 'Rich, conversational engagement', 'Professional business presence', 'Fits modern customer journeys'],
    useCases: ['Customer support conversations', 'Order and booking updates', 'Notifications and alerts', 'Two-way engagement'],
    helps: 'Creates a modern, responsive customer experience on a channel customers already prefer.',
  },
  {
    id: 'voice-cloud-telephony',
    number: '04',
    icon: FiPhoneCall,
    title: 'Voice & Cloud Telephony',
    short: 'Business voice and cloud communication solutions.',
    overview:
      'Voice and cloud telephony that helps teams manage customer conversations and internal coordination efficiently — flexible, cloud-first and organized.',
    benefits: ['Streamlined business voice', 'Cloud-first flexibility', 'Customer and internal calling', 'Organized communication flows'],
    useCases: ['Customer support lines', 'Sales and enquiry handling', 'Team coordination', 'Centralized calling'],
    helps: 'Makes business conversations more organized, flexible and dependable.',
  },
  {
    id: 'ivr',
    number: '05',
    icon: FiPhoneForwarded,
    title: 'IVR Solutions',
    short: 'Interactive voice response solutions for customer communication and workflows.',
    overview:
      'Interactive voice response that routes and handles customer calls intelligently — guiding callers to the right place and streamlining communication workflows.',
    benefits: ['Guided call routing', 'Better caller experience', 'Reduced manual handling', 'Structured workflows'],
    useCases: ['Call routing and menus', 'Self-service information', 'Support triage', 'After-hours handling'],
    helps: 'Improves how incoming calls are handled, saving time and improving the caller experience.',
  },
  {
    id: 'otp-transactional',
    number: '06',
    icon: FiShield,
    title: 'OTP & Transactional Messaging',
    short: 'Authentication, verification and transactional communication solutions.',
    overview:
      'Communication infrastructure for time-sensitive messages — authentication codes, verifications and transactional notifications that need to arrive reliably.',
    benefits: ['Authentication & verification', 'Time-sensitive delivery', 'Reliable transactional messages', 'Fits secure processes'],
    useCases: ['One-time passwords (OTP)', 'Account verification', 'Transaction confirmations', 'Security alerts'],
    helps: 'Adds a dependable communication layer where timing and reliability matter most.',
  },
  {
    id: 'it-solutions',
    number: '07',
    icon: FiMonitor,
    title: 'IT Solutions',
    short: 'Technology solutions supporting digital business operations.',
    overview:
      'Practical information technology solutions that strengthen your digital operations and infrastructure — maintainable and aligned to real business goals.',
    benefits: ['Improved digital operations', 'Reliable infrastructure support', 'Aligned to business goals', 'Sensible, maintainable choices'],
    useCases: ['Digital operations', 'Infrastructure setup', 'Technology modernisation', 'Efficiency initiatives'],
    helps: 'Helps your business run more efficiently with dependable, fit-for-purpose technology.',
  },
  {
    id: 'api-integration',
    number: '08',
    icon: FiCode,
    title: 'API & System Integration',
    short: 'Solutions for connecting applications, platforms and communication services.',
    overview:
      'Integration solutions that connect applications, platforms and communication services so information flows smoothly across the tools your teams rely on.',
    benefits: ['Connect apps & services', 'Reduce disconnected processes', 'Smoother data flow', 'Flexible to your setup'],
    useCases: ['Messaging into business apps', 'Connecting internal systems', 'Automated triggers', 'Unifying workflows'],
    helps: 'Brings your systems together so your business operates as one connected whole.',
  },
  {
    id: 'digital-communication',
    number: '09',
    icon: FiShare2,
    title: 'Digital Communication',
    short: 'Technology-enabled communication solutions for businesses.',
    overview:
      'Technology-enabled communication services shaped around how modern businesses operate — flexible, practical and ready to adapt.',
    benefits: ['Designed for modern needs', 'Flexible approaches', 'Technology-enabled', 'Focused on outcomes'],
    useCases: ['Modern customer communication', 'Digital-first engagement', 'Cross-channel messaging', 'Evolving needs'],
    helps: 'Keeps your communication modern and adaptable as customer expectations change.',
  },
  {
    id: 'cloud-digital-technology',
    number: '10',
    icon: FiCloud,
    title: 'Cloud & Digital Technology Solutions',
    short: 'Cloud-first technology solutions supporting modern digital operations.',
    overview:
      'Cloud and digital technology solutions that give your business a flexible, modern foundation — reducing rigid on-premise dependencies and supporting digital operations that scale.',
    benefits: ['Cloud-first flexibility', 'Modern digital foundation', 'Reduced on-premise overhead', 'Scales with your business'],
    useCases: ['Cloud adoption', 'Digital operations', 'Scalable infrastructure', 'Modern business systems'],
    helps: 'Gives your business a flexible, cloud-ready foundation that adapts as you grow.',
  },
];

export const industries = [
  { icon: FiCreditCard, name: 'BFSI', text: 'Secure OTP and transactional communication.' },
  { icon: FiHeart, name: 'Healthcare', text: 'Appointment reminders and patient updates.' },
  { icon: FiBookOpen, name: 'Education', text: 'Student, parent and staff notifications.' },
  { icon: FiShoppingCart, name: 'E-Commerce', text: 'Order alerts, campaigns and messaging.' },
  { icon: FiTag, name: 'Retail', text: 'Promotions, loyalty and store communication.' },
  { icon: FiMapPin, name: 'Travel & Hospitality', text: 'Booking confirmations and travel alerts.' },
  { icon: FiTruck, name: 'Logistics', text: 'Shipment tracking and delivery updates.' },
  { icon: FiHome, name: 'Real Estate', text: 'Lead follow-ups and client communication.' },
  { icon: FiZap, name: 'Startups & SMEs', text: 'Scalable communication as you grow.' },
  { icon: FiBriefcase, name: 'Enterprise', text: 'Reliable communication at scale.' },
];

// Why Sanlink — varied points
export const whyPoints = [
  { number: '01', icon: FiCheckCircle, title: 'Reliable Solutions', text: 'Communication and IT systems engineered to work dependably, day after day.' },
  { number: '02', icon: FiLayers, title: 'Scalable Technology', text: 'Infrastructure designed to grow smoothly with your volumes and ambitions.' },
  { number: '03', icon: FiBriefcase, title: 'Business-Focused Approach', text: 'We start from your business goals and shape technology around them.' },
  { number: '04', icon: FiShare2, title: 'Integrated Communication', text: 'Messaging, voice and systems connected into one coherent flow.' },
  { number: '05', icon: FiHeadphones, title: 'Responsive Support', text: 'A team that stays engaged well beyond deployment, ready when you need it.' },
  { number: '06', icon: FiZap, title: 'Technology-Led Thinking', text: 'A modern, practical mindset that keeps your business moving forward.' },
];

// Telecom flow diagram: Business → Cloud → Messaging/Voice/API → Customer
export const telecomFlow = {
  channels: [
    { icon: FiMessageSquare, label: 'Messaging' },
    { icon: FiPhoneCall, label: 'Voice' },
    { icon: FiCode, label: 'API' },
  ],
  cloud: { icon: FiCloud, label: 'Cloud Communication Layer' },
};

// IT capabilities list for the IT section
export const itCapabilities = [
  { icon: FiMonitor, label: 'IT Solutions' },
  { icon: FiCode, label: 'API Integration' },
  { icon: FiCloud, label: 'Cloud' },
  { icon: FiCpu, label: 'Digital Systems' },
  { icon: FiSettings, label: 'Automation' },
  { icon: FiBriefcase, label: 'Business Technology' },
];

// Key platform features (qualitative — no invented statistics)
export const keyFeatures = [
  { icon: FiShield, title: 'Reliable Technology', text: 'Communication and IT systems engineered to work dependably, day after day.' },
  { icon: FiLayers, title: 'Scalable Solutions', text: 'Infrastructure that grows smoothly with your volumes, teams and requirements.' },
  { icon: FiRadio, title: 'Business Communication', text: 'Messaging, voice and digital channels unified into one coherent flow.' },
  { icon: FiGitMerge, title: 'API Integration', text: 'APIs and integrations that connect neatly into the tools you already use.' },
  { icon: FiCloud, title: 'Cloud Communication', text: 'A cloud-first foundation for flexible, modern communication at scale.' },
  { icon: FiShare2, title: 'Digital Connectivity', text: 'Modern, digital-first connectivity that keeps customers reachable anywhere.' },
  { icon: FiCpu, title: 'Business Automation', text: 'Streamline notifications, verification and communication workflows.' },
  { icon: FiHeadphones, title: 'Responsive Support', text: 'A team that stays engaged well beyond deployment, ready when you need it.' },
];

// Frequently asked questions (generic, no fake claims)
export const faqs = [
  {
    q: 'What does Sanlink Infotech do?',
    a: 'Sanlink Infotech Private Limited provides information technology and telecommunications solutions — including telecom, messaging, voice, IVR, OTP, IT solutions and system integration — designed around modern business communication needs.',
  },
  {
    q: 'Which industries do you work with?',
    a: 'We work across a wide range of sectors including BFSI, healthcare, education, e-commerce, retail, travel, logistics, real estate, startups & SMEs and enterprises.',
  },
  {
    q: 'Can your solutions integrate with our existing systems?',
    a: 'Yes. Our API and system-integration solutions are designed to connect applications, platforms and communication services into your existing business workflows.',
  },
  {
    q: 'How do we get started?',
    a: 'Reach out through the contact form or call us. We start by understanding your requirement, plan the right approach, implement the solution and provide ongoing support.',
  },
  {
    q: 'How can I contact your team?',
    a: 'You can call us on 9993793152 or email sanlink294@gmail.com. We typically respond promptly during working hours.',
  },
];

// Curated royalty-free imagery (Unsplash) — abstract dark technology /
// network themes. Always layered behind strong dark overlays so they read
// as premium texture and keep the site on-brand.
const U = (id, w = 1400, q = 68) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  // Digital network / connectivity — used behind the CTA band
  ctaNetwork: U('1451187580459-43490279c0fa', 1600),
  // Abstract dark data / fibre light — About console feed
  aboutFeed: U('1639762681485-074b7f938ba0', 900),
  // Blue-lit data center / infrastructure — Telecom section accent
  infrastructure: U('1558494949-ef010cbdcc31', 1200),
};
