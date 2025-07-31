
import { UserCasesData, Book } from './UseCasesTypes';

export const userCasesData: UserCasesData = {
  Marketers: {
    title: 'Optimize delivery routes &',
    subtitle: 'reduce logistics costs.',
    description: "Marketing professionals managing field campaigns, client visits, and event logistics can reduce travel time by 40% with AI-powered route optimization. Save hours each week and increase productivity while lowering fuel costs and carbon footprint.",
    quote: "Time is money in marketing.",
    background: 'bg-[#ff4d3c]',
    textColor: 'text-white',
    ctaText: 'OPTIMIZE MY ROUTES'
  },
  Designers: {
    title: 'Visual route planning &',
    subtitle: 'creative journey mapping.',
    description: '',
    quote: '',
    background: 'bg-[#d8ede7]',
    textColor: 'text-white',
    ctaText: '',
    showImageGrid: true
  },
  Writers: {
    title: 'Focus on the journey,',
    subtitle: 'not the traffic.',
    description: '',
    quote: '',
    background: 'bg-[#f7c2d2]',
    textColor: 'text-white',
    ctaText: 'PLAN MY COMMUTE',
    showNotepad: true
  },
  Researchers: {
    title: 'Collect traffic data &',
    subtitle: 'analyze commute patterns.',
    description: '',
    quote: '',
    background: 'bg-[#e8f4f8]',
    textColor: 'text-white',
    ctaText: '',
    showBrain: true
  },
  Developers: {
    title: 'API integration for',
    subtitle: 'traffic optimization systems.',
    description: '',
    quote: '',
    background: 'bg-[#1a1f2c]',
    textColor: 'text-white',
    ctaText: '',
    showDevTools: true
  },
  Everyone: {
    title: 'Smart commuting for',
    subtitle: 'everyone, everywhere.',
    description: '',
    quote: '',
    background: 'bg-[#e8ecf0]',
    textColor: 'text-white',
    ctaText: '',
    showTags: true
  }
};

export const booksData: Book[] = [{
  title: "Smart Traffic Systems",
  author: "Dr. Maria Rodriguez",
  coverColor: "bg-[#f97316]",
  textColor: "text-white"
}, {
  title: "AI Route Optimization",
  author: "Alex Chen",
  coverColor: "bg-[#8b5cf6]",
  textColor: "text-white"
}, {
  title: "Urban Mobility",
  author: "Sarah Williams",
  coverColor: "bg-[#0ea5e9]",
  textColor: "text-white"
}, {
  title: "Traffic Psychology",
  author: "Dr. Michael Park",
  coverColor: "bg-[#d946ef]",
  textColor: "text-white"
}, {
  title: "Future of Transport",
  author: "Emily Thompson",
  coverColor: "bg-[#f97316]",
  textColor: "text-white"
}];
