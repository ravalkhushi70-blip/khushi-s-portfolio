import { Experience, SkillCategory, ImpactMetric, CampaignCaseStudy, GalleryItem, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: "Khushi Raval",
  title: "Digital Marketing Student & Creative Strategist",
  tagline: "I design digital campaigns, analyse performance, discover influencers, and build content strategies that help brands grow online.",
  bio: "Khushi Raval is a digital marketing student and creative professional with hands-on experience at The Bombay Digital, Buzz Media Fame, and Filter It Media. She has worked across campaign planning, content strategy, influencer discovery, performance analysis, and brand communication for lifestyle, beauty, fashion, jewellery, wellness, and consumer brands.",
  email: "ravalkhushi70@gmail.com",
  linkedin: "https://linkedin.com/in/khushi-raval",
  instagram: "https://instagram.com/khushiiravall__",
  profileImage: "/src/assets/images/regenerated_image_1782355425473.jpg"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "filter-it",
    company: "Filter It Media",
    role: "Digital Marketing & Campaign Strategy Intern",
    period: "Recent",
    work: [
      "Assisted in seasonal campaign ideation and creative pitch development for 5+ lifestyle clients.",
      "Conducted extensive influencer research, filtering creators across beauty, fashion, and wellness niches.",
      "Designed monthly brand content planning matrices and high-engagement social media calendar drafts.",
      "Tracked and analysed social media performance metrics to optimize weekly content reach."
    ]
  },
  {
    id: "buzz-media",
    company: "Buzz Media Fame",
    role: "Creative & Influencer Marketing Support",
    period: "Recent",
    work: [
      "Shortlisted over 40 highly aligned micro-influencers for active skincare and fashion campaigns.",
      "Coordinated daily collaboration outreach and content deliverables tracking for client approval.",
      "Conducted thorough competitor social media research to identify trending audio and video visual formats.",
      "Drafted high-converting content hooks and captions for influencer and brand channels."
    ]
  },
  {
    id: "bombay-digital",
    company: "The Bombay Digital",
    role: "Social Media & Brand Strategy Intern",
    period: "Recent",
    work: [
      "Curated comprehensive, trend-driven monthly content calendars for premium wellness and consumer brands.",
      "Generated fresh, interactive campaign concepts including Instagram polls, Q&As, and transitions.",
      "Formulated clear creative briefs detailing visual guidelines and aesthetic standards for designers.",
      "Analyzed emerging internet and consumer trends to keep active brands highly culturally relevant."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Campaign & Content",
    skills: ["Campaign Strategy", "Content Planning", "Creative Direction", "Copywriting"]
  },
  {
    title: "Marketing & Research",
    skills: ["Social Media Marketing", "Influencer Marketing", "Brand Research", "Competitor Analysis"]
  },
  {
    title: "Strategy & Pitching",
    skills: ["Client Presentation", "Performance Analysis", "Meta Ads Basics", "Trend Research"]
  }
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: "25+",
    label: "Campaign Concepts",
    description: "Creative visual and strategic frameworks curated for client pitches."
  },
  {
    value: "40+",
    label: "Influencers Sourced",
    description: "Highly aligned creators shortlisted based on engagement and style."
  },
  {
    value: "12+",
    label: "Content Calendars",
    description: "Meticulously planned calendars structured for premium consumer brands."
  },
  {
    value: "18%",
    label: "Engagement Lift",
    description: "Average increase in organic campaign engagement through optimization."
  },
  {
    value: "30+",
    label: "Competitor Reports",
    description: "Detailed analysis of competitors' creative and social strategies."
  },
  {
    value: "10+",
    label: "Client Presentations",
    description: "Polished, strategic pitch decks designed to secure client approvals."
  }
];

export const CAMPAIGNS: CampaignCaseStudy[] = [
  {
    id: "jewellery",
    title: "Luxury Jewellery Campaign",
    category: "Festive Campaign Planning",
    tagline: "Elevating brand desirability and digital footfall with interactive style showcases.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
    objective: "Increase brand desirability, elevate aesthetic positioning, and drive high-intent inquiries during the busy festive season.",
    strategy: "Implement a micro-influencer styling narrative combined with high-contrast interactive stories styled 'Which Gold Tone Suits Your Vibe?' to stimulate personal desire.",
    execution: [
      "Planned a cohesive 30-day elegant social calendar matching warm studio aesthetic codes.",
      "Researched and onboarded 15 luxury micro-influencers whose personal styles matched high-end jewellery.",
      "Coordinated visual briefs detailing elegant lighting, clean styling, and soft background cues."
    ],
    result: "Achieved a 22% increase in festive page engagement and generated over 140 high-intent product inquiries directly via DM.",
    accentColor: "from-amber-100 to-rose-100"
  },
  {
    id: "skincare",
    title: "Skincare Clinic Content Strategy",
    category: "Educational Content Marketing",
    tagline: "De-mystifying professional skin treatments and building local client trust.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop",
    objective: "Position the clinic as a trusted dermatological expert, increase treatment clarity, and boost clinic bookings.",
    strategy: "Shift focus from purely promotional posts to 'Skin-Education First' storytelling, using bite-sized ingredient carousels and treatment video walk-throughs.",
    execution: [
      "Scripted engaging educational reels explaining clinic treatment steps visually.",
      "Structured a solution-oriented content matrix resolving common client skincare problems.",
      "Identified and used high-performance, SEO-rich clinical beauty hashtags."
    ],
    result: "Drove a 35% growth in profile visits and established a consistent stream of direct treatment appointment bookings.",
    accentColor: "from-pink-100 to-sky-100"
  },
  {
    id: "furniture",
    title: "Furniture Brand Visual Campaign",
    category: "Product Launch Strategy",
    tagline: "Positioning ergonomic desks as beautiful, productivity-boosting centerpieces.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop",
    objective: "Launch modern ergonomic home desks to professionals working remotely, emphasizing comfort without sacrificing aesthetic design.",
    strategy: "Develop a 'Desk Setup Transformation' video series paired with relatable 'Day-in-the-Life' content formats highlighting morning routines and posture.",
    execution: [
      "Drafted detailed influencer brief cards highlighting seamless desk-adjusting transitions.",
      "Wrote engaging captions outlining ergonomics, focus, and home workspace layouts.",
      "Maintained a warm, minimalist cream palette across all promotional design templates."
    ],
    result: "The anchor launch video reached 50k+ organic views on Instagram, with exceptional conversion rates on product pages.",
    accentColor: "from-yellow-50 to-orange-100"
  },
  {
    id: "pet-clothing",
    title: "Pet Clothing Brand Social Media",
    category: "Community Building & UGC",
    tagline: "Spreading warmth and playfulness with custom winter fashion campaigns.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=600&auto=format&fit=crop",
    objective: "Build an active pet parent community, generate high organic reach, and introduce a winter dog wear line.",
    strategy: "Leverage lighthearted User-Generated Content (UGC) drives featuring 'Dressed-up Paws' winter styling and funny dog runway videos.",
    execution: [
      "Co-created humorous script ideas and interactive video structures for pet parent creators.",
      "Organized a structured weekly hashtag competition to incentivize parent shares.",
      "Researched and structured influencer outreach targeting 20 viral pet accounts."
    ],
    result: "Drove a 40% rise in organic brand mentions and successfully sourced over 20 organic user video shares.",
    accentColor: "from-teal-50 to-pink-100"
  },
  {
    id: "bedsheet",
    title: "Premium Bedsheet Campaign",
    category: "Sensory Brand Positioning",
    tagline: "Connecting high-quality materials to emotional comfort and rest.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop",
    objective: "Differentiate a premium 100% long-staple cotton bedsheet line from generic marketplace competitors on Amazon.",
    strategy: "Create an emotional, sensory-driven narrative styled 'Coming Home to Calm' focusing heavily on sensory comfort, sleep hygiene, and tactile warmth.",
    execution: [
      "Authored poetic sensory copywriting focusing on touch, texture, and serene mornings.",
      "Designed an aesthetic grid layout mimicking cozy, airy morning bedrooms.",
      "Structured a high-impact influencer gifting program for luxury bedding reviewers."
    ],
    result: "Drove an 18% lift in organic website repeat sessions and dramatically reduced click costs due to high creative CTR.",
    accentColor: "from-purple-100 to-indigo-50"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Luxury Jewellery Moodboard",
    type: "moodboard",
    typeName: "Creative Moodboard",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
    description: "Visual inspiration matching gold textures with elegant minimalist geometry."
  },
  {
    id: "gal-2",
    title: "Skincare Ingredient Education",
    type: "carousel",
    typeName: "Instagram Carousel Draft",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    description: "Clean typography carousel showing the benefits of Vitamin C & hyaluronic acid."
  },
  {
    id: "gal-3",
    title: "Aesthetic Workspace Concept",
    type: "moodboard",
    typeName: "Creative Concept Layout",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop",
    description: "Neutral cream color scheme concept and warm office atmosphere inspiration."
  },
  {
    id: "gal-4",
    title: "Furniture Video Outline",
    type: "ad_concept",
    typeName: "Creative Brief Wireframe",
    image: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?q=80&w=600&auto=format&fit=crop",
    description: "Flowchart outlining viral video transition hooks for desk adjustments."
  },
  {
    id: "gal-5",
    title: "Influencer Tracking Database",
    type: "influencer",
    typeName: "Influencer Research Sheet",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    description: "Clean overview tracking micro-creator engagement, audience alignment, and budget levels."
  },
  {
    id: "gal-6",
    title: "Monthly Brand Content Matrix",
    type: "calendar",
    typeName: "Content Calendar Sneak-Peek",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
    description: "Aesthetic calendar grid showing organic content themes, reels, and stories."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Khushi brings strong creative thinking and understands brand storytelling beautifully. She doesn't just look for trends, she understands how they apply specifically to consumer behavior.",
    author: "Senior Campaign Director",
    role: "Filter It Media"
  },
  {
    id: "t2",
    quote: "She has a sharp eye for trends, aesthetics, and campaign structure. Her influencer selections are incredibly precise, ensuring brands actually reach their target audience.",
    author: "Founder & Creative Lead",
    role: "Buzz Media Fame"
  }
];
