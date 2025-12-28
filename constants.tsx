import { Project, NavItem, CareerEvent } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Events', href: '#events' },
  { label: 'Profile', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

/**
 * Yeung Chi Yung's Professional Headshot
 */
export const PROFILE_PHOTO = "https://lh3.googleusercontent.com/d/1-6iz91mDxCROHO6seniaWC1uKPoq8skT"; 

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Contents creation for FMCG',
    category: 'Digital Marketing',
    year: '2024',
    description: '',
    image: 'https://lh3.googleusercontent.com/d/18MmI779EpsFMzb9AVPWDRIrue_jsOTMt',
    role: 'Senior Esports Manager (Global Marketing)',
    tags: ['Esports', 'Global Strategy', 'Marketing']
  },
  {
    id: '2',
    title: 'Crypto & US Stock trading',
    category: 'Web3 & Finance',
    year: '2024 — Present',
    description: '',
    image: 'https://lh3.googleusercontent.com/d/1exSRH-PrkNdRdeMn3xZRuganHUomEpVh',
    role: 'Head of Growth',
    tags: ['Generative AI', 'Growth', 'Automation']
  },
  {
    id: '3',
    title: 'Virtual Experience App',
    category: 'Fashion & Luxury',
    year: '2025',
    description: 'Revolutionizing virtual try-ons by immersing clients in fantasy scenarios to boost engagement and social sharing.',
    image: 'https://lh3.googleusercontent.com/d/1_866A_HSGwGF1w-M5avoWuDMlEdMfAeS',
    role: 'Innovation Strategist',
    tags: ['App Development', 'UX', 'AI']
  },
  {
    id: '4',
    title: 'n8n/Coze Automation Hub',
    category: 'Operational Efficiency',
    year: '2025',
    description: 'Customizing n8n workflows for automated content generation and distribution.',
    image: 'https://lh3.googleusercontent.com/d/1fodmbBqD2KH2FnFIQP377fb7BGHUhK2U',
    role: 'Growth Lead',
    tags: ['n8n', 'Automation']
  }
];

export const EVENTS: CareerEvent[] = [
  { year: '2024', title: 'HoK Open EMEA Finals Split 1', location: 'Abu Dhabi', link: 'https://www.youtube.com/watch?v=jRbLvGIglQE' },
  { year: '2022', title: 'PMGC Grand Finals', location: 'Indonesia', link: 'https://www.youtube.com/watch?v=_6_D7deJvww' },
  { year: '2021', title: 'PMGC Global Championship', location: 'Singapore', link: 'https://www.youtube.com/watch?v=VwWkFNJmdho' },
  { year: '2019', title: 'PMCO Global Finals', location: 'Malaysia', link: 'https://www.youtube.com/watch?v=ct-eJ6cUyxE' },
  { year: '2018', title: 'PMSC Global Finals', location: 'Dubai', link: 'https://www.youtube.com/watch?v=fxlqVW0S00U' }
];

export const ALL_EVENTS: CareerEvent[] = [
  { year: '2024', title: 'HoK Open EMEA Finals Split 1', location: 'Abu Dhabi', link: 'https://www.youtube.com/watch?v=jRbLvGIglQE&list=PLY9O7aJmLg3isQRz3-aT__LyotJU42G3c' },
  { year: '2022', title: 'PMGC Grand Finals', location: 'Indonesia', link: 'https://www.youtube.com/watch?v=_6_D7deJvww&list=PLRBpUAwdotn5wCbbKzYKBLK47u-dCd9Y7' },
  { year: '2022', title: 'PUBG MOBILE Pro League', location: 'Online', link: 'https://www.youtube.com/watch?v=SE98hcElNP0&list=PLRBpUAwdotn682wg_ggCHuAgN8CuhWE7U' },
  { year: '2021', title: 'PMGC Global Championship', location: 'Singapore', link: 'https://www.youtube.com/watch?v=VwWkFNJmdho&list=PLRBpUAwdotn7qEoecZwoO9EtEkK1pNtKl' },
  { year: '2020', title: 'PMGC 2020', location: 'Dubai', link: 'https://www.youtube.com/watch?v=wL_edVnmsmw&list=PLRBpUAwdotn4OWs-0KOhrmLm7_hsG3fVH' },
  { year: '2020', title: 'PMCO Saudi', location: 'Saudi', link: 'https://www.youtube.com/watch?v=tE5avWe8nJ4&list=PLRBpUAwdotn6F5-8U77GaBHE68wnVCsLO' },
  { year: '2020', title: 'PMCO Turkey', location: 'Turkey', link: 'https://www.youtube.com/watch?v=HIaMScZdskQ&list=PLRBpUAwdotn6hcHtX7JPub8eiOofUrgP1' },
  { year: '2020', title: 'PMCO Europe', location: 'Europe', link: 'https://www.youtube.com/watch?v=Sqck1G11tDk&list=PLRBpUAwdotn7C6RmOC7BDZBi6h_nABDno' },
  { year: '2020', title: 'PMCO Germany', location: 'Germany', link: 'https://www.youtube.com/watch?v=1si1H7Jia0E&list=PLRBpUAwdotn79jO-i8I3XljXOM0Buj7Yw' },
  { year: '2020', title: 'PMCO CIS', location: 'CIS', link: 'https://www.youtube.com/watch?v=qBRsrvRXBpA&list=PLRBpUAwdotn5cFQ6XuIhPOk8tyGOpI5KW' },
  { year: '2020', title: 'PMCO Iraq', location: 'Iraq', link: 'https://www.youtube.com/watch?v=QTSBzA6IR7M&list=PLRBpUAwdotn5vsGqabCPgN6VD-_SsLsMh' },
  { year: '2020', title: 'PMCO North America', location: 'USA', link: 'https://www.youtube.com/watch?v=bJrmOsAe_jw&list=PLRBpUAwdotn5JJxwHSL8l6ZXUMLO2CFzi' },
  { year: '2020', title: 'PMCO Middle East & Africa', location: 'MEA', link: 'https://www.youtube.com/watch?v=RLNR8BPOMSA&list=PLRBpUAwdotn4gBpWLV__ie-6GBNnb4ef5' },
  { year: '2019', title: 'PMCO Finals 2019', location: 'Malaysia', link: 'https://www.youtube.com/watch?v=ct-eJ6cUyxE&list=PLRBpUAwdotn62ajCPt28GfOzbyxdxt5aE' },
  { year: '2019', title: 'PMCO SEA League', location: 'Shanghai', link: 'https://www.youtube.com/watch?v=fh2mmYZwacw&list=PLRBpUAwdotn6FZIl8xltSUZ-qTdF00XHO' },
  { year: '2019', title: 'PMCO Global Finals', location: 'Malaysia', link: 'https://www.youtube.com/watch?v=ibzl6FEbPTU&list=PLRBpUAwdotn6me8h98TOH7qoo8iVMi8D3' },
  { year: '2018', title: 'PMSC Global Finals', location: 'Dubai', link: 'https://www.youtube.com/watch?v=fxlqVW0S00U&list=PLRBpUAwdotn5q9goGEoAbpJoWnlrPlKmI' },
  { year: '2018', title: 'PMSC ASIA FINALS (Reality Show)', location: 'Thailand', link: 'https://www.youtube.com/watch?v=pZTV8fsjfT0' },
  { year: '2018', title: 'PMSC Europe Finals', location: 'Ukraine', link: 'https://www.youtube.com/watch?v=Fdvt9VM544o&list=PLRBpUAwdotn7rjSii3Ny9snu5gqvqJXO-' },
  { year: '2018', title: 'PWK INVITATIONAL 2018', location: 'Online', link: 'https://www.youtube.com/watch?v=py-pqhnnaj0&list=PLRBpUAwdotn43kPl1XiYLSmEtJnb92zve' },
  { year: '2016', title: 'madhead TGS 2016', location: 'Taiwan', link: 'https://www.youtube.com/watch?v=8N43r7R378M' },
  { year: '2015', title: 'Hong Kong Esports Tournament', location: 'Hong Kong', link: 'https://www.youtube.com/watch?v=2trelMgje-A' }
];

export const BIO = {
  name: "Yeung Chi Yung",
  title: "Head of Growth & Innovation",
  location: "Hong Kong",
  email: "maxaiinno888@gmail.com",
  phone: "+852 9459 6929",
  about: "Innovative Senior Executive with 14+ years in Global Marketing, Esports, and Digital Transformation. I specialize in integrating Generative AI to automate workflows and maximize revenue. My engineering background allows me to bridge the gap between technical development and global business strategy.",
  experience: [
    { company: "JINFENG AI TECHNOLOGY", role: "HEAD OF GROWTH", period: "2024 — NOW" },
    { company: "TENCENT HOLDINGS", role: "SENIOR ESPORTS MANAGER (GLOBAL MARKETING)", period: "2018 — 2024" },
    { company: "MADHEAD APP", role: "MARKETING MANAGER (INFLUENCER)", period: "2015 — 2016" },
    { company: "HK ESPORTS LTD", role: "CO-FOUNDER & COO", period: "2013 — 2015" }
  ],
  skills: {
    ai: ["GEMINI", "N8N", "CHATGPT", "DEEPSEEK", "COZE"],
    tech: ["PYTHON", "SQL", "HTML/JS/CSS"],
    marketing: ["STRATEGY & GROWTH", "MARKETING", "AI & TECH", "EVENTS", "CAMPAIGN"]
  }
};