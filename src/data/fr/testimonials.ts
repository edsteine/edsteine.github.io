import type { Testimonial } from '@/types';
// TestimonialStats type available for future use

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    position: "CTO",
    company: "TechCorp Solutions",
    image: "/images/testimonials/sarah-chen.jpg",
    content: "Adil's technical expertise and leadership skills are exceptional. He led our mobile development team through a complete platform overhaul, delivering ahead of schedule while maintaining the highest quality standards. His ability to architect scalable solutions is unmatched.",
    rating: 5,
    project: "Enterprise Mobile Platform",
    date: "2024"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "Head of Engineering", 
    company: "GeoTech Innovations",
    image: "/images/testimonials/marcus-rodriguez.jpg",
    content: "Working with Adil on our geospatial platform was a game-changer. His deep understanding of PostGIS and spatial databases helped us optimize our data processing by 60%. He's not just a developer, he's a true technical architect.",
    rating: 5,
    project: "Geospatial Data Platform",
    date: "2024"
  },
  {
    id: 3,
    name: "Amina Benali",
    position: "Product Manager",
    company: "FinanceFlow",
    image: "/images/testimonials/amina-benali.jpg", 
    content: "Adil transformed our mobile banking vision into reality. His attention to security details and user experience resulted in a 4.8/5 app store rating. He consistently delivered features that exceeded our expectations.",
    rating: 5,
    project: "Mobile Banking App",
    date: "2023"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Technical Lead",
    company: "CloudScale Systems",
    image: "/images/testimonials/david-thompson.jpg",
    content: "Adil's mentorship helped our entire team level up their skills. His code reviews were educational, and his system design recommendations saved us from major technical debt. A rare combination of technical depth and leadership.",
    rating: 5,
    project: "Microservices Architecture",
    date: "2023"
  }
];

export const testimonialStats = [
  {
    label: "Client Satisfaction",
    value: "98%",
    description: "Average satisfaction rating from clients and stakeholders"
  },
  {
    label: "Projects Delivered",
    value: "50+",
    description: "Successfully completed projects across mobile, web, and backend"
  },
  {
    label: "Team Members Mentored",
    value: "25+", 
    description: "Junior and mid-level developers guided and mentored"
  },
  {
    label: "Years of Experience",
    value: "9+",
    description: "Professional software development experience"
  }
];