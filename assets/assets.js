import user_image from './user_image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const projects = [
  {
    description: 'Grocery Store',
    bgImage: 'organic_vegitable_image.png',
    codeUrl: 'https://github.com/priyankatayi/shopping-cart',
    liveUrl: 'https://store-alpha-weld.vercel.app/',
  },
  {
    description: 'My Portfolio',
    bgImage: '/work-3.png',
    codeUrl: 'https://github.com/priyankatayi/portfolio',
    liveUrl: 'https://portfolio-eosin-xi.vercel.app/',
  },
  {
    description: 'SmartTalk AI',
    bgImage: '/smarttalk-ai.png',
    codeUrl: 'https://github.com/priyankatayi/smarttalk-ai',
    liveUrl: 'https://smarttalk-ai-weld.vercel.app',
  },
  {
    description: 'Graduate Work',
    bgImage: '/work-4.png',
    liveUrl: 'https://sites.gsu.edu/innovation/2016/03/04/geo-tagging-underground-atlanta/',
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages',
    description: 'JavaScript ReactJS, Redux, NodeJS, HTML, CSS',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Education',
    description: 'Masters in Computer Science, Georgia State University',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Experience',
    description: '4+ years as a Front End Developer',
  },
];

export const toolsData = [assets.vscode, assets.mongodb, assets.figma, assets.git];

export const experience = [
  {
    title: 'Frontend Developer',
    company: 'Capgemini America Inc.',
    period: 'Apr 2017 – Jun 2025',
    location: 'Atlanta, GA',
    responsibilities: [
      'Developed scalable and responsive web applications using React.js, Redux, JavaScript (ES6+), HTML5, and CSS3(SCSS)',
      'Created responsive UIs from Figma/InVision designs using HTML5, SCSS, and Material UI.',
      'Developed RESTful APIs using Node.js and Express, and integrated MongoDB for efficient data storage and retrieval',
      'Integrated front-end components with backend REST APIs and third-party services to deliver seamless user experiences',
      'Implemented event tracking and user analytics using tools like Google Analytics and Optimizely to gather insights and support data-driven decisions',
      'Utilized Git for version control, managing feature branches and coordinating deployments across staging and production environments.',
      'Collaborated closely with QA, backend developers, and analysts in Agile/Scrum ceremonies',
      'Developed unit, integration and snapshot tests using Jest, Enzyme, and Storybook, ensuring high test coverage.',
      'Maintained code documentation using JSDoc and Confluence and tracked project progress using JIRA.',
      'Gained exposure to CI/CD pipelines and automated deployment processes handled by the DevOps team',
      'Designed and optimized complex queries, developed stored procedures, views, and indexes in MySQL to support efficient data retrieval and application performance.',
    ],
  },
];
