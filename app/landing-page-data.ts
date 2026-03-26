export type NavItem = {
  href: string;
  label: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type FeatureItem = {
  title: string;
  description: string;
};

export type ToolkitItem = {
  label: string;
  src: string;
  width: number;
  height: number;
};

export type ModuleItem = {
  title: string;
  points: string[];
};

export type PersonCard = {
  name: string;
  role: string;
  summary: string;
  link: string;
};

export type StepItem = {
  step: string;
  title: string;
  description: string;
};

export type FeeOption = {
  title: string;
  registrationFee: string;
  programFee: string;
  totalFee: string;
  note: string;
};

export type AudienceSegment = {
  label: string;
  edge: string;
  points: string[];
};

export type CompareRow = {
  title: string;
  thisProgramme: string;
  others: string;
};

export type MetricCard = {
  value: string;
  description: string;
  source: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type FaqCategory = {
  label: string;
  items: {
    question: string;
    answer: string;
  }[];
};

export const navItems: NavItem[] = [
  { href: "#why-choose-this-course", label: "Why choose this course" },
  { href: "#what-you-will-learn", label: "What will you learn" },
  { href: "#instructors", label: "Instructors" },
  { href: "#admission-process", label: "Admission process" },
  { href: "#fee-structure", label: "Fee structure" },
  { href: "#who-is-this-course-for", label: "Who is it for" },
  { href: "#compare-programme", label: "Compare programme" },
  { href: "#about-programme", label: "About programme" },
  { href: "#about-institute", label: "About institute" },
  { href: "#how-eduveda-helps", label: "How Eduveda helps" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact-us", label: "Contact us" },
];

export const heroStats: StatItem[] = [
  { label: "Course duration", value: "6 months" },
  { label: "Time commitment", value: "8-10 hours / week" },
  { label: "Eligibility", value: "12th pass and above" },
  { label: "Programme directors", value: "IIM faculty + industry mentors" },
];

export const heroHighlights = [
  "Learn with academic depth and industry context",
  "Work on practical digital marketing assignments",
  "Build execution-ready skills with guided mentorship",
];

export const whyChooseItems: FeatureItem[] = [
  {
    title: "Recognised academic collaboration",
    description:
      "Position the programme as a credible learning experience backed by experienced faculty and a clear outcomes-first curriculum.",
  },
  {
    title: "Career-aligned skill building",
    description:
      "Focus on practical digital marketing workflows that map to real roles across growth, performance, brand, and analytics functions.",
  },
  {
    title: "Applied, measurable marketing",
    description:
      "Emphasise execution using campaigns, dashboards, experimentation, and performance optimisation rather than theory alone.",
  },
  {
    title: "Immersive learning moments",
    description:
      "Create the feeling of a premium bootcamp through guided sessions, peer learning, review loops, and cohort accountability.",
  },
  {
    title: "Modern tool exposure",
    description:
      "Present a toolkit that feels current, including analytics, ads, AI-assisted workflows, and reporting platforms.",
  },
  {
    title: "Placement-readiness support",
    description:
      "Frame Eduveda as a partner in interview prep, portfolio building, and role discovery once the learner completes the programme.",
  },
];

export const toolkit: ToolkitItem[] = [
  {
    label: "ChatGPT",
    src: "/learning-assets/logo-chatgpt.webp",
    width: 64,
    height: 64,
  },
  {
    label: "Google Ads",
    src: "/learning-assets/logo-google-ads.webp",
    width: 170,
    height: 58,
  },
  {
    label: "Google Analytics",
    src: "/learning-assets/logo-ga4.webp",
    width: 150,
    height: 70,
  },
  {
    label: "Meta Ads",
    src: "/learning-assets/logo-meta.webp",
    width: 98,
    height: 62,
  },
  {
    label: "Mailchimp",
    src: "/learning-assets/logo-mailchimp.webp",
    width: 112,
    height: 52,
  },
];

export const modules: ModuleItem[] = [
  {
    title: "Module 1: Getting Started with Digital Marketing and AI",
    points: [
      "The big picture: Understand the fundamentals of digital marketing, how the industry has evolved, and how modern teams operate across channels.",
      "Meeting AI: Start with generative AI basics and see how tools like ChatGPT are changing research, ideation, and execution for marketers.",
      "Practical tools: Begin using AI-assisted workflows for planning, copy support, and faster day-to-day marketing tasks.",
    ],
  },
  {
    title: "Module 2: Measuring Success and Automating Emails",
    points: [
      "Learn which metrics matter across awareness, engagement, conversion, and retention stages.",
      "Understand lifecycle messaging, segmentation, and performance reporting through guided examples.",
      "Build email marketing workflows and automate campaign sequences with sharper audience targeting.",
    ],
  },
  {
    title: "Module 3: Creating Content and Getting Found on Google",
    points: [
      "Explore search intent, keyword thinking, and SEO fundamentals that help content get discovered.",
      "Create structured content plans that align audience problems with business goals.",
      "Use AI to accelerate briefs, outlines, and optimization passes without losing clarity or intent.",
    ],
  },
  {
    title: "Module 4: Connecting with Customers on Social Media",
    points: [
      "Map social media strategy across awareness, community building, and conversion touchpoints.",
      "Plan posts and campaigns that adapt messaging by platform, audience, and campaign objective.",
      "Use AI support for ideation, content calendars, creative hooks, and faster iteration cycles.",
    ],
  },
  {
    title: "Module 5: Running Paid Ads and Managing Budgets",
    points: [
      "Understand paid media structure, ad objectives, audience targeting, and bidding basics.",
      "Write stronger ad messaging and align campaigns with landing-page outcomes and funnel stages.",
      "Learn how budgets, testing, and optimization decisions influence efficiency and scale.",
    ],
  },
  {
    title: "Module 6: Making Sense of Data and Predicting Trends",
    points: [
      "Read analytics dashboards to interpret campaign behavior, user journeys, and conversion patterns.",
      "Move beyond reporting into trend identification, forecasting, and decision support.",
      "Apply experimentation and optimization thinking to improve campaign and business performance.",
    ],
  },
  {
    title: "Module 7: Capstone Project",
    points: [
      "Bring strategy, content, channel planning, ads, and measurement into one final execution-driven project.",
      "Present a portfolio-ready capstone that demonstrates structured thinking and practical marketing skill.",
    ],
  },
];

export const instructors: PersonCard[] = [
  {
    name: "Faculty Lead Placeholder",
    role: "Professor of Marketing, Partner IIM",
    summary:
      "A senior academic profile placeholder representing programme-level strategic guidance, research-backed teaching, and curriculum stewardship.",
    link: "https://example.com/faculty-profile-1",
  },
  {
    name: "Industry Mentor Placeholder",
    role: "Growth and Performance Marketing Leader",
    summary:
      "A practitioner placeholder representing industry context, execution frameworks, and review-driven guidance for real-world digital campaigns.",
    link: "https://example.com/faculty-profile-2",
  },
];

export const admissionSteps: StepItem[] = [
  {
    step: "1",
    title: "Submit application",
    description:
      "Fill in the interest form and share your learning goals, background, and motivation.",
  },
  {
    step: "2",
    title: "Complete counselling",
    description:
      "Connect with the admissions team to understand programme fit, expectations, and outcomes.",
  },
  {
    step: "3",
    title: "Join the cohort",
    description:
      "Secure your seat, receive onboarding instructions, and start the bootcamp journey.",
  },
];

export const feeOptions: FeeOption[] = [
  {
    title: "Upfront",
    registrationFee: "₹4,000",
    programFee: "₹56,000",
    totalFee: "₹60,000",
    note: "(+ applicable taxes)",
  },
  {
    title: "EMI",
    registrationFee: "₹4,000",
    programFee: "₹10,453 x 6",
    totalFee: "₹66,718",
    note: "(+ applicable taxes)",
  },
];

export const audienceSegments: AudienceSegment[] = [
  {
    label: "For Tech Professionals",
    edge: "Harness the power of automation to enhance your technical skillset in marketing.",
    points: [
      "Learn how to integrate digital marketing strategies with technology to optimize online presence and campaigns.",
      "Apply your technical knowledge to implement advanced tracking solutions.",
      "Leverage automation tools to streamline marketing workflows and improve campaign efficiency.",
    ],
  },
  {
    label: "For Non-Tech Professionals",
    edge: "Build practical digital marketing confidence without needing a technical background.",
    points: [
      "Learn the terminology, tools, and channel basics needed to enter digital marketing with clarity.",
      "Build confidence through guided projects instead of relying only on theory.",
      "Understand how campaigns are planned, launched, measured, and improved end to end.",
    ],
  },
  {
    label: "For Business Owners/Entrepreneurs",
    edge: "Use digital marketing to drive smarter customer acquisition and sustainable business growth.",
    points: [
      "Build stronger instincts for channel prioritisation across lean and growth-stage environments.",
      "Improve campaign ROI through better budgeting, targeting, and testing discipline.",
      "Create clearer reporting around acquisition, retention, and conversion goals.",
    ],
  },
  {
    label: "For Students & Career Starters",
    edge: "Create a portfolio-led foundation for entry-level digital marketing and growth roles.",
    points: [
      "Learn how teams use SEO, paid media, social media, and email together in real campaigns.",
      "Produce projects that demonstrate execution, not just course completion.",
      "Follow a structured path toward internships and entry-level digital marketing roles.",
    ],
  },
];

export const compareRows: CompareRow[] = [
  {
    title: "Combined Academic and Industry Mentorship",
    thisProgramme:
      "Learn from experienced faculty and senior marketers with hands-on exposure to real execution environments.",
    others:
      "Primarily taught through general academic theory with limited exposure to tools, execution, and real-world product contexts.",
  },
  {
    title: "Hands-On Product Projects & Case Studies",
    thisProgramme:
      "Integrates applied digital marketing, analytics, and AI through projects, business scenarios, and use cases.",
    others:
      "Often rely on conceptual coverage with limited experiential or project-based learning.",
  },
  {
    title: "Industry-Relevant Curriculum",
    thisProgramme:
      "Curriculum is designed for modern digital marketers, emphasizing AI applications, performance analytics, and measurable outcomes.",
    others:
      "Often stay limited to introductory topics with minimal exposure to how modern teams actually work.",
  },
  {
    title: "Certification & Career Signal",
    thisProgramme:
      "Carries a stronger learning signal by combining structured training, guided practice, and institution-backed credibility.",
    others:
      "Certificates can feel generic, less distinctive, and weaker as a hiring or credibility signal.",
  },
  {
    title: "Campus Immersion",
    thisProgramme:
      "Includes an optional campus immersion touchpoint for in-person learning, networking, and cohort connection.",
    others:
      "Usually offer no campus immersion or meaningful on-ground learning opportunities.",
  },
];

export const marketMetrics: MetricCard[] = [
  {
    value: "$786",
    description:
      "is the expected growth for advertising and digital marketing by 2026.",
    source: "Source: industry outlook, 2025",
  },
  {
    value: "$1,005",
    description:
      "is the projected revenue for the mobile advertising market by 2032.",
    source: "Source: market forecast, 2025",
  },
];

export const instituteHighlights: HighlightItem[] = [
  {
    title: "NIRF 2025:",
    description:
      "Ranked among India's leading management institutions, reinforcing IIM Ranchi's standing as a nationally recognised business school.",
  },
  {
    title: "Entrepreneurship & Social Impact:",
    description:
      "Encourages innovation and social responsibility through entrepreneurship initiatives, partnerships, and startup-facing programs.",
  },
  {
    title: "Future-Focused & Multidisciplinary:",
    description:
      "Offers multidisciplinary, future-ready learning across analytics, policy, strategy, leadership, and emerging business contexts.",
  },
  {
    title: "Research & Global Outlook:",
    description:
      "Builds analytical and globally aware leadership through research centres, collaborations, and broad managerial exposure.",
  },
];

export const supportItems: FeatureItem[] = [
  {
    title: "Career Readiness and Portfolio Building",
    description:
      "We will help you build a stronger portfolio and sharpen the practical skills needed to become job-ready.",
  },
  {
    title: "Real-Time Learning Ecosystem",
    description:
      "Experience a curriculum with live classes, review loops, and academic assistance designed to keep pace with industry needs.",
  },
  {
    title: "Industry Integration and Projects",
    description:
      "Participate in hands-on projects and guided practice so your learning stays practical, relevant, and execution-focused.",
  },
];

export const faqCategories: FaqCategory[] = [
  {
    label: "Programme overview",
    items: [
      {
        question: "What is the expected duration of the bootcamp?",
        answer:
          "The placeholder version of this page positions the programme as a six-month bootcamp with a part-time weekly commitment.",
      },
      {
        question: "How is the programme delivered?",
        answer:
          "The current static UI presents the learning experience as primarily online with guided sessions and cohort support.",
      },
    ],
  },
  {
    label: "Eligibility and admissions",
    items: [
      {
        question: "Who can apply to this bootcamp?",
        answer:
          "The structure is designed for students, working professionals, founders, and career switchers with interest in digital marketing.",
      },
      {
        question: "Is there a counselling step after applying?",
        answer:
          "Yes. The page includes an admissions journey with application, counselling, and onboarding stages.",
      },
    ],
  },
  {
    label: "Fees and payment",
    items: [
      {
        question: "Are there multiple payment options?",
        answer:
          "Yes. The fee layout includes both an upfront option and an EMI-style option for presentation purposes.",
      },
      {
        question: "Does the price shown include taxes?",
        answer:
          "The UI currently communicates taxes as an additional line item, mirroring the commercial structure of similar programme pages.",
      },
    ],
  },
  {
    label: "Student support",
    items: [
      {
        question: "Will learners get portfolio and placement support?",
        answer:
          "The static page presents Eduveda support around readiness, portfolio building, and job-oriented guidance, without claiming a live placement workflow yet.",
      },
      {
        question: "What kind of mentorship is highlighted?",
        answer:
          "The landing page positions the offering as a mix of academic leadership and execution-focused mentoring.",
      },
    ],
  },
];

export const partnerLabels = [
  "NBFC Partner 01",
  "NBFC Partner 02",
  "NBFC Partner 03",
  "NBFC Partner 04",
  "NBFC Partner 05",
  "NBFC Partner 06",
];

export const footerLinks = [
  { label: "Privacy Policy", href: "#hero-section" },
  { label: "Terms and Conditions", href: "#hero-section" },
];
