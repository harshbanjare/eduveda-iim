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
  {
    label: "Claude",
    src: "/learning-assets/logo-claude.svg",
    width: 38,
    height: 38,
  },
  {
    label: "Gemini",
    src: "/learning-assets/logo-gemini.svg",
    width: 38,
    height: 38,
  },
  {
    label: "Canva",
    src: "/learning-assets/logo-canva.svg",
    width: 110,
    height: 42,
  },
  {
    label: "Semrush",
    src: "/learning-assets/logo-semrush.svg",
    width: 38,
    height: 38,
  },
  {
    label: "HubSpot",
    src: "/learning-assets/logo-hubspot.svg",
    width: 38,
    height: 38,
  },
  {
    label: "Notion",
    src: "/learning-assets/logo-notion.svg",
    width: 38,
    height: 38,
  },
  {
    label: "Perplexity",
    src: "/learning-assets/logo-perplexity.svg",
    width: 38,
    height: 38,
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
      "Ranked among India's leading management institutions, reinforcing IIM Lucknow's standing as a nationally recognised business school.",
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
    label: "Programme Overview",
    items: [
      {
        question: "What is the program duration?",
        answer:
          "The program spans 6 months, offering a structured and immersive learning journey designed to equip you with in-demand digital marketing skills.",
      },
      {
        question:
          "Will I receive a digital or physical copy of the programme certificate?",
        answer:
          "Upon successful completion of the program and fulfillment of all requirements, participants will receive a digital and physical copy of the certificate. The physical certificate will be dispatched to the registered address shared during enrollment.",
      },
      {
        question:
          "When will I receive my certificate after completing the program?",
        answer:
          "Certificates will be issued within 2–3 months from the date of the final examination. The exact timeline for issuance will be communicated during the program.",
      },
      {
        question: "What is the mode of delivery for the program?",
        answer:
          "The mode of delivery of the program is online through the Zoom platform.",
      },
      {
        question: "Who will be teaching the classes in this program?",
        answer:
          "The sessions will be led by esteemed faculty members of IIM Lucknow and different IIMs and IITs who bring extensive expertise in digital marketing, consumer behavior, and marketing analytics. In addition to this, you will also have sessions led by industry experts, ensuring a comprehensive learning experience.",
      },
      {
        question: "What is campus immersion?",
        answer:
          "The 3-day campus immersion is an optional in-person immersive experience designed to enhance learning through instructor interaction, campus exposure and networking opportunities.",
      },
      {
        question: "What is the fee for the immersion?",
        answer: `The immersion fee varies based on the participation and accommodation option selected:

₹2,000 + GST per day (Double Occupancy) - includes accommodation and food.
₹3,000 + GST per day (Single Occupancy) - includes accommodation and food.
₹1,000 + GST per day (Non-Residential participation).

Guest house accommodation is subject to availability. The immersion fee is not included in the programme fee and must be paid separately by participants. Travel expenses are not included and must be arranged and borne individually by the participants.`,
      },
      {
        question: "Is campus immersion mandatory, and when does it take place?",
        answer:
          "It is typically scheduled towards the end of the program or after completion. While not mandatory, participation is highly recommended. The schedule will be shared in advance to enable travel planning.",
      },
    ],
  },
  {
    label: "Eligibility & Admissions",
    items: [
      {
        question: "What are the eligibility criteria for the program?",
        answer:
          "Anyone with a minimum qualification of 12th grade (or equivalent) and a strong interest in building a career in digital marketing is eligible to apply for the program.",
      },
      {
        question: "Can international students apply for the program?",
        answer:
          "Yes, international students can apply for the program, provided they meet the eligibility criteria set for the course.",
      },
    ],
  },
  {
    label: "Fee and Payment",
    items: [
      {
        question: "What is the difference between Registration fee and Course fees?",
        answer:
          "The Registration Fee secures your seat in the program. The Course Fee is the total program cost, which can be paid upfront or in EMIs with support from our NBFC partner. Your enrollment is confirmed only after the full Course Fee is paid.",
      },
      {
        question:
          "How soon will I receive the receipt after paying the registration or course fee?",
        answer:
          "The receipt will be emailed to your registered address within 24–48 business hours of payment.",
      },
      {
        question:
          "Are there any specific financial institutions or partners involved in the EMI process?",
        answer:
          "Yes, we've partnered with trusted NBFCs like Bajaj Finance, ShopSe, Varthana, and Propelld to support you with the EMI process.",
      },
      {
        question: "What is the fee payment deadline?",
        answer:
          "The fee payment deadline is available on your dashboard. Kindly ensure to complete the fee payment within the timelines to complete your enrolment in the program.",
      },
      {
        question: "Is there any financial aid or scholarship available?",
        answer:
          "Yes, scholarships are offered based on your performance in the Qualifier test. The program reserves the right to determine the eligibility and extent of the scholarship awarded to each candidate.",
      },
      {
        question: "What is the rate of interest on the loan?",
        answer:
          "The rate of interest depends upon multiple factors like tenure, amount, credit score, NBFC partner etc. The details will be informed by the finance team for the program.",
      },
      {
        question: "Is there any additional cost for admission kits?",
        answer:
          "The kit cost of ₹600 is already included in the total course fee. There are no additional charges for admission kits.",
      },
      {
        question:
          "Are there any additional charges for assessments during the course?",
        answer:
          "The assessment cost of ₹1400, which covers all assessments throughout the course, is already included in the total course fee. No extra charges will be applicable.",
      },
    ],
  },
  {
    label: "Class Schedule",
    items: [
      {
        question: "What are the class timings?",
        answer:
          "The classes are scheduled on weekdays as well as weekends, designed with your time and priorities in mind. On weekdays, classes are scheduled from 8:00 PM onwards and weekend timings are subject to professor availability and schedule. The detailed schedule will be shared with you on Day 1 of the program.",
      },
      {
        question: "How many hours of engagement are required per week?",
        answer:
          "You'll need to dedicate approximately 8–10 hours per week, which includes attending live sessions, completing tutorials, and engaging in self-paced study to stay on track with the program.",
      },
      {
        question: "How will the class schedule be communicated to students?",
        answer:
          "The class schedule will be communicated primarily through the Learning Management System (LMS). It will also be shared on the official WhatsApp community.",
      },
      {
        question:
          "What if I miss a live session, will I be able to access recording?",
        answer:
          "We recommend you attend live sessions. In any unforeseen circumstances, if you miss attending live classes, recordings will be made accessible to you on the Learning Management System (LMS). Kindly ensure to watch the entire class recording to ensure you don't miss important concepts covered.",
      },
      {
        question:
          "I am a working professional or college student and would like to plan my week ahead. Can I get access to the schedule well in advance?",
        answer:
          "Yes, you'll receive the class schedule and updates every Saturday for the upcoming week, allowing you to plan your time effectively and stay organized.",
      },
      {
        question: "Is attendance mandatory for course completion?",
        answer:
          "Yes, to be eligible for course completion, you must maintain a minimum of 65% attendance, which can be achieved through either live sessions or recorded lectures.",
      },
      {
        question: "How is attendance calculated?",
        answer:
          "Attendance is calculated automatically through the Learning Management System (LMS). You will be marked present if you complete either one of the following in full: Live attendance, counted when you join the live session in full using your registered email ID and attend the class; or recording attendance, counted when you watch the session recording in full within 30 days of the class.",
      },
      {
        question:
          "What happens if the student doesn't meet the required attendance criteria?",
        answer:
          "If a student does not meet the required attendance criteria, they will not be eligible to receive the course completion certificate.",
      },
      {
        question: "Will classes be held on weekdays or weekends?",
        answer:
          "Live classes are scheduled on weekdays (Monday-Friday) and Saturdays to balance intensity with flexibility for working professionals and college students. All important sessions start after 8 PM only.",
      },
      {
        question:
          "What if I am unable to attend live sessions or watch recordings within 30 days due to some exigencies?",
        answer:
          "In such cases, you can raise a support ticket with your respective Program Coordinator, along with the necessary supporting documents. Exceptions may be granted after reviewing your request.",
      },
    ],
  },
  {
    label: "Student Support & Learning Experience",
    items: [
      {
        question: "How can I raise any queries once I enroll in the program?",
        answer:
          "Once your enrolment is complete, you will be onboarded on the Learning Management System (LMS). You can raise your queries through ticketing support and your program coordinator support with all non-conceptual queries during the tenure of the course.",
      },
      {
        question: "How can I interact with my peers?",
        answer:
          "You will have opportunities to engage throughout the program. You can connect with industry mentors and TAs during dedicated doubt-clearing sessions. Additionally, you can interact and collaborate with fellow learners through our learning platforms and private Discord community.",
      },
      {
        question: "Is there a helpline session for student queries?",
        answer:
          "Yes, a dedicated live helpline session is available to address your queries. Details of the session will be shared as part of your weekly schedule to help you stay informed and supported throughout the program.",
      },
      {
        question: "What learning resources will be made available during the program?",
        answer:
          "You will have access to a variety of learning resources, like notes, pre-reads, class recordings, assignments to support learning on the Learning Management System (LMS).",
      },
      {
        question: "How often will assessments be conducted?",
        answer:
          "Assessments will be conducted periodically throughout the program, with evaluations at the end of each module and ongoing project work to track your progress.",
      },
      {
        question: "What happens if I don't clear a module?",
        answer:
          "You will be given two attempts for evaluation and the best of two scores will be considered for final grading. The minimum clearance criteria is 40%.",
      },
    ],
  },
  {
    label: "Placement Opportunities",
    items: [
      {
        question: "Does the program offer placement assistance?",
        answer:
          "If you score more than 7 CGPA and meet the performance and engagement criteria of the program, you will be eligible for placement assistance from Masai School, the ed-tech and implementation partner of the program.",
      },
      {
        question: "What is the average salary package for graduates of this program?",
        answer:
          "A certificate from a prestigious institution like IIM Lucknow adds strong credibility to your profile and can significantly enhance your chances of landing opportunities with competitive compensation. Average salary depends on several factors including your current education status, the role you pursue, and the company.",
      },
      {
        question:
          "What kind of support will I receive to prepare for job interviews?",
        answer:
          "If you meet the required performance and engagement criteria during the program, you'll receive dedicated support to get industry-ready. This includes resume building, LinkedIn profile enhancement, and mock AI-based interviews, equipping you with the tools and confidence to make the most of available career opportunities.",
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
