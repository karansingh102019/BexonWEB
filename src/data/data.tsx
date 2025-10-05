import { HiOutlineLightBulb } from 'react-icons/hi';
import { FiAward } from "react-icons/fi";
import { HiOutlineUserGroup } from 'react-icons/hi';
import { CiHeadphones } from "react-icons/ci";

export const NavItems = [
  "Home",
  "Pages",
  "Services",
  "Portfolio",
  "Blog",
  "Contact",
];

// src/data/data.js (or .ts)
export const images = [
  { logo: "/images/brand1.webp" },
  { logo: "/images/brand2.webp" },
  { logo: "/images/brand3.webp" },
  { logo: "/images/brand4.webp" },
  { logo: "/images/brand5.webp" },
  { logo: "/images/brand6.webp" },
  { logo: "/images/brand1.webp" },
  { logo: "/images/brand2.webp" },
  { logo: "/images/brand3.webp" },
  { logo: "/images/brand4.webp" },
  { logo: "/images/brand5.webp" },
  { logo: "/images/brand6.webp" },
];


export const expertiseCards = [
  {
    icon: HiOutlineLightBulb,
    title: "Innovative Solutions",
    description: "We stay ahead of the leveraging cutting-edge technologies and strategies to keep."
  },
  {
    icon: FiAward,
    title: "Award-Winning",
    description: "Recognized by industry leaders, our award-winning team has a proven record."
  },
  {
    icon: HiOutlineUserGroup,
    title: "Expert Team",
    description: "Our team is always available to address your concerns, providing quick and solution."
  },
  {
    icon: CiHeadphones,
    title: "Dedicated Support",
    description: "Our team is always available to address your concerns, providing quick and effective."
  }
];


export const solutions = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="12" width="10" height="10" fill="#1a7f7f" />
          <rect x="26" y="12" width="10" height="10" fill="#2d9d9d" />
          <rect x="12" y="26" width="10" height="10" fill="#2d9d9d" />
          <rect x="26" y="26" width="10" height="10" fill="#40b5b5" />
        </svg>
      ),
      title: 'Business Strategy Development',
      imagesURL :"/images/service-2.webp",
      description: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M24 8C15.163 8 8 15.163 8 24c0 8.837 7.163 16 16 16" stroke="#1a7f7f" strokeWidth="3" fill="none"/>
          <path d="M24 8c8.837 0 16 7.163 16 16 0 8.837-7.163 16-16 16" stroke="#2d9d9d" strokeWidth="3" fill="none"/>
          <circle cx="24" cy="24" r="6" fill="#40b5b5"/>
        </svg>
      ),
      title: 'Customer Experience Solutions',
      imagesURL :"/images/service-3.webp",
      description: 'Customer Experience Solutions are designed to enhance every touchpoint of your customer journey, from first interaction.'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M18 14c-3.314 0-6 2.686-6 6v8c0 3.314 2.686 6 6 6h4" stroke="#1a7f7f" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M30 34c3.314 0 6-2.686 6-6v-8c0-3.314-2.686-6-6-6h-4" stroke="#2d9d9d" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Sustainability and ESG Consulting',
      imagesURL :"/images/service-4.webp",
      description: 'Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.'
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <path d="M24 24L24 14M24 24L30 18M24 24L18 18M24 24L24 34M24 24L30 30M24 24L18 30" stroke="#1a7f7f" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="14" stroke="#2d9d9d" strokeWidth="3" fill="none"/>
        </svg>
      ),
      title: 'Training and Development Programs',
      imagesURL :"/images/service-6.webp",
      description: 'Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.'
    }
  ];