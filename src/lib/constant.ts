import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import {
  Github,
  Handshake,
  Instagram,
  LampDesk,
  Linkedin,
  LucideProps,
  Pickaxe,
  Pyramid,
  SquareCode,
  SquareTerminal,
  Twitter,
  Wallet,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type navItems = {
  name: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  options: boolean;
}[];

export const navItems: navItems = [
  {
    name: "Home",
    href: "/",
    icon: LampDesk,
    options: false,
  },
  {
    name: "Internship Programs",
    href: "/internship-programs",
    icon: SquareTerminal,
    options: false,
  },
  {
    name: "Services",
    href: "/services",
    icon: Pickaxe,
    options: true,
  },
  {
    name: "Bug-Buddy",
    href: "#",
    icon: Pyramid,
    options: false,
  },
];

// --------------------------------------------------------------------
// Images Links

export const techImagesLinks = {
  html: "https://ik.imagekit.io/bc/TechImages/html.png?updatedAt=1727111393899",
  css: "https://ik.imagekit.io/bc/TechImages/css.png?updatedAt=1727111393899",
  js: "https://ik.imagekit.io/bc/TechImages/JS.png?updatedAt=1727111393899",
  react:
    "https://ik.imagekit.io/bc/TechImages/ReactJS.png?updatedAt=1727111393899",
  node: "https://ik.imagekit.io/bc/TechImages/nodejs.png?updatedAt=1727111393899",
  mongo:
    "https://ik.imagekit.io/bc/TechImages/mongo-db.png?updatedAt=1727111393899",
  tailwind:
    "https://ik.imagekit.io/bc/TechImages/Tailwind.png?updatedAt=1727111393899",
  github:
    "https://ik.imagekit.io/bc/TechImages/github.png?updatedAt=1727111393899",
  flutter:
    "https://ik.imagekit.io/bc/TechImages/flutter.png?updatedAt=1726921352697",
  git: "https://ik.imagekit.io/bc/TechImages/git.png?updatedAt=1727111393899",
  wordpress:
    "https://ik.imagekit.io/bc/TechImages/wordpress.png?updatedAt=1727111393899",
  typescript:
    "https://ik.imagekit.io/bc/TechImages/typescript.png?updatedAt=1727111393899",
  vscode:
    "https://ik.imagekit.io/bc/TechImages/visual-studio-code.png?updatedAt=1727111393899",
  npm: "https://ik.imagekit.io/bc/TechImages/npm.png?updatedAt=1727111393899",
  mysql:
    "https://ik.imagekit.io/bc/TechImages/mysql.png?updatedAt=1727868957550",
  contactUs:
    "https://ik.imagekit.io/bc/Images/Service_Thumbnails%20/Contact_Us.png?updatedAt=1728971356278",
};

export const services = [
  {
    name: "All Services",
    href: "/services",
    badge: "Quality",
  },
  {
    name: "Web Development",
    href: "/services/wd",
    badge: "Premium",
  },
  {
    name: "App Development",
    href: "/services/ad",
    badge: "Premium",
  },
  {
    name: "Backend Development",
    href: "/services/bd",
    badge: "Premium",
  },
  {
    name: "Wordpress",
    href: "/services/wp",
    badge: "Premium",
  },
  {
    name: "Content Writing",
    href: "/services/cw",
    badge: "Premium",
  },
  {
    name: "Graphic Designing",
    href: "/services/gd",
    badge: "Premium",
  },
];

export const detailedServices = [
  {
    name: "Backend Development",
    href: "/services/bd",
    description:
      "Our backend development services offer comprehensive solutions for creating and managing backend. We'll work with you to create a custom backend that meets your specific needs.",
    imageSrc:
      "https://ik.imagekit.io/bc/Images/Service_Thumbnails%20/Backend_Service.png?updatedAt=1728841084075",
    imageAlt: "Backend Development",
    Provides: ["NodeJS", "TypeScript", "ExpressJS", "Server Actions", "NextJS"],
    minPrice: 14999,
    maxPrice: 39999,
    serviceId: "bd",
    logos: [techImagesLinks.node, techImagesLinks.mongo, techImagesLinks.mysql],
  },
  {
    name: "Web Development",
    href: "/services/wd",
    description:
      "We offer comprehensive web development services to help you build a strong online presence. Our team of experts will work with you to create a custom website that meets your specific needs.",
    imageSrc:
      "https://ik.imagekit.io/bc/Images/Service_Thumbnails%20/WebDevelopment_service.png?updatedAt=1728837934417",
    imageAlt: "Web Development",
    minPrice: 14999,
    maxPrice: 39999,
    serviceId: "wd",
    Provides: [
      "HTML",
      "CSS",
      "JS",
      "NodeJS",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Bootstrap",
      "ShadCN",
      "Lenis",
      "GSAP",
    ],
  },

  {
    name: "App Development",
    href: "/services/ad",
    description:
      "Our app development services offer comprehensive solutions for creating and managing mobile apps. We'll work with you to create a custom app that meets your specific needs.",
    imageSrc:
      "https://ik.imagekit.io/bc/Images/Service_Thumbnails%20/AppDevelopment_service.png?updatedAt=1728839904251",
    imageAlt: "App Development",
    Provides: ["ReactNative", "Flutter", "FlutterFlow"],
    minPrice: 19999,
    maxPrice: 39999,
    serviceId: "ad",
  },
  {
    name: "Content Writing",
    href: "/services/cw",
    description:
      "Our content writing services offer comprehensive solutions for creating and managing content. We'll work with you to create a custom content that meets your specific needs.",
    imageSrc:
      "https://ik.imagekit.io/bc/Images/Service_Thumbnails%20/ContentWriting_service.png?updatedAt=1728925695580",
    imageAlt: "Content Writing",
    Provides: [
      "Copy Writing",
      "Article Writing",
      "Blog Writing",
      "Script Writing",
    ],
    minPrice: 0.9,
    maxPrice: 3.9,
    serviceId: "cw",
  },
  {
    name: "Graphic Designing",
    href: "/services/gd",
    description:
      "Our graphic design services offer comprehensive solutions for creating and managing graphics. We'll work with you to create a custom graphic that meets your specific needs.",
    imageSrc:
      "https://ik.imagekit.io/bc/Images/Service_Thumbnails%20/GraphicDesigning_service.png?updatedAt=1728968749770",
    imageAlt: "Graphic Designing",
    Provides: ["UI/UX", "Logo-Designing", "Branding", "Thumbnail Designing"],
    minPrice: 999,
    maxPrice: 19999,
    serviceId: "gd",
  },
  {
    name: "Wordpress Development",
    href: "/services/wp",
    description:
      "Our wordpress development services offer comprehensive solutions for creating and managing wordpress. We'll work with you to create a custom wordpress that meets your specific needs.",
    Provides: ["E-Commerce", "Wordpress Theme", "Wordpress Plugin"],
    imageSrc:
      "https://ik.imagekit.io/bc/Images/Service_Thumbnails%20/wordpress_service.png?updatedAt=1729680436036",
    imageAlt: "Wordpress web development",
    minPrice: 5999,
    maxPrice: 39999,
    serviceId: "wp",
  },
];

export const perks = [
  {
    Name: "Industry Standard Techologies",
    Icon: SquareCode,
    IconColor: "cyan",
    Description:
      "Our internship programs teach the latest industry-leading technologies, ensuring you're equipped with the skills that are in demand in today's tech landscape.",
  },
  {
    Name: "Afforable Price",
    Icon: Wallet,
    IconColor: "green",
    Description:
      "Our internship programs provide outstanding quality at a great price, giving you exceptional value and top-notch education without stretching your budget.",
  },
  {
    Name: "Job Assistant",
    Icon: Handshake,
    IconColor: "blue",
    Description:
      "Along with our high-quality internship programs, we offer dedicated job assistance to help you secure your ideal position and advance your career.",
  },
];

type iconByLR = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

type iconByRUI = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;

type socials = {
  name: string;
  href: string;
  icon: iconByLR | iconByRUI;
}[];

export const socials: socials = [
  {
    name: "Twitter",
    href: "https://x.com/BuddyCode_",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/104452426",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/104452426",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    name: "Discord",
    href: "#",
    icon: DiscordLogoIcon,
  },
];

export const navFooterItems = [
  {
    name: "About us",
    href: "/about",
  },
  {
    name: "Support",
    href: "/support",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
];

export const contactDetails = [
  "buddycodeoffical@gmail.com",
  "+91-8930667637",
  "+91-9646848911",
];

enum courseLevels {
  "Beginner" = "Beginner",
  "Intermediate" = "Intermediate",
  "Pro-dev" = "Pro-dev",
}

enum coursePurposes {
  "Indepth" = "Indepth",
  "Placement" = "Placement",
  "Internship" = "Internship",
  "Overview" = "Overview",
}

interface Internship {
  name: string;
  description: string;
  href: string;
  price: number;
  droppedPrice: number;
  discountAllowed: () => number;
  tags: string[];
  benefits: string[];
  imageSrc: string;
  imageAlt: string;
  courseLevel: courseLevels;
  coursePurpose: coursePurposes;
  upcoming: boolean;
  internshipNo: string;
}

export const internshipDetails: Internship[] = [
  {
    name: "Conquer-Frontend : Create what you think",
    description: `Conquer the web building game with Conquer-Frontend. Nail HTML, CSS, JS and Solve the real world problems which helps to build logic and design. Dive into the fun and industry projects and be interview ready.`,
    href: "/internship-programs/cf",
    price: 19999,
    droppedPrice: 14999,
    discountAllowed: () => {
      const originalPrice = 19999;
      const discountedPrice = 14999;
      return Math.round(
        ((originalPrice - discountedPrice) / originalPrice) * 100
      );
    },
    tags: ["Web Development", "Frontend", "ReactJS", "GSAP", "Lenis"],
    benefits: [
      "3-Months ⚡",
      "Bounties 💰",
      "EMI 👻",
      "Placement Assistants*🗿",
      "Self-Development 🧠",
    ],
    imageSrc: "https://ik.imagekit.io/bc/Images/cf.jpg?updatedAt=1727111262213",
    imageAlt: "Conquer-Frontend",
    courseLevel: courseLevels["Beginner"],
    coursePurpose: coursePurposes["Indepth"],
    upcoming: false,
    internshipNo: "cf",
  },
  {
    name: "Conquer-Backend: Build the future",
    description: `Conquer the web building game with Conquer-Backend. Nail the backend technologies and solve the real world problems. Dive into the fun and industry projects and be interview ready.`,
    href: "/internship-programs/cb",
    price: 19999,
    droppedPrice: 14999,
    discountAllowed: () => {
      const originalPrice = 19999;
      const discountedPrice = 14999;
      return Math.round(
        ((originalPrice - discountedPrice) / originalPrice) * 100
      );
    },
    tags: ["Mongoose", "MongoDB", "NoSQL", "Backend", "NodeJS"],
    benefits: ["3-Months", "Bounties", "EMI", "Placement Assistants*"],
    imageSrc:
      "https://ik.imagekit.io/bc/Images/Frame%203%20(1).jpg?updatedAt=1727167210312",
    imageAlt: "Conquer-Backend",
    courseLevel: courseLevels["Beginner"],
    coursePurpose: coursePurposes["Indepth"],
    upcoming: true,
    internshipNo: "cb",
  },
];

//Syllabus

export const cfSyllabus = [
  {
    label: "Internship Program - Walkthrough",
    topics: [
      "Orientation - Analysis the journey",
      "Warmup -  Essential concepts",
    ],
  },
  {
    label: "HTML - Build the architecture",
    topics: ["HTML - Deep Dive", "HTML5 - Semantic Elements"],
  },
  {
    label: "CSS - Style the architecture",
    topics: [
      "CSS - Understanding core concepts",
      "CSS3 - Flexbox & Grid",
      "CSS - Responsive Design",
      "Project - Elevate your developement skills",
      "CSS Animations - Move the static",
      "Tailwind CSS - New way of styling",
      "Project - Tailwind & Responsive design",
    ],
  },
  {
    label: "Git & Github",
    topics: ["Git & Github - Deep Dive", "Git & Github - Advanced Concepts"],
  },
  {
    label: "JavaScript - Everything you need to know",
    topics: [
      "JavaScript - Needs to start ",
      "JavaScript - Advanced Stuff which is must know",
      "JS - Asynchronous Programming",
      "JavaScript - DOM adding life to web",
      "JS - Working of Events,Everthing need to know about Event",
      "JS - Interview Questions",
    ],
  },
  {
    label: "NodeJS & NPM",
    topics: [
      "NodeJS + NPM - Essentials",
      "NodeJS - Basic Architecture & Concepts",
      "Express - Building a Basic Server",
    ],
  },
  {
    label: "Logic Building",
    topics: [
      "Logic Building - How to think?",
      "Logic Building - Real World Problems",
      "Logic Building - How to improve?",
    ],
  },
  {
    label: "GSAP and Lenis - Fun with animations",
    topics: [
      "GSAP - Master the Animation with GreenSock ",
      "Lenis - Sliky smooth scroll",
      "GSAP and Lenis - Project Time",
    ],
  },
  {
    label: "ReactJS ",
    topics: [
      "ReactJS - React History & Concepts",
      "ReactJS - All Essential Concepts",
      "ReactJS - Advance Stuff with Projects",
      "ReactJS - Clone Project (On demand) with Industry Standards Coding Practices",
    ],
  },
  {
    label: "Mega Project ",
    topics: ["Lets Build from Scratch"],
  },
  {
    label: "Additional Things",
    topics: [
      "AI Tools (Chatgpt,Ideogram,Cursor)",
      "Resume Building",
      "Mock Interviews",
    ],
  },
];
