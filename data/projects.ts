export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

const github = "https://github.com/Yuras69";

export const projects: Project[] = [
  { slug: "event-management-system", title: "Event Management System", description: "A platform for organizing events and managing registrations in one place.", longDescription: "An event-management system designed to help organizers create events, manage attendees, and keep event details organized.", image: "/images/projects/ecommerce.png", tags: ["Event Management", "Web Development"], github: `${github}/Event-Management-System`, featured: true },
  { slug: "nextjs-learning", title: "NextJs_Learning", description: "A hands-on repository for learning Next.js.", longDescription: "A collection of exercises and practical work created while learning Next.js.", image: "/images/projects/portfolio.png", tags: ["Next.js", "TypeScript"], github: `${github}/NextJs_Learning`, featured: true },
  { slug: "user-management-system", title: "UserManagementSystem", description: "Modern user management system with CRUD operations and responsive design.", longDescription: "Built with React and Vite, featuring CRUD operations, JSON Server, Axios, React Router, and responsive design.", image: "/images/projects/hospital.png", tags: ["React", "Vite", "TypeScript", "Axios"], github: `${github}/UserManagementSystem`, featured: true },
  { slug: "crud-project", title: "CRUD-PROJECT", description: "A project for practicing CRUD functionality.", longDescription: "A TypeScript project focused on learning create, read, update, and delete operations.", image: "/images/projects/restaurant.png", tags: ["TypeScript", "CRUD"], github: `${github}/CRUD-PROJECT`, featured: true },
  { slug: "internship-task", title: "Internship_Task", description: "A TypeScript project completed as an internship task.", longDescription: "A TypeScript repository created for an internship task.", image: "/images/projects/ecommerce.png", tags: ["TypeScript"], github: `${github}/Internship_Task`, featured: true },
  { slug: "shadcn-learning", title: "ShadCn_Learning-", description: "A TypeScript project for learning shadcn/ui.", longDescription: "A learning repository exploring shadcn/ui components in a TypeScript project.", image: "/images/projects/portfolio.png", tags: ["TypeScript", "shadcn/ui"], github: `${github}/ShadCn_Learning-`, featured: true },
  { slug: "shopping-cart", title: "Shopping_Cart", description: "A JavaScript shopping cart project.", longDescription: "A JavaScript project created to practice shopping-cart functionality.", image: "/images/projects/ecommerce.png", tags: ["JavaScript"], github: `${github}/Shopping_Cart`, featured: true },
  { slug: "react-learning", title: "React-Learning", description: "A repository for learning React.", longDescription: "A CSS and React learning repository containing exercises and experiments.", image: "/images/projects/hospital.png", tags: ["React", "CSS"], github: `${github}/React-Learning`, featured: true },
  { slug: "internship-learning", title: "Internship_Learning", description: "A JavaScript learning project from an internship.", longDescription: "A JavaScript repository created while learning during an internship.", image: "/images/projects/restaurant.png", tags: ["JavaScript"], github: `${github}/Internship_Learning`, featured: true },
  { slug: "smart-waste-management-system", title: "Smart-Waste-Management-System", description: "A smart waste management system project.", longDescription: "A repository for a smart waste management system project.", image: "/images/projects/portfolio.png", tags: ["Web Development"], github: `${github}/Smart-Waste-Management-System`, featured: true },
];
