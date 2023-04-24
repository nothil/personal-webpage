import {MapIcon} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage3 from '../images/portfolio/form.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage6 from '../images/portfolio/ptoject-calculator.png';
import porfolioImage2 from '../images/portfolio/RGB-game.png';
import porfolioImage5 from '../images/portfolio/ToDoList.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: '',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Nothile Ngcobo.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, at{' '}
        <strong className="text-stone-100">I enjoy building</strong> business solutions applications , registrar and
        site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me running <strong className="text-stone-100">long distance</strong>, races{' '}
        and <strong className="text-stone-100">local park runs</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I see this opportunity as away to expose myself and embark into great work environment.  `,
  aboutItems: [{label: 'Location', text: 'JHB, SA', Icon: MapIcon}],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: '',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 5,
      },

      {
        name: 'javaScript',
        level: 8,
      },
    ],
  },
  {
    name: '',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'HTML5&Css3',
        level: 8,
      },
      {
        name: 'mySQL',
        level: 5,
      },
      {
        name: 'Express',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Movie API',
    description: 'I created a React movies API, using a free api.',
    url: 'https://github.com/nothil/movies-api',
    image: porfolioImage1,
  },
  {
    title: 'Memory game',
    description: 'I created Javascript random color picker game .',
    url: 'https://github.com/nothil/colorRGB-Game.git',
    image: porfolioImage2,
  },
  {
    title: 'Back-end node file IO',
    description: 'I have also explored a back-end .',
    url: 'https://github.com/nothil/node-file-IO',
    image: porfolioImage3,
  },
  {
    title: 'TDD',
    description: 'TDD project.',
    url: 'https://github.com/nothil/TDD-projec',
    image: porfolioImage4,
  },
  {
    title: 'List creator',
    description: 'This allows the user to create a list of items, CRUD.',
    url: 'https://github.com/nothil/ToDoList',
    image: porfolioImage5,
  },
  {
    title: 'Calculator',
    description: 'This allows the user to calculate (JS calculator).',
    url: 'https://github.com/nothil/calculator',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const experience: TimelineItem[] = [
  {
    date: 'June 2020 - 2023',
    location: '',
    title: 'Software Developer',
    content: (
      <p>
        I was responsible to Work in all stages of development, with other teams,i.e design, mobile and strategy to
        deliver defined requirements Creating server and database functionality. This experience has allowed me to
        develop the skill set which is necessary to successfully execute the above mentioned role.
      </p>
    ),
  },
];
export const education: TimelineItem[] = [
  {
    date: 'June 2020',
    location: 'Umuzi Academy college',
    title: 'Information Technology(Systems development)',
    content: <p></p>,
  },
  {
    date: 'March 2019',
    location: '',
    title: '',
    content: (
      <p>
        I started as a self taught developer, while I was working for a firm as an assistant auditor, that time I was
        learning basic HTML and CSS, I came across a website where I applied for it, I was accepted for a software
        development programme.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */

export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '.',
  items: [
    {
      type: ContactType.Email,
      text: 'nothilegugu@gmail.com',
      href: 'mailto:nothilegugu@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'JHB, South Africa',
    },

    {
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/nothil',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/nothil'},

  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/nothile-ngcobo-291243199/',
  },
];
