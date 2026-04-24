import {
  Nav,
  techs,
  services,
  featured,
  docklink,
  Social,
  processtype,
} from "./type";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLaptopCode,
  FaLinkedinIn,
  FaBriefcase,
  FaUser,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";
import { FaSquareXTwitter, FaBolt, FaPalette } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { p } from "motion/react-client";

export const navdata: Nav[] = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/work",
    title: "Work",
  },
  {
    id: 3,
    href: "/about",
    title: "About",
  },
  {
    id: 4,
    href: "/services",
    title: "Services",
  },
  {
    id: 5,
    href: "/contact",
    title: "Contact",
  },
];

export const links: docklink[] = [
  {
    title: "Home",
    icon: (
      <GoHomeFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "Work",
    icon: (
      <FaBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/work",
  },
  {
    title: "About",
    icon: (
      <FaUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/about",
  },
  {
    title: "Services",
    icon: (
      <FaTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/services",
  },
  {
    title: "Contact",
    icon: (
      <FaEnvelope className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/contact",
  },
];

export const tech: techs[] = [
  { name: "Next.js", logo: "/nextjs.svg" },
  { name: "TypeScript", logo: "/typescript.svg" },
  { name: "Tailwind CSS", logo: "/tailwind.svg" },
  { name: "Framer Motion", logo: "/motion.svg" },
  { name: "ShadCN UI", logo: "/shadcn.svg" },
];

export const servicecard: services[] = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Website Creation & Deployment",
    description: "I build responsive websites and deploy them live.",
  },
  {
    id: 2,
    icon: <FaBolt />,
    title: "Website Redesign",
    description:
      "I improve the UI, layout, and performance of existing websites.",
  },
  {
    id: 3,
    icon: <FaPalette />,
    title: "Website Maintenance",
    description: "Ongoing updates, fixes, and improvements.",
  },
];

export const featuredcard: featured[] = [
  {
    id: 1,
    image: "/cashivosc.PNG",
    title: "Cashivo fintech",
    description: "A beautiful multi-page website for a fintech",
    stack: "nextjs, typescript, tailwindcss",
    link: "https://fintech-site-8zzx.vercel.app/",
  },
  {
    id: 2,
    image: "/gymsc.PNG",
    title: "iftiness gym",
    description: "A beautiful multi-page website for a fitness gym",
    stack: "nextjs, typescript, tailwindcss",
    link: "https://gym-site-iota-plum.vercel.app/",
  },
  {
    id: 3,
    image: "/pottedsc.PNG",
    title: "potted plants",
    description:
      "A beautiful multi-page showcase website for a potted plants business",
    stack: "reactjs, javascript, tailwindcss",
    link: "https://potted-plants-site.vercel.app/",
  },
];

export const projectcard: featured[] = [
  {
    id: 1,
    image: "/gymsc.PNG",
    title: "iftiness gym",
    description: "A beautiful multi-page website for a fitness gym",
    stack: "nextjs, typescript, tailwindcss",
    link: "https://gym-site-iota-plum.vercel.app/",
  },
  {
    id: 2,
    image: "/businessagency.PNG",
    title: "nexure agency",
    description: "A beautiful single-page website for a business agency",
    stack: "nextjs, typescript, tailwindcss",
    link: "https://business-agency-amber.vercel.app/",
  },
  {
    id: 3,
    image: "/estatesc.PNG",
    title: "Aurelia estate",
    description: "A beautiful multi-page website for a real-estate company",
    stack: "nextjs, typescript, tailwindcss",
    link: "https://aurelia-real-estate.vercel.app/",
  },
  {
    id: 4,
    image: "/restaurantsc.PNG",
    title: "pure delight",
    description: "A beautiful single-page website for a restaurant",
    stack: "nextjs, typescript, tailwindcss",
    link: "https://pure-delight-restaurant.vercel.app/",
  },
  {
    id: 5,
    image: "/cashivosc.PNG",
    title: "Cashivo fintech",
    description: "A beautiful multi-page website for a fintech",
    stack: "nextjs, typescript, tailwindcss",
    link: "https://fintech-site-8zzx.vercel.app/",
  },
  {
    id: 6,
    image: "/pottedsc.PNG",
    title: "potted plants",
    description:
      "A beautiful multi-page showcase website for a potted plants business",
    stack: "reactjs, javascript, tailwindcss",
    link: "https://potted-plants-site.vercel.app/",
  },
];

export const process: processtype[] = [
  {
    id: 1,
    process: "1",
    title: "discussion",
    description: "We talk about your project and goals.",
  },
  {
    id: 2,
    process: "2",
    title: "planning",
    description: "I structure the layout and features.",
  },
  {
    id: 3,
    process: "3",
    title: "development",
    description: "I build your responsive website.",
  },
  {
    id: 4,
    process: "4",
    title: "review",
    description: "You request revisions if needed.",
  },
  {
    id: 5,
    process: "5",
    title: "launch",
    description: "Your website goes live.",
  },
];

export const socials: Social[] = [
  {
    id: 1,
    logo: <FaLinkedinIn />,
    href: "#",
  },
  {
    id: 2,
    logo: <FaSquareXTwitter />,
    href: "#",
  },
  {
    id: 3,
    logo: <FaInstagramSquare />,
    href: "#",
  },
  {
    id: 4,
    logo: <FaFacebook />,
    href: "#",
  },
];
