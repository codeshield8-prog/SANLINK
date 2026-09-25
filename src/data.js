// Centralized site content & configuration for SANLINK INFOTECH PRIVATE LIMITED.
// Keeping copy in one place keeps components clean and makes edits painless.

import {
  FiMessageSquare,
  FiSend,
  FiCloud,
  FiPhoneCall,
  FiShield,
  FiServer,
  FiGitMerge,
  FiRadio,
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
  FiActivity,
  FiShare2,
  FiCpu,
  FiSearch,
  FiEdit3,
  FiSettings,
  FiLifeBuoy,
} from 'react-icons/fi';

export const company = {
  name: 'SANLINK INFOTECH',
  legalName: 'SANLINK INFOTECH PRIVATE LIMITED',
  shortName: 'Sanlink',
  industry: 'Telecommunication & Information Technology',
  phone: '9993793152',
  phoneHref: 'tel:+919993793152',
  email: 'sanlink294@gmail.com',
  emailHref: 'mailto:sanlink294@gmail.com',
  description:
    'Telecommunication & information technology solutions for modern businesses.',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Why Sanlink', to: '/why-sanlink' },
  { label: 'Contact', to: '/contact' },
];

// Horizontal trust strip shown below the hero
export const trustStrip = [
  'Telecommunication',
  'IT Solutions',
  'Business Connectivity',
  'Digital Communication',
];

// Compact trust cards used in the intro section
export const trustCards = [
  {
    icon: FiCheckCircle,
    title: 'Reliable Solutions',
    text: 'Dependable communication and IT systems your business can count on every day.',
  },
  {
    icon: FiBriefcase,
    title: 'Business-Focused Technology',
    text: 'Practical technology shaped around real operational and communication needs.',
  },
  {
    icon: FiLayers,
    title: 'Scalable Infrastructure',
    text: 'Solutions that grow smoothly as your organisation and volumes expand.',
  },
  {
    icon: FiHeadphones,
    title: 'Dedicated Support',
    text: 'A responsive team that stays engaged well beyond the initial deployment.',
  },
];

// Short trust indicators used on the About section (no invented statistics)
export const aboutIndicators = ['Reliable', 'Scalable', 'Business Focused', 'Technology Driven'];

// Capabilities — "Built for the Connected Enterprise"
export const capabilities = [
  { icon: FiMessageSquare, title: 'Communication', text: 'Messaging and voice channels that keep customers informed.' },
  { icon: FiShare2, title: 'Connectivity', text: 'Reliable links between people, systems and locations.' },
  { icon: FiCpu, title: 'Technology', text: 'Practical IT that strengthens digital operations.' },
  { icon: FiGitMerge, title: 'Integration', text: 'Applications and systems working as one connected whole.' },
  { icon: FiActivity, title: 'Digital Operations', text: 'Foundations built to run and scale dependably.' },
];

// Process — "How We Work"
export const process = [
  { icon: FiSearch, number: '01', title: 'Understand', text: 'We start by understanding your business requirement in detail.' },
  { icon: FiEdit3, number: '02', title: 'Plan', text: 'We design the appropriate technology approach for your goals.' },
  { icon: FiSettings, number: '03', title: 'Implement', text: 'We deliver and integrate the solution into your operations.' },
  { icon: FiLifeBuoy, number: '04', title: 'Support', text: 'We provide ongoing assistance and responsive support.' },
];

export const services = [
  {
    id: 'bulk-sms',
    number: '01',
    icon: FiMessageSquare,
    title: 'Bulk SMS Solutions',
    short:
      'Reliable business messaging for notifications, alerts, campaigns and customer communication.',
    overview:
      'A dependable bulk messaging capability that helps businesses reach customers with timely notifications, alerts and campaigns at scale — with clean delivery and straightforward management.',
    benefits: [
      'High-volume messaging built for business reliability',
      'Suited to alerts, reminders and promotional campaigns',
      'Simple to manage and monitor',
      'Consistent reach across your customer base',
    ],
    useCases: [
      'Order and delivery notifications',
      'Appointment and payment reminders',
      'Promotional and seasonal campaigns',
      'Service and account alerts',
    ],
    helps:
      'Keeps customers informed at the right moment, reducing missed communications and strengthening everyday engagement.',
  },
  {
    id: 'business-messaging',
    number: '02',
    icon: FiSend,
    title: 'Business Messaging',
    short:
      'Communication solutions that help businesses engage customers through modern messaging channels.',
    overview:
      'Modern messaging solutions that let your business connect with customers where they already are — structured for clarity, consistency and a professional brand experience.',
    benefits: [
      'Engage customers on modern messaging channels',
      'Consistent, professional communication',
      'Flexible to fit different customer journeys',
      'Designed around your business workflows',
    ],
    useCases: [
      'Customer onboarding and updates',
      'Support and service conversations',
      'Feedback and re-engagement flows',
      'Two-way business communication',
    ],
    helps:
      'Creates a smoother, more responsive customer experience while keeping your messaging organised and on-brand.',
  },
  {
    id: 'cloud-communication',
    number: '03',
    icon: FiCloud,
    title: 'Cloud Communication',
    short:
      'Flexible cloud-based communication infrastructure for modern organisations.',
    overview:
      'Cloud-based communication infrastructure that gives modern organisations flexibility and room to scale — without the overhead of rigid, on-premise systems.',
    benefits: [
      'Flexible, cloud-first communication setup',
      'Scales with demand and business growth',
      'Reduces heavy on-premise dependencies',
      'Accessible across distributed teams',
    ],
    useCases: [
      'Distributed and remote teams',
      'Growing communication volumes',
      'Multi-location operations',
      'Modern digital-first businesses',
    ],
    helps:
      'Gives your teams a flexible communication foundation that adapts as your business evolves.',
  },
  {
    id: 'voice-telephony',
    number: '04',
    icon: FiPhoneCall,
    title: 'Voice & Telephony',
    short:
      'Business voice technology for efficient customer and internal communication.',
    overview:
      'Voice and telephony solutions built for business communication — helping teams manage customer conversations and internal coordination efficiently.',
    benefits: [
      'Streamlined business voice communication',
      'Supports customer-facing and internal calls',
      'Organised handling of communication flows',
      'Built around operational efficiency',
    ],
    useCases: [
      'Customer support lines',
      'Sales and enquiry handling',
      'Internal team coordination',
      'Centralised business calling',
    ],
    helps:
      'Improves how your business handles conversations, making communication more organised and dependable.',
  },
  {
    id: 'otp-transactional',
    number: '05',
    icon: FiShield,
    title: 'OTP & Transactional Messaging',
    short:
      'Communication infrastructure for authentication, verification and transactional notifications.',
    overview:
      'Communication infrastructure for time-sensitive messages — authentication codes, verifications and transactional notifications that need to arrive reliably.',
    benefits: [
      'Supports authentication and verification flows',
      'Built for time-sensitive delivery',
      'Reliable transactional notifications',
      'Fits secure business processes',
    ],
    useCases: [
      'One-time passwords (OTP)',
      'Account verification',
      'Transaction confirmations',
      'Security and access alerts',
    ],
    helps:
      'Adds a dependable layer of communication to processes where timing and reliability matter most.',
  },
  {
    id: 'it-solutions',
    number: '06',
    icon: FiServer,
    title: 'IT Solutions',
    short:
      'Technology solutions that help businesses improve digital operations and infrastructure.',
    overview:
      'Information technology solutions that help organisations strengthen their digital operations and infrastructure — practical, maintainable and aligned to business goals.',
    benefits: [
      'Practical improvements to digital operations',
      'Support for reliable infrastructure',
      'Aligned to real business objectives',
      'Maintainable, sensible technology choices',
    ],
    useCases: [
      'Digital operations improvement',
      'Infrastructure planning and setup',
      'Technology modernisation',
      'Operational efficiency initiatives',
    ],
    helps:
      'Helps your business run more efficiently with technology that is dependable and fit for purpose.',
  },
  {
    id: 'api-integration',
    number: '07',
    icon: FiGitMerge,
    title: 'API & System Integration',
    short:
      'Integration-focused solutions connecting business applications and communication systems.',
    overview:
      'Integration solutions that connect your business applications and communication systems so information flows smoothly across the tools your teams rely on.',
    benefits: [
      'Connects applications and communication systems',
      'Reduces manual, disconnected processes',
      'Supports smoother data flow',
      'Flexible to different business setups',
    ],
    useCases: [
      'Linking messaging into business apps',
      'Connecting internal systems',
      'Automating communication triggers',
      'Unifying fragmented workflows',
    ],
    helps:
      'Brings your systems together so your business operates as one connected, efficient whole.',
  },
  {
    id: 'digital-communication',
    number: '08',
    icon: FiRadio,
    title: 'Digital Communication Solutions',
    short:
      'Technology-enabled communication services designed around modern business requirements.',
    overview:
      'Technology-enabled communication services shaped around how modern businesses actually operate — flexible, practical and ready to adapt.',
    benefits: [
      'Designed around modern business needs',
      'Flexible communication approaches',
      'Technology-enabled and adaptable',
      'Focused on real outcomes',
    ],
    useCases: [
      'Modern customer communication',
      'Digital-first engagement',
      'Cross-channel messaging',
      'Evolving communication needs',
    ],
    helps:
      'Keeps your communication modern and adaptable as customer expectations continue to change.',
  },
];

export const industries = [
  { icon: FiShoppingCart, name: 'E-Commerce', text: 'Order alerts, campaigns and customer messaging.' },
  { icon: FiCreditCard, name: 'Banking & Finance', text: 'Secure OTP and transactional communication.' },
  { icon: FiHeart, name: 'Healthcare', text: 'Appointment reminders and patient updates.' },
  { icon: FiBookOpen, name: 'Education', text: 'Student, parent and staff notifications.' },
  { icon: FiMapPin, name: 'Travel & Hospitality', text: 'Booking confirmations and travel alerts.' },
  { icon: FiTag, name: 'Retail', text: 'Promotions, loyalty and store communication.' },
  { icon: FiTruck, name: 'Logistics', text: 'Shipment tracking and delivery updates.' },
  { icon: FiHome, name: 'Real Estate', text: 'Lead follow-ups and client communication.' },
  { icon: FiZap, name: 'Startups & SMEs', text: 'Scalable communication as you grow.' },
  { icon: FiBriefcase, name: 'Enterprise', text: 'Reliable communication at scale.' },
];

// Four major benefits — editorial "Why Partner With Sanlink?" layout
export const whyPoints = [
  {
    number: '01',
    icon: FiCheckCircle,
    title: 'Reliable Solutions',
    text: 'Communication and IT systems engineered to work dependably, day after day, so your business keeps running without interruption.',
  },
  {
    number: '02',
    icon: FiLayers,
    title: 'Scalable Technology',
    text: 'Infrastructure designed to grow with your volumes, teams and ambitions — expanding smoothly instead of holding you back.',
  },
  {
    number: '03',
    icon: FiBriefcase,
    title: 'Business-Focused Approach',
    text: 'We begin with your business goals and shape technology around them, delivering solutions that solve real operational problems.',
  },
  {
    number: '04',
    icon: FiHeadphones,
    title: 'Responsive Support',
    text: 'A team that stays engaged well beyond deployment, ready to help whenever you need it, with a long-term partnership mindset.',
  },
];
