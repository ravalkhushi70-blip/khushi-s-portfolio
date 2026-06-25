export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  work: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}

export interface CampaignCaseStudy {
  id: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  objective: string;
  strategy: string;
  execution: string[];
  result: string;
  accentColor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'campaign' | 'carousel' | 'moodboard' | 'ad_concept' | 'calendar' | 'influencer';
  typeName: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}
